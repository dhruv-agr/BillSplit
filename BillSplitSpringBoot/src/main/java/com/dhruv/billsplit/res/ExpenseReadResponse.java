package com.dhruv.billsplit.res;

import com.dhruv.billsplit.entities.Users;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Component
public class ExpenseReadResponse {
    private String description;
    private double amount;
    private String splitType;
    private List<Users> participantList;

    private List<Users> paidByList;
    private String usergroup_name;

    private Map<String,Double> owes;

    private int groupId;
    private int expenseId;

    private String created_by;
    private String updated_by;
    private LocalDateTime creation_date;
    private LocalDateTime updated_on;

    public int getGroupId() {
        return groupId;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public int getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(int expenseId) {
        this.expenseId = expenseId;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public String getUpdated_by() {
        return updated_by;
    }

    public void setUpdated_by(String updated_by) {
        this.updated_by = updated_by;
    }

    public LocalDateTime getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(LocalDateTime creation_date) {
        this.creation_date = creation_date;
    }

    public LocalDateTime getUpdated_on() {
        return updated_on;
    }

    public void setUpdated_on(LocalDateTime updated_on) {
        this.updated_on = updated_on;
    }

    public Map<String, Double> getOwes() {
        return owes;
    }

    public void setOwes(Map<String, Double> owes) {
        this.owes = owes;
    }

    public List<Users> getPaidByList() {
        return paidByList;
    }

    public void setPaidByList(List<Users> paidByList) {
        this.paidByList = paidByList;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getSplitType() {
        return splitType;
    }

    public void setSplitType(String splitType) {
        this.splitType = splitType;
    }

    public List<Users> getParticipantList() {
        return participantList;
    }

    public void setParticipantList(List<Users> participantList) {
        this.participantList = participantList;
    }

    public String getUsergroup_name() {
        return usergroup_name;
    }

    public void setUsergroup_name(String usergroup_name) {
        this.usergroup_name = usergroup_name;
    }
}
