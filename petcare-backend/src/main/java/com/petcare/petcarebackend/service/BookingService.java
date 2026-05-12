package com.petcare.petcarebackend.service;

import com.petcare.petcarebackend.model.Booking;
import com.petcare.petcarebackend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    // SAVE (Create + Update)
    public Booking saveBooking(Booking booking) {
        return repository.save(booking);
    }

    // GET ALL
    public List<Booking> getAllBookings() {
        return repository.findAll();
    }

    // DELETE
    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }

}