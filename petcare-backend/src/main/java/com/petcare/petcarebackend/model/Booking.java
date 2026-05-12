package com.petcare.petcarebackend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter   // IMPORTANT for Edit
@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String petName;
    private String petType;

    private String ownerName;
    private String ownerPhone;
    private String ownerEmail;

    private String serviceType;

    private String preferredDate;
    private String preferredTime;

    private String specialRequests;

    public Booking() {}

}