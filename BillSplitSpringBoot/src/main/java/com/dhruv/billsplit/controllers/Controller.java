package com.dhruv.billsplit.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dhruv.billsplit.entities.GroupsRepository;
import com.dhruv.billsplit.entities.UserGroups;

@RestController
public class Controller {
	@Autowired
	GroupsRepository groupsRepository; 
	
	@GetMapping("/groups")
	public List<UserGroups> groups() {
		System.out.println("groups endpoint called");
		System.out.println(groupsRepository.findAll().toString());
		return groupsRepository.findAll();
		
		
	}
	
	@PostMapping("/group")
	@ResponseBody
	public void createGroup(@RequestBody UserGroups userGroup) {
		System.out.println("group post endpoint called");
		groupsRepository.save(userGroup);
		
	}
}
