package com.dhruv.billsplit.controllers;

import java.util.List;
import java.util.stream.Collectors;

import com.dhruv.billsplit.entities.*;
import com.dhruv.billsplit.req.*;
import com.dhruv.billsplit.res.*;
import com.dhruv.billsplit.RegisterRequest;
import com.dhruv.billsplit.service.AuthenticationService;
import com.dhruv.billsplit.service.MyUserDetailsSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class Controller {
	@Autowired
	GroupsRepository groupsRepository;

	@Autowired
	MyUserDetailsSevice myUserDetailsSevice;

	@Autowired
	AuthenticationService authenticationService;

	@Autowired
	UserRepository userRepository;

	@Autowired
	UserReadResponse userReadResponse;

	@Autowired
	ExpensesRepository expensesRepository;
	@Autowired
	ExpenseReadResponse expenseReadResponse;

	@Autowired
	AllExpensesReadRequest allExpensesReadRequest;

	@Autowired
	AllExpenseReadResponse allExpensesReadResponse;

	@GetMapping("/user")
	public UserReadResponse getUser(@RequestBody UserReadRequest userReadRequest) {
		System.out.println("############# In get user");
		Users user = userRepository.findByEmail(userReadRequest.getEmail());
		userReadResponse.setEmail(user.getEmail());
		userReadResponse.setFirstName(user.getFirstname());
		userReadResponse.setLastName(user.getLastname());
		List<String> friendList = user.getFriends().stream().map(Users::getEmail).collect(Collectors.toList());
		System.out.println("######## Friend list is: " + friendList);
		userReadResponse.setFriends(friendList);
		return userReadResponse;
	}
	@GetMapping("/testpage")
	public TestPageResponse testpage(HttpServletRequest request, HttpServletResponse response) {

		return new TestPageResponse();
	}

	@GetMapping("/isTokenExpired")
	public String isTokenExpired(HttpServletRequest request, HttpServletResponse response) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		System.out.println("########## Username of authenticated user is: " + ((Users)authentication.getPrincipal()).getUsername());
		return "ALL OK";
	}

	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(
			@RequestBody RegisterRequest request
	) {
		return ResponseEntity.ok(authenticationService.register(request));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(
			@RequestBody AuthenticationRequest request
	) {
		return ResponseEntity.ok(authenticationService.authenticate(request));
	}
	
	@GetMapping("/loginSuccess")
	public ResponseEntity<String> loginSuccess(HttpServletRequest request, HttpServletResponse response) {
		
		return ResponseEntity.ok()
		        .header("Clear-Site-Data","\"cookies\"")
		        .body("Login Successful"); 
	}

	
	@GetMapping("/groups")
	public List<UserGroup> groups() {
		System.out.println("############# groups endpoint called");
		System.out.println(groupsRepository.findAll().toString());
		return groupsRepository.findAll();
		
		
	}
	@GetMapping("/")
	public ResponseEntity<String> mypage() {
		System.out.println("############# In home");
//		ResponseEntity..
		return ResponseEntity.ok("Hello HOME !!!");
	}
	
	@PostMapping("/group")
	@ResponseBody
	public void createGroup(@RequestBody UserGroup userGroup) {
		System.out.println("############ group post endpoint called");
		groupsRepository.save(userGroup);
		
	}

	@PostMapping("/groupUsers")
	@ResponseBody
	public void addGroupUsers(@RequestBody AddGroupUsersRequest addGroupUsersRequest) {
		System.out.println("################ add group user post endpoint called");

		myUserDetailsSevice.addGroupUser(addGroupUsersRequest);


	}

	@PostMapping("/friend")
	@ResponseBody
	public void addFriend(@RequestBody AddFriendRequest addFriendRequest) {
		System.out.println("################ add friend post endpoint called");

		myUserDetailsSevice.addFriend(addFriendRequest);


	}

	@PostMapping("/expense")
	@ResponseBody
	public void addExpense(@RequestBody AddExpenseRequest addExpenseRequest) {
		System.out.println("################ add expense post endpoint called");

		myUserDetailsSevice.addExpense(addExpenseRequest);


	}

	@GetMapping("/expense")
	@ResponseBody
	public ExpenseReadResponse readExpense(@RequestBody ExpenseReadRequest expenseReadRequest) {
		System.out.println("################ read expense get endpoint called");

		expenseReadResponse=myUserDetailsSevice.readExpense(expenseReadRequest);
		return expenseReadResponse;

	}

	@GetMapping("/groupDetail")
	@ResponseBody
	public AllExpenseReadResponse readExpenses(@RequestParam int id) {
		System.out.println("################ read all expenses of a group get endpoint called");

		allExpensesReadResponse=myUserDetailsSevice.readGroupDetail(id);
		System.out.println("####### group detail response in controller is : " + allExpensesReadResponse.toString());
		return allExpensesReadResponse;

	}

	@PostMapping("/payment")
	@ResponseBody
	public void addPayment(@RequestBody AddPaymentRequest addPaymentRequest){
		System.out.println("########## Inside add payment post request");
		myUserDetailsSevice.addPayment(addPaymentRequest);
	}


}
