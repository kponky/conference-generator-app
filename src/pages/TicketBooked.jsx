import React, { useEffect, useState } from "react";
import "../styles/TicketBooked.css";
import { useLocation, useNavigate } from "react-router-dom";
import Barcode from "react-barcode";
import html2canvas from "html2canvas";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";

const TicketBooked = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [ticketData, setTicketData] = useState(null)
  const {
    name,
    email,
    specialRequest,
    avatarUrl,
    selectedTicketType,
    numberOfTickets,
  } = location.state || {};


  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("ticketData"));
    if (savedData) {
      setTicketData(savedData);
    } else if (location.state) {
      setTicketData(location.state);
      localStorage.setItem("ticketData", JSON.stringify(location.state));
    }
  }, [location.state]);

  const handleBookAnotherTicket = () => {
    navigate("/");
  };

  const handleDownloadTicket = () => {
    // alert("Download functionality implemented.");
    const ticketElement = document.querySelector(".ticket_phone-frame");
    if (ticketElement) {

      const button = document.querySelector(".download-button");
      button.disabled = true;
       button.textContent = "Downloading...";


      html2canvas(ticketElement).then((canvas) => {
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL();
        link.click();

        button.disabled = false;
        button.textContent = "Download";
      });
    } else {
      alert("Ticket element not found.");
    }
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

       <div className="ticket_phone-frame">
       
       <div className="ticket_wraps">
         <img
           src="/src/assets/TICKET.svg"
           alt="ticket background"
           className="ticket-background"
         />
       </div>

       <div className="inner-frame">
         <div className="inner-frame-header">
           <h3>Techember Fest ”25</h3>
           <p>📍 04 Rumens road, Ikoyi, Lagos</p>
           <p>📅 March 15, 2025 | 7:00 PM</p>
         </div>

         <div className="uploaded-img">
           {avatarUrl ? (
             <img
               src={avatarUrl}
               alt="uploaded profile"
               className="ticket-avatar"
             />
           ) : (
             <FaRegUserCircle />
           )}
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
             <span>{numberOfTickets} </span>
           </div>

           <div className="ticket-info">
             <label htmlFor="special-request">Special Request?</label>
             <span>{specialRequest || "Nil"} </span>
           </div>
         </div>

         <div className="barcode">
           <Barcode value="0 5 3 4 5 6 8" className="bar-code" />
         </div>
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
