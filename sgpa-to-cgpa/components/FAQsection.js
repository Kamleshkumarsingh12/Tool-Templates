"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How accurate is the SGPA to CGPA conversion calculator?",
      a: "The SGPA to CGPA calculator is a highly accurate tool when the correct SGPA and credit values are entered. It follows standard academic formulas used by most universities with a 10-point grading system.",
    },
    {
      q: "Do I need to enter credits for each semester to calculate CGPA?",
      a: "Yes, credits are needed to calculate CGPA accurately. Each semester’s SGPA is multiplied by its credit value.",
    },
    {
      q: "Is the SGPA to CGPA conversion required for job applications?",
      a: "Yes, most recruiters require CGPA as it reflects overall academic consistency rather than semester-wise performance.",
    },
    {
      q: "What should I do if my university uses a different grading system?",
      a: "Follow your university’s official conversion method and verify values before using them.",
    },
    {
      q: "How many semesters SGPA are required to calculate CGPA?",
      a: "All completed semesters are required. More semesters give a more accurate CGPA.",
    },
    {
      q: "What are the common mistakes to avoid during conversion?",
      a: "Common mistakes include entering incorrect SGPA, skipping semesters, or ignoring credit weights.",
    },
  ];

  return (
    <div className="bg-white pt-6 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[28px] font-semibold text-center mb-10">
          <span className="text-[#1D4ED8]">Frequently Asked</span>{" "}
          <span className="text-[#F59E0B]">Questions</span>
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-6">

          {faqs.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-5">

              {/* QUESTION */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-[18px] font-medium text-[#000000]">
                  {item.q}
                </h3>

                {/* ICON */}
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* ANSWER */}
              {openIndex === index && (
                <p className="mt-3 text-[14px] text-[#000000] leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}