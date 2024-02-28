package com.dhruv.billsplit.controllers;

import java.util.List;

import com.dhruv.billsplit.AuthenticationRequest;
import com.dhruv.billsplit.AuthenticationResponse;
import com.dhruv.billsplit.RegisterRequest;
import com.dhruv.billsplit.res.TestPageResponse;
import com.dhruv.billsplit.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhruv.billsplit.entities.GroupsRepository;
import com.dhruv.billsplit.entities.UserGroups;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class Controller {
	@Autowired
	GroupsRepository groupsRepository;

	@Autowired
	AuthenticationService authenticationService;


	@GetMapping("/testpage")
	public TestPageResponse testpage(HttpServletRequest request, HttpServletResponse response) {

		return new TestPageResponse();
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
	public List<UserGroups> groups() {
		System.out.println("groups endpoint called");
		System.out.println(groupsRepository.findAll().toString());
		return groupsRepository.findAll();
		
		
	}
	@GetMapping("/")
	public ResponseEntity<String> mypage() {
		System.out.println("In home");
//		ResponseEntity..
		return ResponseEntity.ok("Hello HOME !!!");
	}
	
	@PostMapping("/group")
	@ResponseBody
	public void createGroup(@RequestBody UserGroups userGroup) {
		System.out.println("group post endpoint called");
		groupsRepository.save(userGroup);
		
	}
}
