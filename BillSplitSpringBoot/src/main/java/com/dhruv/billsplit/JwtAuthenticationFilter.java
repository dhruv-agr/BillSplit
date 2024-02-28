package com.dhruv.billsplit;

import java.io.IOException;

import com.dhruv.billsplit.entities.Users;
import com.dhruv.billsplit.service.MyUserDetailsSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.dhruv.billsplit.service.JwtService;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    JwtService jwtService;

    @Autowired
    MyUserDetailsSevice userDetailsService;

//public JwtAuthenticationFilter(JwtService jwtService, UserDetailsService userDetailsService) {
//	
//	this.jwtService = jwtService;
//	this.userDetailsService = userDetailsService;
//}
//  private final TokenRepository tokenRepository;

  @Override
  protected void doFilterInternal(
      @NonNull HttpServletRequest request,
      @NonNull HttpServletResponse response,
      @NonNull FilterChain filterChain
  ) throws ServletException, IOException {
//    if (request.getServletPath().contains("/api/v1/auth")) {
//      filterChain.doFilter(request, response);
//      return;
//    }
	  
	  System.out.println("############################### Inside jwt auth filter");
	  
	final String authHeader = request.getHeader("Authorization");
    final String jwt;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
    	System.out.println("############################## no jwt token found");
      filterChain.doFilter(request, response);
      return;
    }
    System.out.println("################################# jwt token found");
    jwt = authHeader.substring(7);
    
    try {
    	userEmail = jwtService.extractUsername(jwt);
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
          Users userDetails = (Users)this.userDetailsService.loadUserByUsername(userEmail);
//          var isTokenValid = tokenRepository.findByToken(jwt)
//              .map(t -> !t.isExpired() && !t.isRevoked())
//              .orElse(false);
          if (jwtService.isTokenValid(jwt, userDetails)) {
        	  System.out.println("###################### token is valid");
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities()
            );
            authToken.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(request)
            );
            SecurityContext context = SecurityContextHolder.createEmptyContext(); 
            context.setAuthentication(authToken);
            SecurityContextHolder.setContext(context);
          }
          
        }
    }
    catch(ExpiredJwtException e) {
    	e.printStackTrace(System.out);
    	System.out.println("######################### Token is expired");
    }
    
    System.out.println("################################ proceeding from jwt auth filter");
    filterChain.doFilter(request, response);
  }


}
