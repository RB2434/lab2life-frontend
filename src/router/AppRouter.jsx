import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UploadReport from "../pages/UploadReport";
import ReportSummary from "../pages/ReportSummary";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadReport />} />
        <Route path="/summary" element={<ReportSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
