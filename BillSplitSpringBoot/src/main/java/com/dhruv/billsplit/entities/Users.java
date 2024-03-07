package com.dhruv.billsplit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Set;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
public class Users implements UserDetails {

  @Id
  private String email;
  private String firstname;
  private String lastname;

  private String password;
  @JsonIgnore
  @ManyToMany(mappedBy = "participants")
  private List<Expenses> expenses;
  @ManyToMany(mappedBy = "paidBy")
  private List<Expenses> paidByThisUser;


  @JsonIgnore
  @ManyToMany(mappedBy = "users")
  private List<UserGroup> userGroups;


  @JsonIgnore
  @OneToMany
  @JoinTable(name="friends")
  @JoinColumn(name="user", referencedColumnName="email")
  @JoinColumn(name="friend", referencedColumnName="email")
  private Set<Users> friends;

  @OneToMany(mappedBy = "user")
  private List<Debt> debts;


  public List<Expenses> getPaidByThisUser() {
    return paidByThisUser;
  }

  public void setPaidByThisUser(List<Expenses> paidByThisUser) {
    this.paidByThisUser = paidByThisUser;
  }

  public List<UserGroup> getUserGroups() {
    return userGroups;
  }

  public void setUserGroups(List<UserGroup> userGroups) {
    this.userGroups = userGroups;
  }


  public Set<Users> getFriends() {
    return friends;
  }

  public void setFriends(Set<Users> friends) {
    this.friends = friends;
  }
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
//    return role.getAuthorities();
	  return null;
  }


  @Override
  public String getUsername() {
    return email;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }



public String getFirstname() {
	return firstname;
}

public void setFirstname(String firstname) {
	this.firstname = firstname;
}

public String getLastname() {
	return lastname;
}

public void setLastname(String lastname) {
	this.lastname = lastname;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

  public List<Expenses> getExpenses() {
    return expenses;
  }

  public void setExpenses(List<Expenses> expenses) {
    this.expenses = expenses;
  }

  @JsonIgnore
@Override
public String getPassword() {
	// TODO Auto-generated method stub
	return this.password;
}

public void setPassword(String password){
    this.password=password;
}


}
