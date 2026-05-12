package com.petcare.petcarebackend.repository;

import com.petcare.petcarebackend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository
        extends JpaRepository<Booking, Long> {
}