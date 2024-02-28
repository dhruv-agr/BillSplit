package com.dhruv.billsplit.service;



import com.dhruv.billsplit.AuthenticationRequest;
import com.dhruv.billsplit.AuthenticationResponse;
import com.dhruv.billsplit.RegisterRequest;
import com.dhruv.billsplit.entities.Users;
import com.dhruv.billsplit.entities.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;


@Service

public class AuthenticationService {
  private final UserRepository repository;
//  private final TokenRepository tokenRepository;
  private final JwtService jwtService;

  @Autowired
    AuthenticationManager authenticationManager;

  @Autowired
  PasswordEncoder passwordEncoder;
  
 
  
  private final AuthenticationResponse authenticationResponse;
//  private final AuthenticationManager authenticationManager;

  public AuthenticationService(UserRepository repository, JwtService jwtService, AuthenticationResponse authenticationResponse) {
	
	this.repository = repository;
	this.jwtService = jwtService;
//	this.user = user;
	this.authenticationResponse = authenticationResponse;
}

public AuthenticationResponse register(RegisterRequest request) {
	System.out.println("Inside authentication service register method");
	Users user = new Users();
	user.setEmail(request.getEmail());
	user.setFirstname(request.getFirstname());
	user.setLastname(request.getLastname());
   user.setPassword(passwordEncoder.encode(request.getPassword()));
    var savedUser = repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    System.out.println("########## After generating jwt in register of authentication service");
//    var refreshToken = jwtService.generateRefreshToken(user);
//    saveUserToken(savedUser, jwtToken);
    authenticationResponse.setAccessToken(jwtToken);
    return authenticationResponse;
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
      System.out.println("################# Inside authenticate of authentication service");
      authenticationManager.authenticate(
              new UsernamePasswordAuthenticationToken(
                      request.getEmail(),
                      request.getPassword()
              )
      );
      System.out.println("############## After authentication in authentication service");
    var user = repository.findByEmail(request.getEmail());
    var jwtToken = jwtService.generateToken(user);
//    var refreshToken = jwtService.generateRefreshToken(user);
//    revokeAllUserTokens(user);
//    saveUserToken(user, jwtToken);
    
    authenticationResponse.setAccessToken(jwtToken);
      System.out.println("############## After setting jwt token in authentication service");
    return authenticationResponse;
  }

//  private void saveUserToken(User user, String jwtToken) {
//    var token = Token.builder()
//        .user(user)
//        .token(jwtToken)
//        .tokenType(TokenType.BEARER)
//        .expired(false)
//        .revoked(false)
//        .build();
//    tokenRepository.save(token);
//  }

//  private void revokeAllUserTokens(User user) {
//    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
//    if (validUserTokens.isEmpty())
//      return;
//    validUserTokens.forEach(token -> {
//      token.setExpired(true);
//      token.setRevoked(true);
//    });
//    tokenRepository.saveAll(validUserTokens);
//  }

//  public void refreshToken(
//          HttpServletRequest request,
//          HttpServletResponse response
//  ) throws IOException {
//    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//    final String refreshToken;
//    final String userEmail;
//    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
//      return;
//    }
//    refreshToken = authHeader.substring(7);
//    userEmail = jwtService.extractUsername(refreshToken);
//    if (userEmail != null) {
//      var user = this.repository.findByEmail(userEmail)
//              .orElseThrow();
//      if (jwtService.isTokenValid(refreshToken, user)) {
//        var accessToken = jwtService.generateToken(user);
//        revokeAllUserTokens(user);
//        saveUserToken(user, accessToken);
//        var authResponse = AuthenticationResponse.builder()
//                .accessToken(accessToken)
//                .refreshToken(refreshToken)
//                .build();
//        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
//      }
//    }
//  }
}
