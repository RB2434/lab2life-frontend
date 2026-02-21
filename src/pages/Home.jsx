
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* NAVBAR */}

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          AI-Powered Multilingual <br />
          Healthcare Platform
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Upload your lab report and get easy-to-understand medical insights,
          risk analysis, and lifestyle suggestions in your preferred language.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/upload"
            className="bg-orange-500 px-8 py-3 rounded-xl hover:bg-orange-600"
          >
            Analyze Report
          </Link>

          <a
            href="#features"
            className="border border-gray-700 px-8 py-3 rounded-xl hover:bg-gray-800"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Healthcare AI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Medical Summary",
              desc: "Instantly understand your lab reports in simple language.",
            },
            {
              title: "Multilingual Support",
              desc: "Available in multiple Indian and global languages.",
            },
            {
              title: "Risk Prediction",
              desc: "Early detection of health risks using ML models.",
            },
            {
              title: "Smart Dashboard",
              desc: "Track health trends and compare reports over time.",
            },
            {
              title: "Doctor Connect",
              desc: "Consult healthcare professionals seamlessly.",
            },
            {
              title: "Secure & Private",
              desc: "Encrypted data with full patient privacy.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-orange-400">
                {f.title}
              </h3>
              <p className="text-gray-400 mt-3">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ai" className="bg-gray-900 py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">
          Advanced AI & Machine Learning
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          Lab2Life uses cutting-edge LLMs and predictive analytics to detect
          diseases, provide insights, and improve patient outcomes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <h3 className="text-orange-400">Health Score</h3>
            <p className="text-gray-400 mt-2">
              AI-generated score for better monitoring.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <h3 className="text-orange-400">Abnormal Detection</h3>
            <p className="text-gray-400 mt-2">
              Automatic identification of health risks.
            </p>
          </div>

          <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
            <h3 className="text-orange-400">Personalized Care</h3>
            <p className="text-gray-400 mt-2">
              Lifestyle and diet recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section id="doctor" className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold">Connect with Doctors</h2>

        <p className="mt-6 max-w-xl mx-auto text-gray-400">
          Book consultations, share reports, and receive professional medical
          advice through our platform.
        </p>

        <div className="mt-10">
          <Link
            to="/upload"
            className="bg-orange-500 px-8 py-3 rounded-xl hover:bg-orange-600"
          >
            Start Consultation
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Transform Healthcare with AI
        </h2>

        <p className="mt-4">
          Join thousands of patients improving their health.
        </p>

        <Link
          to="/upload"
          className="mt-6 inline-block bg-white text-black px-8 py-3 rounded-xl"
        >
          Get Started Now
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Lab2Life | AI Healthcare Platform
      </footer>
    </div>
  );
}

