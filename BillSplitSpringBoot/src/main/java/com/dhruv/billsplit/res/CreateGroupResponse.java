package com.dhruv.billsplit.res;

import org.springframework.stereotype.Component;

@Component
public class CreateGroupResponse {
    String resString = "group created successfully";

    public String getResString() {
        return resString;
    }

    public void setResString(String resString) {
        this.resString = resString;
    }
}
