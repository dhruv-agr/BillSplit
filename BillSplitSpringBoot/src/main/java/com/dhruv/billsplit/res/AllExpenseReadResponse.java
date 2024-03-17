package com.dhruv.billsplit.res;

import com.dhruv.billsplit.entities.Expenses;
import com.dhruv.billsplit.entities.Payments;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class AllExpenseReadResponse {
    @JsonProperty("expenses_list")
    private List<ExpensesListReadResponse> expensesReadResponseList;

    @JsonProperty("payments_list")
    private List<PaymentsListReadResponse> paymentsListReadResponseList;

//    @JsonIgnore
//    @Autowired
//    ExpenseReadResponse expenseReadResponse;


    public List<PaymentsListReadResponse> getPaymentsListReadResponseList() {
        return paymentsListReadResponseList;
    }

    public void setPaymentsListReadResponseList(List<Payments> payments) {
        PaymentsListReadResponse paymentsListReadResponse = new PaymentsListReadResponse();
        this.paymentsListReadResponseList = new ArrayList<>();
        for(Payments payment:payments){
            paymentsListReadResponse.setGroupId(payment.getUserGroup().getUser_group_id());
            paymentsListReadResponse.setPaymentId(payment.getPaymentId());
            paymentsListReadResponse.setAmount(payment.getAmount());
            paymentsListReadResponse.setPayer(payment.getPayer().getUsername());
            paymentsListReadResponse.setRecipient(payment.getRecipient().getUsername());
            paymentsListReadResponse.setCreated_by(payment.getCreatedBy());
            paymentsListReadResponse.setCreation_date(payment.getCreatedOn());
            paymentsListReadResponse.setUpdated_by(payment.getUpdatedBy());
            paymentsListReadResponse.setUpdated_on(payment.getUpdatedOn());
            this.paymentsListReadResponseList.add(paymentsListReadResponse);
        }
    }

    public List<ExpensesListReadResponse> getExpensesReadResponseList() {
        return expensesReadResponseList;
    }

    public void setExpensesReadResponseList(List<Expenses> expenses) {
        ExpensesListReadResponse expenseReadResponse = new ExpensesListReadResponse();
        this.expensesReadResponseList = new ArrayList<>();
        for(Expenses expense:expenses){
            expenseReadResponse.setExpenseId(expense.getExpense_id());
            expenseReadResponse.setGroupId(expense.getUserGroup().getUser_group_id());
            expenseReadResponse.setDescription(expense.getDescription());
            expenseReadResponse.setAmount(expense.getAmount());
            expenseReadResponse.setCreated_by(expense.getCreatedBy());
            expenseReadResponse.setCreation_date(expense.getCreatedOn());
            expenseReadResponse.setUpdated_by(expense.getUpdatedBy());
            expenseReadResponse.setUpdated_on(expense.getUpdatedOn());
            this.expensesReadResponseList.add(expenseReadResponse);
        }
        System.out.println("####### expense read response list is : " + this.expensesReadResponseList);
    }
}
