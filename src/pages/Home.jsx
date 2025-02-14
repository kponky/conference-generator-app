import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  return (
    <section>
      <div className="ticket-selction-container">
        <div className="frame-2">
          <div className="techember-heading">
            <h1>Techember Fest ”25</h1>
            <p>
              Join us for an unforgettable experience at [Event Name]! Secure
              your spot now.
            </p>

            <div className="event-details">
              <span>📍 [Event Location]</span>

              <span>| |</span>

              <span>March 15, 2025 | 7:00 PM</span>
            </div>
          </div>

          <div className="ticket-type">
            <p className="text1 ">
              Generate you ticket for the upcoming <span>TechemberFest.25</span>{" "}
              Book to secure your spot NOw!!!
            </p>
          </div>

          <div className="btns">
            <button onClick={() => navigate("/ticket-selection")}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
