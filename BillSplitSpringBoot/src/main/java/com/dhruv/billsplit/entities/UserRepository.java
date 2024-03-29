package com.dhruv.billsplit.entities;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

  Users findByEmail(String email);
  List<Users> findAllByEmailIn(List<String> emailIds);
}

