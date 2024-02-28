package com.dhruv.billsplit.config;

import com.dhruv.billsplit.JwtAuthenticationFilter;
import com.dhruv.billsplit.entities.UserRepository;
import com.dhruv.billsplit.service.MyUserDetailsSevice;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.savedrequest.NullRequestCache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.web.util.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class OAuth2LoginSecurityConfig {
	


	@Autowired
	AuthenticationProvider authenticationProvider;
	
    private final JwtAuthenticationFilter jwtAuthFilter;
//    private final CheckIfCreatedFilter checkIfCreatedFilter;


	public OAuth2LoginSecurityConfig(JwtAuthenticationFilter jwtAuthFilter) {
		super();
		this.jwtAuthFilter = jwtAuthFilter;
//		this.checkIfCreatedFilter = checkIfCreatedFilter;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		NullRequestCache nullRequestCache = new NullRequestCache();
		http
			.csrf(AbstractHttpConfigurer::disable)
			.authorizeHttpRequests(authorize -> authorize
				.requestMatchers("/authenticate").permitAll()
				.requestMatchers("/register").permitAll()
					.requestMatchers("/testpage").permitAll()
				.anyRequest().authenticated()
			)

			.authenticationProvider(authenticationProvider)
//			.oauth2Login(oauth2 -> oauth2.successHandler(authSuccessHandler))
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.NEVER))
			.requestCache((cache) -> cache
		            .requestCache(nullRequestCache)
		        )
			.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}


	
//	  @Bean
//	    public AuthenticationManager authManager(HttpSecurity http) throws Exception {
//	        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
//	        authenticationManagerBuilder.authenticationProvider(customAuthProvider);
//	        authenticationManagerBuilder.inMemoryAuthentication()
//	            .withUser("memuser")
//	            .password(passwordEncoder().encode("pass"))
//	            .roles("USER");
//	        return authenticationManagerBuilder.build();
//	    }
	  
	  
//	  @Bean
//	  public UserDetailsService userDetailsService() {
//	    return username -> repository.findByEmail(username)
//	        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//	  }

}
