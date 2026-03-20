"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I calculate CGPA to Percentage?",
      a: "Multiply your  CGPA by 9.5, which is the universally used way of calculating. In case you do not have time to spare, take an online CGPA to percentage calculator. It will automatically use the right conversion factor based on your grading scale.",
    },
    {
      q: "Is there a standard formula for calculating CGPA to Percentage?",
      a: "Yes, the popular formula is multiplying the CGPA by 9.5, or for quick results, you can get it by entering the CGPA in an online CGPA to percentage calculator. The multiplication method is a common, widely accepted standard formula for a 10-point scale.",
    },
    {
      q: "Is the CGPA to percentage conversion the same for all universities?",
      a: "No, the  CGPA to percentage conversion is not the same for all universities. Various universities have different grading scales and formulas. Although most apply the use of the 9.5 factor, some can use the 10.0 factor or board-specific, hence you are supposed to follow your institution's method.",
    },
    {
      q: "Why do colleges ask for a percentage instead of CGPA?",
      a: "Colleges use percentages rather than CGPA to standardize applications as CGPA scores within a range, whereas percentages reflect an accurate academic value, and thus, the assessment is more transparent.",
    },
    {
      q: "Does this calculator work for a 10-point CGPA system?",
      a: "Yes, this type of calculator is developed for a 10-point CGPA scale, and it uses the relevant formula automatically. It is also applicable to other scales; no matter what system an institution uses, it will still give correct results.",
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