import { useEffect, useState } from "react";
import axios from "axios";

function ViewAppointments() {

    const [bookings, setBookings] = useState([]);
    const [editingBooking, setEditingBooking] = useState(null);

    // Fetch Data
    const fetchBookings = () => {

        axios
            .get("http://localhost:8080/api/bookings")
            .then((response) => {

                setBookings(response.data);

            });

    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // DELETE
    const deleteBooking = (id) => {

        axios
            .delete(`http://localhost:8080/api/bookings/${id}`)
            .then(() => {

                alert("Appointment Deleted");
                fetchBookings();

            });

    };

    // EDIT
    const editBooking = (booking) => {

        setEditingBooking(booking);

    };

    // UPDATE
    const updateBooking = () => {

        axios
            .put(
                `http://localhost:8080/api/bookings/${editingBooking.id}`,
                editingBooking
            )
            .then(() => {

                alert("Appointment Updated");

                setEditingBooking(null);

                fetchBookings();

            });

    };

    return (

        <div className="view-container">

            <h2 className="view-title">
                All Appointments
            </h2>

            <div className="table-wrapper">

                <table className="appointment-table">

                    <thead>

                    <tr>

                        <th>ID</th>
                        <th>Pet</th>
                        <th>Type</th>
                        <th>Owner</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Notes</th>
                        <th>Action</th>

                    </tr>

                    </thead>

                    <tbody>

                    {bookings.map((b) => (

                        <tr key={b.id}>

                            <td>{b.id}</td>
                            <td>{b.petName}</td>
                            <td>{b.petType}</td>
                            <td>{b.ownerName}</td>
                            <td>{b.ownerPhone}</td>
                            <td>{b.ownerEmail}</td>
                            <td>{b.serviceType}</td>
                            <td>{b.preferredDate}</td>
                            <td>{b.preferredTime}</td>
                            <td>{b.specialRequests}</td>

                            <td>

                                <button
                                    className="edit-btn"
                                    onClick={() => editBooking(b)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteBooking(b.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                    </tbody>

                </table>

            </div>

            {/* EDIT FORM WITH ALL FIELDS */}

            {editingBooking && (

                <div className="edit-form">

                    <h3>Edit Appointment</h3>

                    <input
                        type="text"
                        placeholder="Pet Name"
                        value={editingBooking.petName}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                petName: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Pet Type"
                        value={editingBooking.petType}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                petType: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Owner Name"
                        value={editingBooking.ownerName}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                ownerName: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Phone"
                        value={editingBooking.ownerPhone}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                ownerPhone: e.target.value
                            })
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={editingBooking.ownerEmail}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                ownerEmail: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Service"
                        value={editingBooking.serviceType}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                serviceType: e.target.value
                            })
                        }
                    />

                    <input
                        type="date"
                        value={editingBooking.preferredDate}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                preferredDate: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Time"
                        value={editingBooking.preferredTime}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                preferredTime: e.target.value
                            })
                        }
                    />

                    <textarea
                        placeholder="Special Requests"
                        value={editingBooking.specialRequests}
                        onChange={(e) =>
                            setEditingBooking({
                                ...editingBooking,
                                specialRequests: e.target.value
                            })
                        }
                    />

                    <br />

                    <button
                        onClick={updateBooking}
                    >
                        Update Appointment
                    </button>

                </div>

            )}

        </div>

    );

}

export default ViewAppointments;