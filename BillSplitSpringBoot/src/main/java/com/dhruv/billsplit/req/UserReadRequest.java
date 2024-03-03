package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class UserReadRequest {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
