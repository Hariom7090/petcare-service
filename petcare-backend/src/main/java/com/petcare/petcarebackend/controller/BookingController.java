package com.petcare.petcarebackend.controller;

import com.petcare.petcarebackend.model.Booking;
import com.petcare.petcarebackend.service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService service;

    // CREATE
    @PostMapping
    public Booking createBooking(
            @RequestBody Booking booking) {

        return service.saveBooking(booking);
    }

    // READ
    @GetMapping
    public List<Booking> getAllBookings() {

        return service.getAllBookings();
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteBooking(
            @PathVariable Long id) {

        service.deleteBooking(id);
    }

    // UPDATE (EDIT)
    @PutMapping("/{id}")
    public Booking updateBooking(
            @PathVariable Long id,
            @RequestBody Booking booking) {

        booking.setId(id);

        return service.saveBooking(booking);
    }

}