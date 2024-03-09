package com.dhruv.billsplit.entities;

import jakarta.persistence.Column;
import jakarta.persistence.PreUpdate;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import jakarta.persistence.*;


@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class AuditorEntity {

    @CreatedDate
    @Column(name = "CreatedOn")
    private LocalDateTime createdOn;

    @CreatedBy
    @Column(name = "CreatedBy", length = 50)
    private String createdBy;


    @LastModifiedDate
    @Column(name = "UpdatedOn")
    private LocalDateTime updatedOn;

    @LastModifiedBy
    @Column(name = "UpdatedBy", length = 50)
    private String updatedBy;

//    @Column(name = "DeletedOn")
//    private LocalDateTime deletedOn;
//
//    @Column(name = "DeletedBy", length = 50)
//    private String deletedBy;
//
//    @Column(name = "isDeleted", length = 50)
//    private Boolean isDeleted = false;

//    @PreUpdate
//    @PrePersist
//    public void beforeAnyUpdate() {
//        if (isDeleted != null && isDeleted) {
//
//            if (deletedBy == null) {
//                deletedBy = SignedUserHelper.userId().toString();
//            }
//
//            if (getDeletedOn() == null) {
//                deletedOn = LocalDateTime.now();
//            }
//        }
//    }

}