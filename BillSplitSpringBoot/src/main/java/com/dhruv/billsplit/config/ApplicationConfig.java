package com.dhruv.billsplit.config;

import com.dhruv.billsplit.SpringSecurityAuditorAware;
import com.dhruv.billsplit.entities.UserRepository;
import com.dhruv.billsplit.service.MyUserDetailsSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableTransactionManagement
public class ApplicationConfig {
    @Autowired
    UserRepository userRepository;
    @Autowired
    MyUserDetailsSevice myUserDetailsSevice;


//    @Bean
//    public CommonsRequestLoggingFilter logFilter() {
//        CommonsRequestLoggingFilter filter
//                = new CommonsRequestLoggingFilter();
//        filter.setIncludeQueryString(true);
//        filter.setIncludePayload(true);
//        filter.setMaxPayloadLength(10000);
//        filter.setIncludeHeaders(false);
//        filter.setAfterMessagePrefix("REQUEST DATA: ");
//        return filter;
//    }


    @Bean
    public AuditorAware auditorAware() {
        return new SpringSecurityAuditorAware();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(myUserDetailsSevice);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

//    @Bean
//    public AuditorAware<Integer> auditorAware() {
//        return new ApplicationAuditAware();
//    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}

