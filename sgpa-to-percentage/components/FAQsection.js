"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is the Use of the SGPA to Percentage Calculator?",
      a: "The SGPA to Percentage Calculator is used to convert a student's Semester Grade Point Average (SGPA) into a percentage, which is often required for academic and professional purposes.",
    },
    {
      q: "Why to convert SGPA to Percentage?",
      a: "Although many universities, employers, and competitive exams still need percentage for admission, recruitment, and scholarship forms.  The use of the standard SGPA to percentage conversion ensures academic performance meets official application requirements.",
    },
    {
      q: "How to Find the Official Conversion Formula?",
      a: "The official conversion formula for converting SGPA into a percentage needs verified documents issued directly by academic institutions. Always use the exact procedure that your institution follows to obtain correct results.",
    },
    {
      q: "What are the Tips for Accurate Conversion?",
      a: "Use the standard formula that is specified by your university. Enter the SGPA value correctly for an appropriate conversion from SGPA to percentage.  Always follow the marksheet or portal of your university to get their standard formula.",
    },
    {
      q: "Is there any rounding off in the SGPA for the percentage calculation?",
      a: "Yes, when converting SGPA to percentage calculations, rounding off is typically done to two decimal places. Always follow the exact rounding-off rules used in your university.",
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