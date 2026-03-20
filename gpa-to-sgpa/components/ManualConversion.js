export default function ManualConversion() {
  return (
    <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* MAIN BLUE CARD */}
          <div className="bg-[#2F4275] rounded-2xl px-12 py-12">

            <div className="flex flex-col md:flex-row gap-12 items-start">

              {/* LEFT CONTENT */}
              <div className="flex-1 max-w-[620px] text-white">

                <h3 className="text-[24px] font-semibold mb-4">
                  How to Convert CGPA to SGPA Manually?
                </h3>

                <p className="text-[#94A3B8] text-[15px] leading-[24px] mb-5">
                  However, conversion of CGPA to SGPA can be done manually, though the process is not always simple. CGPA is an average of two or more semesters. Proper conversion requires semester-wise credit information.
                </p>

                <h4 className="text-[16px] font-medium mb-6">
                  The steps for how to calculate CGPA and SGPA manually are:
                </h4>

                {/* STEPS */}
                <div className="space-y-5">

                  {[
                    "Know Your CGPA - To begin with, record your current CGPA. CGPA is the average performance in all semesters.",
                    "Calculate Total Credits Earned- Determine the cumulative number of credit points of all the semesters. This can be obtained through a marksheet.",
                    "Survey Credits of the Target Semester - Now, determine the number of credits you were allocated during the semester for which you prefer to calculate SGPA. Each one has a set of credits, and their sum forms the semester credits.",
                    "Apply CGPA to SGPA Formula - Use the standard formula. The formula will provide you with an approximate value of the SGPA of that semester.",
                    "Learn about the Disadvantages - The SGPA calculated is an approximation. There can be variation in actual SGPA based on subject-wise grades, credit weightage, and the grading policy of the university. In formalities, always use the calculation method that is prescribed in your institution.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-4">

                      <div className="w-7 h-7 flex items-center justify-center bg-[#F59E0B] rounded-full text-white text-xs font-medium mt-1 shrink-0">
                        {i + 1}
                      </div>

                      <p className="text-[#E2E8F0] text-[14px] leading-[22px]">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="w-[320px] flex justify-center md:justify-end">

                <img
                  src="/Background (1).png"
                  alt="study"
                  className="w-[350px] h-[449px] object-cover rounded-[24px] mt-6"
                />

              </div>

            </div>

            {/* FORMULA SECTION */}
            <div className="mt-10 flex justify-center">

              <div className="w-full max-w-5xl bg-gradient-to-r from-[#3b4f87] to-[#2f4275] rounded-xl px-8 py-6 text-white">

                <p className="text-[12px] text-[#137FEC] uppercase mb-2 tracking-wide">
                  Formula of  CGPA to sGPA Conversion
                </p>

                <p className="text-[18px] font-medium mb-3 leading-relaxed">
                  SGPA = (CGPA x Total Credits) ÷ Credits of that semester
                </p>

                <p className="text-[18px] text-[#cbd5f5] leading-relaxed">
                  This method provides an estimated SGPA. The proper evaluation depends on the university. For accurate results, always use the university's criteria of calculation.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
  );
}