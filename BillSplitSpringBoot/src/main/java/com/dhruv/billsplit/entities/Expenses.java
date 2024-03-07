package com.dhruv.billsplit.entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Expenses {

    @Id
    @GeneratedValue( strategy= GenerationType.AUTO,
            generator="native")
    private int expense_id;
    private String description;

    @ManyToMany
    private List<Users> paidBy;
    private double amount;
    private String splitType;

    @OneToMany(mappedBy = "expenses")
    private List<Debt> debts;

    public List<Debt> getDebts() {
        return debts;
    }

    public void setDebts(List<Debt> debts) {
        this.debts = debts;
    }

    public UserGroup getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(UserGroup userGroup) {
        this.userGroup = userGroup;
    }

    @ManyToOne
    private UserGroup userGroup;

    @ManyToMany
    private List<Users> participants;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Users> getPaidBy() {
        return paidBy;
    }

    public void setPaidBy(List<Users> paidBy) {
        this.paidBy = paidBy;
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



    public List<Users> getParticipants() {
        return participants;
    }

    public void setParticipants(List<Users> participants) {
        this.participants = participants;
    }

    public int getExpense_id() {
        return expense_id;
    }

    public void setExpense_id(int expense_id) {
        this.expense_id = expense_id;
    }
}
