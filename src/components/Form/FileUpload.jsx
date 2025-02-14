import React from 'react'

const FileUpload = ({ onChange, previewUrl, error }) => (
  <div className="file-wrapper">
    <h3>Upload Profile Photo</h3>
    <div className="file-wrap">
      <div className="file-upload-box">
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={onChange}
          style={{ display: "none" }}
        />
        <label htmlFor="file-input" className="file-upload-label">
          <AiOutlineCloudDownload className="download-icon" size={30} />
          <p>Drag and drop or click to upload</p>
        </label>
        {previewUrl && (
          <div className="preview-container">
            <img src={previewUrl} alt="Preview" className="preview-image" />
          </div>
        )}
      </div>
    </div>
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default FileUpload;
