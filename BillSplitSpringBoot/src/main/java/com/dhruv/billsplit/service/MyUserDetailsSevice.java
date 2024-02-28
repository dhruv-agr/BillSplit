package com.dhruv.billsplit.service;

import com.dhruv.billsplit.entities.Users;
import com.dhruv.billsplit.entities.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsSevice implements UserDetailsService {

	@Autowired
	private UserRepository repo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("############# My user details service load user by username called");
		Users user = repo.findByEmail(username);
		if(user==null){
			System.out.println("########### User not found");
			throw new UsernameNotFoundException("User 404");

		}

		return user;
	}

}

