package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

import java.util.HashSet;

@Component
public class AddGroupUsersRequest {

    private int group_id;
    private HashSet<String> emailIds;
    public int getGroup_id() {
        return group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }



    public HashSet<String> getEmailIds() {
        return emailIds;
    }

    public void setEmailIds(HashSet<String> emailIds) {
        this.emailIds = emailIds;
    }


}
