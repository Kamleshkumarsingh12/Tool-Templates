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
                  How to Convert CGPA to Percentage Manually?
                </h3>

                <p className="text-[#94A3B8] text-[15px] leading-[24px] mb-5">
                  Manual conversion of CGPA into percentage is useful when an online calculator is unavailable or when universities follow a specific conversion formula. Although 9.5 is the most common conversion factor for a 10-point CGPA system, different universities apply different conversion factors, like 9.0 or 10. With the manual method, the percentage can be calculated accurately.
                </p>

                <h4 className="text-[16px] font-medium mb-6">
                  In this block, we discuss how to convert CGPA into Percentage manually:
                </h4>

                {/* STEPS */}
                <div className="space-y-5">

                  {[
                    "The first step is to find out the conversion factor.",
                    "The first step is to find out the conversion factor.",
                    "Multiply the CGPA by the conversion factor.",
                    "Lastly, round off the final result value.",
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
                  Formula of CGPA to Percentage Conversion
                </p>

                <p className="text-[15px] font-medium mb-3 leading-relaxed">
                  Percentage = CGPA × Conversion Factor
                </p>
                <p className="text-[15px] font-medium mb-3 leading-relaxed">
                  Example:
                </p>

                <p className="text-[15px] text-[#cbd5f5] leading-relaxed">
                  Suppose your university uses the 9.5 conversion factor; multiply your CGPA by 9.5.
                </p>
                 <p className="text-[15px] text-[#cbd5f5] leading-relaxed">
                  CGPA = 7.4
                </p>
                 <p className="text-[15px] text-[#cbd5f5] leading-relaxed">
                  Percentage = 7.4 × 9.5 = 70.3%
                </p>
                 <p className="text-[15px] text-[#cbd5f5] leading-relaxed">
                  This is the standard and most commonly used formula.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>
  );
}