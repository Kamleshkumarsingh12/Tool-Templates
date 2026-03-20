"use client";
import { useState } from "react";

export default function HeroSection() {
  const [totalCgpa, setTotalCgpa] = useState("");
  const [semesters, setSemesters] = useState("");
  const [percentage, setPercentage] = useState("0.00");

  const calculatePercentage = () => {
    const total = parseFloat(totalCgpa);
    const sem = parseFloat(semesters);

    if (isNaN(total) || isNaN(sem) || sem <= 0) {
      setPercentage("0.00");
      return;
    }

    const cgpa = total / sem;
    let result = (cgpa * 10) - 7.5;

    // clamp safety
    if (result < 0) result = 0;
    if (result > 100) result = 100;

    setPercentage(result.toFixed(2));
  };

  const numeric = parseFloat(percentage) || 0;

  return (
    <div className="bg-gradient-to-r from-[#F5F7FB] to-[#EEF3FF] py-40">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <h1 className="text-[52px] font-bold text-[#0F172A] leading-tight">
              SGPA to Percentage <br />
              <span className="text-[#F59E0B]">Calculator</span>
            </h1>

            <p className="mt-6 text-[#475569] text-[17px] leading-relaxed">
              SGPA to Percentage calculator instantly converts your semester-wise grade points into an accurate percentage, with formula, chart, and step-by-step explanation.
            </p>

            <p className="mt-5 text-[#475569] text-[17px] leading-relaxed">
              Instead of using manual formulas or doing calculations, use this tool to convert SGPA into percentage quickly and accurately using a standard formula.
            </p>

            <button className="mt-6 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
              Get Guide’s Help
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center relative">

            {/* BACKGROUND */}
            <div className="absolute top-2 right-1 w-[520px] h-[340px] bg-[#E6EDF7] rounded-2xl"></div>

            {/* CARD */}
            <div className="relative z-10 w-[420px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-7">

              <h2 className="text-[16px] font-semibold text-[#0F172A] mb-4">
                Input Grades
              </h2>

              {/* INPUT 1 */}
              <p className="text-xs text-[#64748B] mb-1">
                ENTER SUM OF ALL SEMESTER CGPA’S
              </p>
              <input
                type="number"
                value={totalCgpa}
                onChange={(e) => setTotalCgpa(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-4 text-gray-900 placeholder-gray-400   "
              />

              {/* INPUT 2 */}
              <p className="text-xs text-[#64748B] mb-1">
                ENTER TOTAL NUMBER OF SEMESTERS
              </p>
              <input
                type="number"
                value={semesters}
                onChange={(e) => setSemesters(e.target.value)}
                placeholder="e.g. 8"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-4 text-gray-900 placeholder-gray-400"
              />

              {/* RESULT */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-[#64748B]">Estimated Percentage</p>
                <p className="text-[#2563EB] font-bold text-lg">
                  {percentage}
                </p>
              </div>

              {/* BAR */}
              <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="h-full bg-[#2563EB] rounded-full"
                  style={{ width: `${Math.min(numeric, 100)}%` }}
                />
              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={calculatePercentage}
              className="mt-10 bg-[#1D4ED8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E40AF]"
            >
              Calculate Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}