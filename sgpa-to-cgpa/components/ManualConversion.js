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
                  How to Convert SGPA to CGPA Manually?
                </h3>

                <p className="text-[#94A3B8] text-[15px] leading-[24px] mb-5">
                  To calculate SGPA to CGPA without an online calculator. It demonstrates how grades and credits can be added together on a semester-wise basis to obtain the overall academic performance.
                </p>

                <h4 className="text-[16px] font-medium mb-6">
                  Let’s discuss how to convert SGPA into CGPA manually
                </h4>

                {/* STEPS */}
                <div className="space-y-5">

                  {[
                    "The first step is to record the SGPA and the total number of credits taken in each completed semester. Then add all semester SGPAs and credits.",
                    "Multiply by the SGPA in each semester by its credit value. This gives the cumulative grade points in that semester.",
                    "After that, add all weighted grade points. This sum is a representation of academic performance.",
                    "Calculate total credits earned. Add the credits of all semesters included in the calculation.",
                    "Divide the sum of credits to get the final CGPA. The aggregate weighted grade points are divided by the total credits.",
                    "The output is the ultimate CGPA over all the semesters."
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
                  Formula of SGPA to CGPA Conversion
                </p>

                <p className="text-[18px] font-medium mb-3 leading-relaxed">
                  CGPA = Sum of SGPA of All Semesters ÷ Number of Semesters
                </p>

                <p className="text-[18px] text-[#cbd5f5] leading-relaxed">
                  This manual method provides an estimated CGPA. The calculation process of an SGPA to CGPA is quicker and more precise through the use of an SGPA to CGPA calculator.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
  );
}