import React from "react";
import Navbar from "../components/layout/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

export default function ReportSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  // If user uploaded a file, we can get its name from route state
  const fileName = location.state?.fileName || "Unknown Report";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 px-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Report Summary 🧠
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl">
          AI-based summary and insights for <b>{fileName}</b>
        </p>

        {/* Summary Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">🩺 Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            This is where the AI-generated summary of your report will appear.
            The system will extract key parameters, interpret results, and
            generate recommendations in multiple languages.
          </p>
        </div>

        {/* Recommendations Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">💡 Recommendations</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Maintain a balanced diet with sufficient hydration.</li>
            <li>Regular physical activity for 30 minutes per day.</li>
            <li>Consult a doctor if symptoms persist.</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/upload")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upload Another Report
        </button>
      </div>
    </div>
  );
}
