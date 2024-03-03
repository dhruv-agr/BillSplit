package com.dhruv.billsplit.entities;


import java.sql.Timestamp;
import java.util.List;

import jakarta.persistence.*;

@Entity
public class UserGroup {
	@Id
	@GeneratedValue( strategy= GenerationType.AUTO,
			generator="native")
	int user_group_id;
	String user_group_name;
	String created_by;
	Timestamp creation_date;

	@ManyToMany
	List<Users> users;

	@OneToMany(mappedBy = "userGroup")
	List<Expenses> expenses;

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
	public String getCreated_by() {
		return created_by;
	}
	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}
	public Timestamp getCreation_date() {
		return creation_date;
	}
	public void setCreation_date(Timestamp creation_date) {
		this.creation_date = creation_date;
	}
}
