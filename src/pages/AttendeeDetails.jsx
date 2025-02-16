import React, { useState, useEffect } from "react";
import "../styles/AttendeeDetails.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validation"; // Import the function
import { CloudinaryContext } from "cloudinary-react";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedTicketType, numberOfTickets } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [specialRequest, setSpecialrequest] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");

  // Retrieve saved form data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setName(savedData.name || "");
      setEmail(savedData.email || "");
      setSpecialrequest(savedData.specialRequest || "");
      setPreviewUrl(savedData.avatarUrl || "");
    }
  }, []);

  // Save form data to localStorage whenever state changes
  useEffect(() => {
    const formData = { name, email, specialRequest, avatarUrl: previewUrl };
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [name, email, specialRequest, previewUrl]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleNext = () => {
    // Validate all fields
    if (!name || !email || !selectedFile) {
      setError(
        "Please fill out all required fields and upload a profile photo."
      );
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Proceed to the next page
    navigate("/ticket-booked", {
      state: {
        name,
        email,
        specialRequest,
        avatarUrl: previewUrl,
        selectedTicketType,
        numberOfTickets,
      },
    });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const openCloudinaryWidgets = () => {
    window.cloudinary.openCloudinaryWidgets(
      {
        cloudName: "dkjob5xhn",
        upload_preset: "hng12",
        sources: ["local", url],
        multiple: false,
        cropping: true,
        cropping_aspect_ratio: 1,
        cropping_default_selection_mode: "selection",
        cropping_show_dimensions: true,
        cropping_show_hints: true,
        cropping_show_guides: true,
        cropping_show_background: true,
        cropping_show_original_image: true,
        cropping_show_previews: true,
        cropping_show_controls: true,
        cropping_show_loader: true,
        cropping_show_close_button: true,
        cropping_show_rotate_button: true,
        cropping_show_flip_button: true,
        cropping_show_undo_redo_button: true,
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Uploaded image info: ", result.info);
          setPreviewUrl(result.info.secure_url); // Set the image URL in state
        }
      }
    );
  };

  return (
    <CloudinaryContext cloudName="dkjob5xhn">
      <div className="ticket-details-container">
        <div className="ticket-heading">
          <h3>Attendee Details</h3>
          <span>Step 2/3</span>
        </div>
        <div className="progress-bar-heading"></div>

        <div className="attendee-frame">
          <div className="file-wrapper">
            <h3>Upload Profile Photo</h3>

            <div className="file-wrap">
              <div className="file-upload-box" onClick={openCloudinaryWidgets}>
                <input
                  type="file"
                  id="file-input"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />

                {!previewUrl && (
                  <label htmlFor="file-input" className="file-upload-label">
                    <AiOutlineCloudDownload
                      className="download-icon"
                      size={30}
                    />
                    <p>Drag and drop or click to upload</p>
                  </label>
                )}

                {previewUrl && (
                  <div className="preview-container">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="preview-image"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="progress-bar"></div>

          <form>
            <div className="input-group">
              <label htmlFor="name">Enter your Name:</label>
              <div className="input-field">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Enter your email *</label>
              <div className="input-field">
                <BsEnvelope size={20} />
                <input
                  type="text"
                  placeholder="hello@avioflagos.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="">Special request?</label>
              <textarea
                name=""
                id="special-request"
                value={specialRequest}
                onChange={(e) => setSpecialrequest(e.target.value)}
                placeholder="Textarea"
              ></textarea>
            </div>
          </form>

          {error && <p className="error-message">{error}</p>}

          <div className="btns">
            <button onClick={handleCancel}>cancel</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </CloudinaryContext>
  );
};

export default AttendeeDetails;

// <button onClick={() => navigate("/attendee-details")}>Next</button>
