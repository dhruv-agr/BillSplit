package com.dhruv.billsplit.entities;


import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
public class UserGroup extends AuditorEntity{
	@Id
	@GeneratedValue( strategy= GenerationType.AUTO,
			generator="native")
	int user_group_id;
	String user_group_name;




	@JsonIgnore
	@ManyToMany
	List<Users> users;
	@JsonIgnore
	@OneToMany(mappedBy = "userGroup")
	List<Expenses> expenses;
	@JsonIgnore
	@OneToMany(mappedBy = "userGroup")
	List<Payments> payments;

	public List<Expenses> getExpenses() {
		return expenses;
	}

	public void setExpenses(List<Expenses> expenses) {
		this.expenses = expenses;
	}

	public List<Payments> getPayments() {
		return payments;
	}

	public void setPayments(List<Payments> payments) {
		this.payments = payments;
	}

	public List<Users> getUsers() {
		return users;
	}

	public void setUsers(List<Users> users) {
		this.users = users;
	}

	public int getUser_group_id() {
		return user_group_id;
	}
	public void setUser_group_id(int user_group_id) {
		this.user_group_id = user_group_id;
	}
	public String getUser_group_name() {
		return user_group_name;
	}
	public void setUser_group_name(String user_group_name) {
		this.user_group_name = user_group_name;
	}

}
