import React from "react";
import "../styles/TicketBooked.css";
import { useLocation, useNavigate } from "react-router-dom";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";

const TicketBooked = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    name,
    email,
    specialRequest,
    avatarUrl,
    selectedTicketType,
    numberOfTickets,
  } = location.state || {};

  const handleBookAnotherTicket = () => {
    navigate("/");
  };

  const handleDownloadTicket = () => {
    alert("Download functionality implemented.");
    const ticketElement = document.querySelector(".ticketBooked-container");
    html2canvas(ticketElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "ticket.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="tickectBooked-container">
      <div className="ticket-heading">
        <h3>Ready</h3>
        <span>Step 3/3</span>
      </div>
      <div className="progress-bar-heading"></div>

      <div className="mobile-view">
        <h1>Your Ticket is Booked!</h1>
        <span>Check your email for a copy pr you can download</span>

        <div className="ticket_wraps">
          <img src="/src/assets/TICKET.svg" alt="ticket background" className="ticket-background" />
        </div>

        <div className="inner-frame">
          <div className="inner-frame-header">
            <h3>Techember Fest ”25</h3>
            <p>📍 04 Rumens road, Ikoyi, Lagos</p>
            <p>📅 March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="uploaded-img">
            <img src={avatarUrl} alt="uploaded profile" />
          </div>

          <div className="tickets-info-wraper">
            <div className="ticket-info">
              <label htmlFor="name">Enter Your name</label>
              <span>{name}</span>
            </div>
            <div className="ticket-info">
              <label htmlFor="email">Enter your name</label>
              <span>{email}</span>
            </div>
            <div className="ticket-info">
              <label htmlFor="ticket-type">user ticket</label>
              <span>{selectedTicketType}</span>
            </div>
            <div className="ticket-info">
              <label htmlFor="ticket-for">user ticket for</label>
              <span>{numberOfTickets} people</span>
            </div>

            <div className="ticket-info">
              <label htmlFor="special-request">Special Request?</label>
              <span>{specialRequest || "Nil"} </span>
            </div>
          </div>

          <div className="barcode">
          <Barcode value="0 5 3 4 5 6 8" className="bar-code"/>
        </div>
        </div>
        

      

        <div className="btns">
          <button onClick={handleBookAnotherTicket}>book another ticket</button>
          <button onClick={handleDownloadTicket}>Download</button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooked;

// <div className="eclipse-wrapper">
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse">e</div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        //   <div className="eclipse"></div>
        // </div>