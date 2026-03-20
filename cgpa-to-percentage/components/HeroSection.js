"use client";
import { useState } from "react";

export default function HeroSection() {
  const [cgpa, setCgpa] = useState("");
  const [factor, setFactor] = useState("");
  const [percentage, setPercentage] = useState("0.00");

  const calculatePercentage = () => {
    const c = parseFloat(cgpa);
    const f = parseFloat(factor);

    if (isNaN(c) || isNaN(f) || c < 0 || f <= 0) {
      setPercentage("0.00");
      return;
    }

    let result = c * f;

    // safety clamp (optional but good)
    if (result > 100) result = 100;
    if (result < 0) result = 0;

    setPercentage(result.toFixed(2));
  };

  const numeric = parseFloat(percentage) || 0;

  return (
    <div className="bg-gradient-to-r from-[#F5F7FB] to-[#EEF3FF] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-[52px] font-bold text-[#0F172A] leading-tight">
              CGPA to Percentage <br />
              <span className="text-[#F59E0B]">Calculator</span>
            </h1>

            <p className="mt-6 text-[#475569] text-[15px] leading-relaxed">
              The CGPA to Percentage calculator easily and accurately converts CGPA into Percentage that represents academic performance.
            </p>

            <p className="mt-5 text-[#475569] text-[15px] leading-relaxed">
              The CGPA to Percentage calculator is a reliable online tool that converts CGPA into a percentage format for academic evaluation. It helps students quickly generate percentage scores required for admissions, scholarships, entrance exams, and official documentation. It provides quick, easy, and accurate conversion without complex calculations. Students need to fill in the CGPA details, select the scale, and get the percentage in seconds.
            </p>

            <button className="mt-8 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              Get Guide's Help
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center relative">

            {/* BACKGROUND BOX */}
            <div className="absolute top-4 right-5 w-[480px] h-[340px] bg-[#E6EDF7] rounded-2xl"></div>

            {/* CARD */}
            <div className="relative z-10 w-[380px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-7">

              <h2 className="text-[16px] font-semibold text-[#0F172A] mb-4">
                Input Grades
              </h2>

              {/* CGPA */}
              <p className="text-xs text-[#64748B] mb-1">
                Enter sum of all semister CGPA’S
              </p>
              <input
                type="number"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-6 text-gray-900 placeholder-gray-400"
              />

              {/* FACTOR */}
              <p className="text-xs text-[#64748B] mb-1">
                ENTER TOTAL NUMBER OF SEMESTERS
              </p>
              <input
                type="number"
                value={factor}
                onChange={(e) => setFactor(e.target.value)}
                placeholder="e.g. 9.0"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-6 text-gray-900 placeholder-gray-400"
              />

              {/* RESULT */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-[#64748B]">Final Percentage</p>
                <p className="text-[#2563EB] font-bold text-lg">
                  {percentage}
                </p>
              </div>

              {/* BAR */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="h-full bg-[#2563EB] rounded-full transition-all"
                  style={{ width: `${Math.min(numeric, 100)}%` }}
                />
              </div>

            </div>

            {/* BUTTON BELOW */}
            <button
              onClick={calculatePercentage}
              className="mt-10 bg-[#10519E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#1E40AF]"
            >
              Calculate Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}