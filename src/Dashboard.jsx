import React, { useState } from 'react';

function Dashboard() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setFileName(file.name);
    setFileDescription(file.name + " - A description would go here"); // Placeholder description
  };

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This page is only accessible after logging in.</p>

      {/* File Upload Component */}
      <div>
        <h2>Upload a File</h2>
        <input type="file" onChange={handleFileChange} />

        {/* Display File Info */}
        {uploadedFile && (
          <div>
            <h3>File Name: {fileName}</h3>
            <p>Description: {fileDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;