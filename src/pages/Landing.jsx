import React, { useState } from "react";
import axios from "axios";

export default function Landing() {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("English");
  const [query, setQuery] = useState("");
  const [summary, setSummary] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Upload file first");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    const res = await axios.post(
      "http://127.0.0.1:8000/upload-report",
      formData
    );

    setSummary(res.data.summary);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white p-6">

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">
          Where should we begin your medical summary?
        </h1>

        <p className="text-gray-400 mb-6">
          Lab2Life analyzes uploaded medical reports and gives patient-friendly
          multilingual insights.
        </p>

        {/* Upload Box */}
        <div className="bg-[#1c1f27] p-6 rounded-xl shadow-xl space-y-4">

          <input
            type="file"
            className="w-full"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            placeholder="Ask about your report"
            className="w-full bg-transparent border p-2 rounded"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className="w-full bg-transparent border p-2 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>

          <button
            onClick={handleUpload}
            className="w-full bg-orange-500 py-2 rounded"
          >
            Generate Summary
          </button>
        </div>

        {summary && (
          <div className="mt-6 bg-[#1c1f27] p-4 rounded">
            {summary}
          </div>
        )}
      </section>
    </div>
  );
}