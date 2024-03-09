package com.dhruv.billsplit.req;

import org.springframework.stereotype.Component;

@Component
public class AddPaymentRequest {
    String payer;
    String recipient;
    double amount;

    public String getPayer() {
        return payer;
    }

    public void setPayer(String payer) {
        this.payer = payer;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
