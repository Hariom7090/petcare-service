import { useState } from "react";
import SignInPopup from "./SignInPopup";

function Header() {
   const [open, setOpen] = useState(false);


  return (
    <>
      <header>
        <div className="container header-content">
          <div className="logo">🐾 MyPetCare</div>

          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#grooming">Grooming</a></li>
              <li><a href="#veterinary">Veterinary</a></li>
              <li><a href="#tips">Pet Care Tips</a></li>
              <li><a href="#appointment">Book Appointment</a></li>
            </ul>
          </nav>
<a
          href="#"
          className="signin-btn"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          Sign In
        </a>
        </div>

      </header>

       <SignInPopup open={open} close={() => setOpen(false)} />
    </>
  );
}

export default Header;
