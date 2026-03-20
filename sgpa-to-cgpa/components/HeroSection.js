"use client";
import { useState } from "react";

export default function HeroSection() {
  const [totalCgpa, setTotalCgpa] = useState("");
  const [semesters, setSemesters] = useState("");
  const [cgpa, setCgpa] = useState("0.00");

  const calculateCGPA = () => {
    const total = parseFloat(totalCgpa);
    const sem = parseFloat(semesters);

    if (isNaN(total) || isNaN(sem) || sem <= 0 || total < 0) {
      setCgpa("0.00");
      return;
    }

    let result = total / sem;

    if (result > 10) result = 10;
    if (result < 0) result = 0;

    setCgpa(result.toFixed(2));
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-[#f5f7fb] to-[#eef3ff]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 w-full">

        {/* LEFT */}
        <div className="max-w-[600px]">
          <h1 className="text-[48px] font-bold text-[#0F172A] leading-tight">
            SGPA to CGPA <br />
            <span className="text-[#F59E0B]">Calculator</span>
          </h1>

          <p className="mt-6 text-gray-600 text-[17px] leading-relaxed">
            This SGPA to CGPA calculator is used to convert semester-wise SGPA into an accurate overall CGPA required for admissions, employment, and higher education.
          </p>

          <p className="mt-5 text-gray-600 text-[17px] leading-relaxed">
            The SGPA to CGPA calculator helps students convert semester-wise SGPA into an overall CGPA required for admissions, placements, scholarships, and higher education. It ensures quick, accurate grade conversion without calculation errors that are made manually.
          </p>

          <button className="mt-8 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Get Guide's Help
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-end w-full">

          <div className="absolute left-1/2 -translate-x-1/2 w-[520px] h-[380px] bg-[#E9EFF7] rounded-2xl"></div>

          <div className="relative w-[448px] bg-white rounded-2xl shadow-md p-8 mr-10">

            <h2 className="font-semibold text-gray-800 mb-4">
              Input Grades
            </h2>

            <p className="text-xs text-gray-500 mb-1">
              ENTER SUM OF ALL SEMESTER CGPA'S
            </p>

            <input
              type="number"
              value={totalCgpa}
              onChange={(e) => setTotalCgpa(e.target.value)}
              placeholder="e.g. 8.5"
              className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-4 text-gray-900 placeholder-gray-400"
            />

            <p className="text-xs text-gray-500 mb-1">
              ENTER TOTAL NUMBER OF SEMESTERS
            </p>

            <input
              type="number"
              value={semesters}
              onChange={(e) => setSemesters(e.target.value)}
              placeholder="e.g. 8"
              className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-6 text-gray-900 placeholder-gray-400"
            />

            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-500">Estimated CGPA</p>
              <p className="text-blue-600 font-bold text-lg">
                {cgpa}
              </p>
            </div>

            <div className="w-full h-2 bg-gray-200 rounded-full mb-4">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${(cgpa / 10) * 100}%` }}
              />
            </div>

            <button
              onClick={calculateCGPA}
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
            >
              Calculate Now
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}