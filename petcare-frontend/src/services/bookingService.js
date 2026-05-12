import axios from "axios";

const API_URL =
    "http://localhost:8080/api/bookings";

// GET all bookings
export const getBookings = () =>
    axios.get(API_URL);

// CREATE booking
export const createBooking = (data) =>
    axios.post(API_URL, data);

// DELETE booking
export const deleteBooking = (id) =>
    axios.delete(`${API_URL}/${id}`);