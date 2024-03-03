package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class AddFriendRequest {
    private String userEmail;
    private String friendEmail;

    public String getFriendEmail() {
        return friendEmail;
    }

    public void setFriendEmail(String friendEmail) {
        this.friendEmail = friendEmail;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }
}
