package com.dhruv.billsplit.entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupsRepository extends JpaRepository<UserGroup,Integer>{
	
	
}
