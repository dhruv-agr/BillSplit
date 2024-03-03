package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class ExpenseReadRequest {
    private int Id;

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }
}
