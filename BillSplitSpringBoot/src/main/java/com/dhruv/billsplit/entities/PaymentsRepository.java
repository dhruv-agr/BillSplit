package com.dhruv.billsplit.entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentsRepository  extends JpaRepository<Payments,Integer> {
}
