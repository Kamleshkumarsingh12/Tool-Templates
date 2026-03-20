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
                  How to Convert SGPA to PERCENTAGE Manually?
                </h3>

                <p className="text-[#94A3B8] text-[15px] leading-[24px] mb-5">
                  To convert SGPA to a percentage manually, students must check the official conversion formula of the university. Once the formula is applied, students evaluate the final percentage. Manual conversion requires careful calculation using your university’s official formula to avoid errors; this is why students mostly prefer using an online calculator.
                </p>

                <h4 className="text-[16px] font-medium mb-6">
                  Here’s how to convert SGPA to percentage manually:
                </h4>

                {/* STEPS */}
                <div className="space-y-5">

                  {[
                    "Different institutions use slightly different formulas. Visit the university's official website to check the university's SGPA to percentage conversion formula.",
                    "Enter the exact SGPA as mentioned in the marksheet. Make sure you enter the correct semester SGPA.",
                    "Apply the official Conversion Formula depending on your university. Carefully perform the subtraction and multiplication.",
                    "After calculating the result, round off the percentage according to your university’s guidelines. ",
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
                  Formula of  SGPA to CGPA Conversion
                </p>

                <p className="text-[16px] font-medium mb-3 leading-relaxed">
                  Before calculating the percentage, students must ensure that they find the correct formula from the academic guidelines of their university. The common formula used by a number of institutions is multiplying SGPA by 10 or subtracting a certain value before multiplying.
                </p>
                 <p className="text-[14px] font-medium mb-3 leading-relaxed">
                  Formula: 
                </p>
                 <p className="text-[14px] font-medium mb-3 leading-relaxed">
                  Percentage = (SGPA × 10) - 7.5
                </p>
                 <p className="text-[14px] font-medium mb-3 leading-relaxed">
                  Note: This formula varies by university. Always verify the official conversion method from your institution’s academic guidelines.
                </p>


              </div>

            </div>

          </div>

        </div>
      </div>
  );
}