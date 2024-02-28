package com.dhruv.billsplit.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
public class Users implements UserDetails {

  @Id
  private String email;
  private String firstname;
  private String lastname;
  private String password;




@Enumerated(EnumType.STRING)
//  private Role role;

  @OneToMany(mappedBy = "user")
//  private List<Token> tokens;

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


@Override
public String getPassword() {
	// TODO Auto-generated method stub
	return this.password;
}

public void setPassword(String password){
    this.password=password;
}


}
