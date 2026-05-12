import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Grooming from "./components/Grooming";
import Veterinary from "./components/Veterinary";
import Tips from "./components/Tips";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

import ViewAppointments from "./components/ViewAppointments";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <Grooming />
            <Veterinary />
            <Tips />
            <Appointment />
            <Footer />
        </>
    );
}

function App() {
    return (

        <BrowserRouter>

            <Routes>

                {/* Home Page */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* View Appointments Page */}
                <Route
                    path="/view"
                    element={<ViewAppointments />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;