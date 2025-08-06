import React, { useState, useRef } from "react";

export default function AddBikeForm({ onAdded }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    pricePerDay: "",
    location: "",
    description: "",
    image: null,
  });
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((f) => ({ ...f, [name]: files[0] }));
      setPreview(files[0] ? URL.createObjectURL(files[0]) : null);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file) {
      setForm((f) => ({ ...f, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleImageAreaClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.image) return setMsg("Image is required.");
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    setMsg("Uploading...");
    try {
      const res = await fetch("http://localhost/image_upload_project/upload_vehicle.php", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        setMsg("Success!");
        setForm({
          title: "",
          category: "",
          pricePerDay: "",
          location: "",
          description: "",
          image: null,
        });
        setPreview(null);
        if (onAdded) onAdded();
      } else setMsg(data.error || "Upload failed");
    } catch (err) {
      setMsg("Error uploading");
    }
  };

  return (
    <form
      className="max-w-xl mx-auto bg-white/90 shadow-xl rounded-2xl p-8 mt-10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-7 text-center text-blue-700">
        Add a Vehicle
      </h2>

      {/* Image upload area with drag-drop support */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className={`mb-6 flex flex-col items-center justify-center border-2 border-dashed rounded-xl cursor-pointer transition
        ${preview ? "border-blue-400" : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/40"}`}
        style={{ minHeight: preview ? 186 : 120 }}
        onClick={handleImageAreaClick}
      >
        {preview ? (
          <img
            src={preview}
            alt="Vehicle preview"
            className="rounded-xl h-44 object-cover"
          />
        ) : (
          <div className="flex flex-col items-center p-6 text-gray-400">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0 0V8m0 4H8m4 0h4m2 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" />
            </svg>
            <span>
              Drag & drop image here or <span className="underline text-blue-600">click to select</span>
            </span>
            <span className="mt-2 text-xs text-gray-400">(JPG, PNG, or GIF)</span>
          </div>
        )}
        <input
          ref={fileInputRef}
          name="image"
          type="file"
          accept="image/jpeg,image/png,image/gif"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.category}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          name="pricePerDay"
          placeholder="Price per day"
          min="0"
          required
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.pricePerDay}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          required
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={form.location}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 resize-none"
        value={form.description}
        onChange={handleChange}
        rows={3}
      />

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
        type="submit"
      >
        Upload
      </button>
      {msg && (
        <p
          className={`mt-4 text-center font-medium ${
            msg.toLowerCase().includes("success")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {msg}
        </p>
      )}
    </form>
  );
}
