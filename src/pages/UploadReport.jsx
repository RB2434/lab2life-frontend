import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function UploadReport() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");

  const [openLang, setOpenLang] = useState(false);
  const dropdownRef = useRef();

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "mr", label: "Marathi" },
    { code: "ta", label: "Tamil" },
    { code: "bn", label: "Bengali" },
    { code: "gu", label: "Gujarati" },
    { code: "te", label: "Telugu" },
    { code: "fr", label: "French" },
    { code: "es", label: "Spanish" },
    { code: "ar", label: "Arabic" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("language", language);

    setLoading(true);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/upload-report",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setSummary(res.data.summary);
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1974')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 px-4 md:px-10 py-10">

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl mx-auto rounded-3xl border border-white/20 
          bg-white/10 backdrop-blur-xl p-8 shadow-2xl"
        >
          <h1 className="text-4xl font-bold text-center mb-4">
            Where should we begin your medical summary?
          </h1>

          <p className="text-center text-gray-300 mb-8">
            Upload reports, get AI insights, abnormal highlights, and risk scores.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">

              {/* File Upload */}
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="flex-1 bg-white/10 border border-white/30 rounded-xl p-3"
              />

              {/* Custom Language Dropdown */}
              <div ref={dropdownRef} className="relative w-full md:w-56">
                <button
                  onClick={() => setOpenLang(!openLang)}
                  className="w-full bg-white/10 border border-white/30 
                  rounded-xl p-3 text-left"
                >
                  {languages.find((l) => l.code === language)?.label}
                </button>

                {openLang && (
                  <div className="absolute z-50 w-full mt-2 
                  bg-gray-900 border border-white/20 rounded-xl shadow-lg">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setOpenLang(false);
                        }}
                        className="px-4 py-2 cursor-pointer 
                        hover:bg-orange-500 transition"
                      >
                        {lang.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleUpload}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 
              py-3 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              {loading ? "Generating Summary..." : "Generate Summary"}
            </button>
          </div>

          {loading && (
            <div className="mt-6 flex justify-center">
              <div className="animate-spin h-10 w-10 border-4 
              border-white border-t-transparent rounded-full"></div>
            </div>
          )}
        </motion.div>

        {/* AI Dashboard */}
        {summary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-6xl mx-auto mt-12 space-y-8"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 
            rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-semibold">Health Score</h2>
              <p className="text-4xl font-bold mt-2">82 / 100</p>
              <p>Low to Moderate Risk</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="text-red-400 font-semibold">⚠️ Abnormal</h3>
                <p className="text-gray-300 mt-2">
                  Some indicators like WBC appear slightly elevated.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="text-green-400 font-semibold">✅ Normal</h3>
                <p className="text-gray-300 mt-2">
                  Hemoglobin, platelets, and glucose are normal.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="text-blue-400 font-semibold">💡 Suggestions</h3>
                <p className="text-gray-300 mt-2">
                  Maintain a healthy lifestyle and monitoring.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="text-purple-400 font-semibold">👨‍⚕️ Doctor Advice</h3>
                <p className="text-gray-300 mt-2">
                  Consult a physician if abnormal values persist.
                </p>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Full AI Explanation
              </h3>
              <p className="whitespace-pre-wrap text-gray-300">{summary}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}