package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class AllExpensesReadRequest {
    private int groupId;

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }
}
