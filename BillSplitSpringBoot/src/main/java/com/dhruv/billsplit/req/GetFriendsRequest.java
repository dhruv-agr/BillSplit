package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class GetFriendsRequest {
    private String email;

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
