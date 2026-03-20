"use client";
import { useState } from "react";

export default function Page() {
  const [cgpa, setCgpa] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [semesterCredits, setSemesterCredits] = useState("");
  const [sgpa, setSgpa] = useState("0.00");

  const calculateSGPA = () => {
    const c = parseFloat(cgpa);
    const total = parseFloat(totalCredits);
    const sem = parseFloat(semesterCredits);

    if (isNaN(c) || isNaN(total) || isNaN(sem) || total <= 0 || sem <= 0) {
      setSgpa("0.00");
      return;
    }

    let result = (c * total) / sem;

    if (result > 10) result = 10;
    if (result < 0) result = 0;

    setSgpa(result.toFixed(2));
  };

  const numericSgpa = parseFloat(sgpa) || 0;

  return (
    <div className="bg-gradient-to-r from-[#F5F7FB] to-[#EEF3FF] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-[52px] font-bold text-[#0F172A] leading-tight">
              CGPA to SGPA <br />
              <span className="text-[#F59E0B]">Calculator</span>
            </h1>

            <p className="mt-6 text-[#475569] text-[17px] leading-relaxed">
              The CGPA to SGPA calculator is an authentic and simple tool that converts a cumulative score into semester-wise performance.
            </p>

            <p className="mt-5 text-[#475569] text-[17px] leading-relaxed">
              Most universities and colleges now follow grading systems like CGPA and SGPA instead of traditional marks. These systems make evaluation more standardized, but often create confusion for students.
            </p>

            <p className="mt-5 text-[#475569] text-[17px] leading-relaxed">
              The CGPA to SGPA calculator helps students convert cumulative CGPA into estimated semester-wise SGPA for academic forms, admissions, and documentation procedures.
            </p>

            <p className="mt-5 text-[#475569] text-[17px] leading-relaxed">
              The CGPA SGPA Calculator is fast and easy to use. All you need to do is input your CGPA and obtain an approximate SGPA in seconds.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center relative">

            {/* BACKGROUND BOX */}
            <div className="absolute top-8 right-0.4 w-[530px] h-[380px] bg-[#137FEC0D] rounded-2xl"></div>

            {/* CARD */}
            <div className="relative z-10 w-[420px] bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] p-7">

              <h2 className="text-[16px] font-semibold text-[#0F172A] mb-4">
                Input Grades
              </h2>

              <p className="text-xs text-[#64748B] mb-1">
                ENTER CGPA ( 0 - 10 )
              </p>
              <input
                type="number"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                placeholder="e.g. 8.5"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-4 text-gray-900 placeholder-gray-400"
              />

              <p className="text-xs text-[#64748B] mb-1">
                TOTAL CREDITS COMPLETED
              </p>
              <input
                type="number"
                value={totalCredits}
                onChange={(e) => setTotalCredits(e.target.value)}
                placeholder="e.g. 90"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-6 text-gray-900 placeholder-gray-400"
              />

              <p className="text-xs text-[#64748B] mb-1">
                CREDITS TARGET SEMESTER
              </p>
              <input
                type="number"
                value={semesterCredits}
                onChange={(e) => setSemesterCredits(e.target.value)}
                placeholder="e.g. 20"
                className="w-full p-3 bg-[#E9EFF7] border border-[#D6E0EE] rounded-lg mb-6 text-gray-900 placeholder-gray-400"
              />

              {/* RESULT */}
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-[#64748B]">Estimated SGPA</p>
                <p className="text-[#2563EB] font-bold text-lg">{sgpa}</p>
              </div>

              {/* BAR */}
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-[#2563EB] rounded-full transition-all"
                  style={{
                    width: `${Math.min((numericSgpa / 10) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* BUTTONS BELOW CARD */}
            <div className="mt-6 flex gap-4">

              <button
                onClick={calculateSGPA}
                className="bg-[#1D4ED8] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#1E40AF]"
              >
                Calculate Now
              </button>

              <button className="px-6 py-3 border border-[#D1D5DB] rounded-lg text-[#0F172A] font-medium hover:bg-gray-50">
                Get Guide's Help
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}