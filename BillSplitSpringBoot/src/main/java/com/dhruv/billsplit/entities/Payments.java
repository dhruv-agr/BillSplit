package com.dhruv.billsplit.entities;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import java.sql.Timestamp;
import java.time.Instant;

@Entity
public class Payments extends AuditorEntity{
    @Id
    @GeneratedValue( strategy= GenerationType.AUTO,
            generator="native")
    int paymentId;
    @ManyToOne
    UserGroup userGroup;
    @ManyToOne
    Users payer;
    @ManyToOne
    Users recipient;


    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }


    public UserGroup getUserGroup() {
        return userGroup;
    }

    public void setUserGroup(UserGroup userGroup) {
        this.userGroup = userGroup;
    }

    public Users getPayer() {
        return payer;
    }

    public void setPayer(Users payer) {
        this.payer = payer;
    }

    public Users getRecipient() {
        return recipient;
    }

    public void setRecipient(Users recipient) {
        this.recipient = recipient;
    }
}
