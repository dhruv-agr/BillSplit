package com.dhruv.billsplit.service;

import com.dhruv.billsplit.entities.*;
import com.dhruv.billsplit.req.AddExpenseRequest;
import com.dhruv.billsplit.req.AddFriendRequest;
import com.dhruv.billsplit.req.AddGroupUsersRequest;
import com.dhruv.billsplit.req.ExpenseReadRequest;
import com.dhruv.billsplit.res.ExpenseReadResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class MyUserDetailsSevice implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Autowired
	GroupsRepository groupsRepository;

	@Autowired
	ExpensesRepository expensesRepository;

	@Autowired
	ExpenseReadResponse expenseReadResponse;

	@Autowired
	DebtRepository debtRepository;

//	public MyUserDetailsSevice(UserRepository userRepository, GroupsRepository groupsRepository) {
//		super();
//		this.userRepository = userRepository;
//		this.groupsRepository = groupsRepository;
//	}
	public MyUserDetailsSevice(){

	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("############# My user details service load user by username called");
		Users user = userRepository.findByEmail(username);
		if(user==null){
			System.out.println("########### User not found");
			throw new UsernameNotFoundException("User 404");

		}

		return user;
	}

	public void addGroupUser(AddGroupUsersRequest addGroupUsersRequest){
		System.out.println("###### user set in request is: " + addGroupUsersRequest.getEmailIds().toString());
		System.out.println("###### user set to list : " + addGroupUsersRequest.getEmailIds().stream().toList());

		List<Users> usersList = userRepository.findAllByEmailIn(addGroupUsersRequest.getEmailIds().stream().toList());

		System.out.println("####### Users retrieved are: " + usersList.toString());

		Boolean allUsersPresent = true;
		for(Users user:usersList){
			if(!(addGroupUsersRequest.getEmailIds().contains(user.getEmail()))){
				allUsersPresent = false;
			}
		}


		if(allUsersPresent && usersList.size()!=0){
			System.out.println("########### All users in request found in db");
			UserGroup userGroup = groupsRepository.findById(addGroupUsersRequest.getGroup_id()).orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "UserGroup not found."));
			userGroup.getUsers().addAll(usersList);
			groupsRepository.save(userGroup);
		}
		else{
			System.out.println("############### Some users in request not present in system");
		}
	}

	@Transactional
	public void addFriend(AddFriendRequest addFriendRequest){
		Users user = userRepository.findByEmail(addFriendRequest.getUserEmail());
		Users friend = userRepository.findByEmail(addFriendRequest.getFriendEmail());
		if(user!=null && friend !=null){
			System.out.println("######## Both users found");
			user.getFriends().add(friend);
			friend.getFriends().add(user);
			userRepository.save(user);
			userRepository.save(friend);
		}
		else{
			System.out.println("######## One or both users not found");
		}
	}

	@Transactional
	public void addExpense(AddExpenseRequest addExpenseRequest){
		System.out.println("########## Inside add expense of service");

		List<Users> usersList = userRepository.findAllByEmailIn(addExpenseRequest.getParticipants());

		List<Users> paidByList = userRepository.findAllByEmailIn(addExpenseRequest.getPaidBy());

		UserGroup userGroup = groupsRepository.findById(addExpenseRequest.getUsergroup_id()).orElseThrow();

		System.out.println("####### Users retrieved are: " + usersList.toString());

		Boolean allUsersPresent = true;
		for(Users user:usersList){
			if(!(addExpenseRequest.getParticipants().contains(user.getEmail()))){
				allUsersPresent = false;
			}
		}

		if(usersList.size()!=0 && allUsersPresent){
			System.out.println("############ All users found in participant list");
			Expenses expenses = new Expenses();
			expenses.setAmount(addExpenseRequest.getAmount());
			expenses.setDescription(addExpenseRequest.getDescription());
			expenses.setSplitType(addExpenseRequest.getSplit_type());
			expenses.setParticipants(usersList);
			expenses.setUserGroup(userGroup);
			expenses.setPaidBy(paidByList);
			expenses = expensesRepository.save(expenses);

			if("EQUAL".equals(addExpenseRequest.getSplit_type())){
				System.out.println("######## split type is equal in add expense service");
				List<Debt> debts = new ArrayList<>();
				double share = addExpenseRequest.getAmount()/usersList.size();
				for(Users user : usersList){
					debts.add(new Debt(expenses,user,share));
				}
				debtRepository.saveAll(debts);
//				expenses.setDebts(debts);
			}

		}

	}

	public ExpenseReadResponse readExpense(ExpenseReadRequest expenseReadRequest){
		System.out.println("######## inside read expense of service");
		Expenses expenses = expensesRepository.findById(expenseReadRequest.getId()).orElseThrow();
		expenseReadResponse.setAmount(expenses.getAmount());
		expenseReadResponse.setDescription(expenses.getDescription());
		expenseReadResponse.setSplitType(expenses.getSplitType());
		expenseReadResponse.setUsergroup_name(expenses.getUserGroup().getUser_group_name());
		List<String> participants = expenses.getParticipants().stream().map(Users::getEmail).collect(Collectors.toList());
		System.out.println("######## participants list is: " + participants);
		expenseReadResponse.setParticipantList(participants);
		List<String> paidByList = expenses.getPaidBy().stream().map(Users::getEmail).collect(Collectors.toList());
		System.out.println("######### paid by list is : " + paidByList);
		expenseReadResponse.setPaidByList(paidByList);



		Map<String,Double> owesMap = new HashMap<>();
		List<Debt> debtsList = new ArrayList<>();
		debtsList = expenses.getDebts();
		for(Debt debt: debtsList){
			owesMap.put(debt.getUser().getEmail(),debt.getShare());
		}
		expenseReadResponse.setOwes(owesMap);



		return expenseReadResponse;
	}

}

