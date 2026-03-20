"use client";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are CGPA and SGPA the Same?",
      a: "No, CGPA and SGPA are not the same thing. SGPA is used to evaluate the performance of a student during a particular semester, whereas CGPA is used to evaluate the performance of a student throughout all the semesters.",
    },
    {
      q: "Can SGPA be higher than CGPA?",
      a: "Yes, SGPA can be higher than CGPA. This happens when a student has excelled in a certain semester, as compared to the performance in past low-scoring semesters; the new SGPA might lift that CGPA",
    },
    {
      q: "Does the CGPA to SGPA formula vary by university?",
      a: "The CGPA to SGPA formula may vary depending on the university's grading policy, the structure of credit, and the rules of evaluation.",
    },
    {
      q: "What are the Common Mistakes While Converting CGPA to SGPA?",
      a: "Some of the common errors while converting CGPA to SGPA involve the weight of credits, use of wrong formulas, forgetting to include failed subjects, and failure to comply with university-specific grading policies.",
    },
    {
      q: "What is the minimum and maximum CGPA value for conversion?",
      a: "The minimum and maximum CGPA values for conversion typically are 0.0 and maximum is 10.0. Different institutions use different scales, and thus, students should use the system of grading applied by their university.",
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