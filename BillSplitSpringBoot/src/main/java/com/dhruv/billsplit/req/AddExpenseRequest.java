package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AddExpenseRequest {
    private String description;
    private long amount;
    private String split_type;
    private List<String> paidBy;
    private List<String> participants;
    private int usergroup_id;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public String getSplit_type() {
        return split_type;
    }

    public void setSplit_type(String split_type) {
        this.split_type = split_type;
    }

    public List<String> getPaidBy() {
        return paidBy;
    }

    public void setPaidBy(List<String> paidBy) {
        this.paidBy = paidBy;
    }

    public List<String> getParticipants() {
        return participants;
    }

    public void setParticipants(List<String> participants) {
        this.participants = participants;
    }

    public int getUsergroup_id() {
        return usergroup_id;
    }

    public void setUsergroup_id(int usergroup_id) {
        this.usergroup_id = usergroup_id;
    }
}
