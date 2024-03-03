package com.dhruv.billsplit.res;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ExpenseReadResponse {
    private String description;
    private long amount;
    private String splitType;
    private List<String> participantList;

    private List<String> paidByList;
    private String usergroup_name;

    public List<String> getPaidByList() {
        return paidByList;
    }

    public void setPaidByList(List<String> paidByList) {
        this.paidByList = paidByList;
    }

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

    public String getSplitType() {
        return splitType;
    }

    public void setSplitType(String splitType) {
        this.splitType = splitType;
    }

    public List<String> getParticipantList() {
        return participantList;
    }

    public void setParticipantList(List<String> participantList) {
        this.participantList = participantList;
    }

    public String getUsergroup_name() {
        return usergroup_name;
    }

    public void setUsergroup_name(String usergroup_name) {
        this.usergroup_name = usergroup_name;
    }
}
