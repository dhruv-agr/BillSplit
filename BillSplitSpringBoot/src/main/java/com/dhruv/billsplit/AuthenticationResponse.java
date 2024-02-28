package com.dhruv.billsplit;



import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;


@Component
public class AuthenticationResponse {

  @JsonProperty("access_token")
  private String accessToken;
  public AuthenticationResponse() {
	super();
}
public String getAccessToken() {
	return accessToken;
}
public void setAccessToken(String accessToken) {
	this.accessToken = accessToken;
}
//public String getRefreshToken() {
//	return refreshToken;
//}
//public void setRefreshToken(String refreshToken) {
//	this.refreshToken = refreshToken;
//}
//@JsonProperty("refresh_token")
//  private String refreshToken;
}
