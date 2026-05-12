import { useState } from "react";
import axios from "axios";

function Appointment() {

  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    specialRequests: ""
  });

  // Handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    // VALIDATIONS

    // Pet Name
    if (formData.petName.trim().length < 2) {
      alert("Pet Name must be at least 2 characters");
      return;
    }

    // Pet Type
    if (formData.petType === "") {
      alert("Please select Pet Type");
      return;
    }

    // Owner Name
    if (formData.ownerName.trim().length < 2) {
      alert("Owner Name must be at least 2 characters");
      return;
    }

    // Phone Validation (10 digits)
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(formData.ownerPhone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    // Email Validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.ownerEmail)) {
      alert("Enter valid email address");
      return;
    }

    // Service Type
    if (formData.serviceType === "") {
      alert("Please select Service Type");
      return;
    }

    // Date Validation (No past date)
    const today = new Date().toISOString().split("T")[0];

    if (formData.preferredDate < today) {
      alert("Please select a future date");
      return;
    }

    // Time Validation
    if (formData.preferredTime === "") {
      alert("Please select Preferred Time");
      return;
    }

    // If validation passes → Send data

    axios.post(
        "http://localhost:8080/api/bookings",
        formData
    )
        .then(() => {

          alert("Appointment Booked Successfully!");

          // Reset form
          setFormData({
            petName: "",
            petType: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            serviceType: "",
            preferredDate: "",
            preferredTime: "",
            specialRequests: ""
          });

        })
        .catch(() => {
          alert("Error booking appointment");
        });

  };

  return (

      <section className="section appointment-section" id="appointment">

        <div className="container">

          <div className="section-title">
            <h2>Book an Appointment</h2>
            <p>Fill out the form below to schedule your pet's appointment</p>
          </div>

          <div className="form-container">

            <form onSubmit={handleSubmit}>

              <h3>
                <i className="fas fa-paw"></i> Pet Information
              </h3>

              <div className="form-row">

                <div className="form-group icon-input">
                  <i className="fas fa-dog"></i>

                  <input
                      type="text"
                      name="petName"
                      placeholder="Pet Name"
                      required
                      value={formData.petName}
                      onChange={handleChange}
                  />

                </div>

                <div className="form-group icon-input">
                  <i className="fas fa-list"></i>

                  <select
                      name="petType"
                      required
                      value={formData.petType}
                      onChange={handleChange}
                  >
                    <option value="">Pet Type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>

                </div>

              </div>

              <h3>
                <i className="fas fa-user"></i> Owner Information
              </h3>

              <div className="form-row">

                <div className="form-group icon-input">
                  <i className="fas fa-id-card"></i>

                  <input
                      type="text"
                      name="ownerName"
                      placeholder="Full Name"
                      required
                      value={formData.ownerName}
                      onChange={handleChange}
                  />

                </div>

                <div className="form-group icon-input">
                  <i className="fas fa-phone"></i>

                  <input
                      type="text"
                      name="ownerPhone"
                      placeholder="Phone Number"
                      required
                      maxLength="10"
                      pattern="[0-9]{10}"
                      value={formData.ownerPhone}
                      onChange={(e) => {

                        // Allow only numbers
                        const value = e.target.value.replace(/\D/g, '');

                        // Limit to 10 digits
                        if (value.length <= 10) {

                          setFormData({
                            ...formData,
                            ownerPhone: value
                          });

                        }

                      }}
                  />
                </div>

              </div>

              <div className="form-group icon-input">
                <i className="fas fa-envelope"></i>

                <input
                    type="email"
                    name="ownerEmail"
                    placeholder="Email Address"
                    required
                    value={formData.ownerEmail}
                    onChange={handleChange}
                />

              </div>

              <h3>
                <i className="fas fa-calendar-check"></i> Service Details
              </h3>

              <div className="form-group icon-input">
                <i className="fas fa-briefcase-medical"></i>

                <select
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="grooming">Grooming</option>
                  <option value="veterinary">Veterinary</option>
                  <option value="boarding">Boarding</option>
                  <option value="training">Training</option>
                  <option value="emergency">Emergency</option>
                </select>

              </div>

              <div className="form-row">

                <div className="form-group icon-input">
                  <i className="fas fa-calendar-day"></i>

                  <input
                      type="date"
                      name="preferredDate"
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                  />

                </div>

                <div className="form-group icon-input">
                  <i className="fas fa-clock"></i>

                  <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                  >
                    <option value="">Preferred Time</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                  </select>

                </div>

              </div>

              <div className="form-group icon-input">
                <i className="fas fa-note-sticky"></i>

                <textarea
                    name="specialRequests"
                    rows="4"
                    placeholder="Special Notes"
                    value={formData.specialRequests}
                    onChange={handleChange}
                ></textarea>

              </div>

              <button
                  type="submit"
                  className="submit-btn"
              >
                <i className="fas fa-paper-plane"></i>
                Book Appointment
              </button>

              <button
                  type="button"
                  className="view-btn"
                  onClick={() => window.location.href="/view"}
              >
                View Appointments
              </button>

            </form>

          </div>

        </div>

      </section>

  );

}

export default Appointment;