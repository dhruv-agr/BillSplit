package com.dhruv.billsplit.entities;

import jakarta.persistence.*;

@Entity
public class Debt {
    @Id
    @GeneratedValue( strategy= GenerationType.AUTO,
            generator="native")
    private int Id;
    @ManyToOne
    private Expenses expenses;
    @ManyToOne
    private Users user;
    private double share;

    public Debt(){
        // No args mandatory constructor
    }
    public Debt(Expenses expenses,Users user, double share){
        this.expenses = expenses;
        this.user = user;
        this.share = share;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public double getShare() {
        return share;
    }

    public void setShare(double share) {
        this.share = share;
    }
}
