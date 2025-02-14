import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click
  const handleMyTicketClick = () => {
    navigate("/ticket-booked"); // Navigate to the TicketBooked page
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-img">
          <img src="src/assets/hugeicons_ticket-01.svg" alt="" />
        </div>

        <div className="logo-name">
          <img src="src/assets/ticz.svg" alt="" />
        </div>
      </div>
      <ul>
        <li>Events</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>

      <div className="btn">
        <button onClick={handleMyTicketClick}>My Ticket</button>
        <BsArrowRight />
      </div>
    </nav>
  );
};

export default Navbar;
