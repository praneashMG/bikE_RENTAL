import React, { useState } from 'react';

function ImageUpload({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setMessage('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost/image_upload_project/upload.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setMessage(data.success);
        setSelectedFile(null);
        document.getElementById('file-input').value = ""; // Clear input
        if (onUpload) onUpload();
      } else {
        setMessage(data.error || 'Upload failed');
      }
    } catch (error) {
      setMessage('Error uploading image: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-gradient-to-r from-purple-700 via-pink-700 to-red-600 rounded-3xl shadow-lg text-white">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-md">
        Upload Image
      </h2>
      <form onSubmit={handleUpload} className="flex flex-col items-center">
        <label 
          className="w-full bg-white bg-opacity-20 rounded-lg cursor-pointer hover:bg-opacity-40 transition duration-300 flex flex-col items-center justify-center p-6 mb-6 text-center"
          htmlFor="file-input"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 12l4-4 4 4m-4-4v12" />
          </svg>
          <span className="text-white text-sm select-none">
            {selectedFile ? selectedFile.name : "Click to select an image (JPG, PNG, GIF)"}
          </span>
          <input
            id="file-input"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 rounded-xl shadow-md transition-colors duration-300"
        >
          Upload
        </button>
      </form>

      {message && (
        <p
          className={`mt-6 text-center text-lg font-medium ${
            message.toLowerCase().includes('success') ? 'text-green-300' : 'text-red-300'
          } drop-shadow-lg`}
          role="alert"
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default ImageUpload;
