import React, { useState } from "react";
import "../styles/TicketSelection.css";
import { useNavigate } from "react-router-dom";

const TicketSelction = () => {
  const navigate = useNavigate();
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [numberOfTickets, setNumberOfTickets] = useState(0);
  const [error, setError] = useState("");

  const handleTicketTypeSelect = (type) => {
    setSelectedTicketType(type);
    setError("");
  };

  const handleNumberOfTicketsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumberOfTickets(value);
    setError("");
  };

  const handleNext = () => {
    if (selectedTicketType === null || numberOfTickets === 0) {
      setError("Please select a ticket type and enter the number of tickets.");
      return;
    }
    navigate("/attendee-details");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="ticket-selction-container">
      <div className="ticket-heading">
        <h3>Ticket Selection</h3>

        <span>Step 1/3</span>
      </div>

      <div className="progress-bar-heading"></div>

      <div className="frame-2">
        <div className="techember-heading">
          <h1>Techember Fest ”25</h1>
          <p>
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>

          <div className="event-details">
            <span>📍 [Event Location]</span>

            <span>| |</span>

            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="progress-bar"></div>

        <div className="ticket-type">
          <p className="text1">Select Ticket type</p>
          <div className="ticket-boxes">
            <div
              className={`ticket-box ${
                selectedTicketType === "Free" ? "selected" : ""
              }`}
              onClick={() => handleTicketTypeSelect("Free")}
            >
              <h1>Free</h1>
              <span>REGULAR ACCESS</span>
              <p>20/52</p>
            </div>
            <div
              className={`ticket-box ${
                selectedTicketType === "VIP" ? "selected" : ""
              }`}
              onClick={() => handleTicketTypeSelect("VIP")}
            >
              <h1>$150</h1>
              <span>VIP ACCESS</span>
              <p>20/52</p>
            </div>
            <div
              className={`ticket-box ${
                selectedTicketType === "VVIP" ? "selected" : ""
              }`}
              onClick={() => handleTicketTypeSelect("VVIP")}
            >
              <h1>$150</h1>
              <span>VVIP ACCESS</span>
              <p>20/52</p>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="ticket-select">
          <h1> Number of Tickets</h1>

          <div className="input-select-field">
            <select
              name="ticket-dropdown"
              id="ticket-dropdown"
              value={numberOfTickets}
              onChange={handleNumberOfTicketsChange}
            >
              <option value="0">0 </option>
              <option value="1">1 </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="btns">
          <button onClick={handleCancel}>cancel</button>
          <button
            onClick={handleNext}
            disabled={!selectedTicketType || numberOfTickets === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelction;

// <label htmlFor="ticket-dropdown">Number of tickets</label>
