import React from 'react'

import React from "react";
import "../styles/TicketBooked.css";

const TicketBooked = ({ location }) => {
  const { name, email, avatarUrl } = location.state || {};

  if (!name || !email || !avatarUrl) {
    return <p>No ticket data found. Please fill out the form.</p>;
  }

  return (
    <div className="ticket-container">
      <h2>Your Conference Ticket</h2>
      <div className="ticket-details">
        <img src={avatarUrl} alt="User Avatar" className="ticket-avatar" />
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default TicketBooked;
