

export default function BenefitsSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[26px] font-semibold text-[#0F172A]">
          Benefits of the CGPA to SGPA Conversion Calculator
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] text-[#64748B] max-w-4xl leading-relaxed">
          This section explains why students use a CGPA to SGPA converter rather than doing it manually. It showcases the fact that the tool makes the calculation easy, fast, and accurate. It focuses on practical benefits that students would get during the conversion for both academic and career purposes.
        </p>
        <br />
        <p className="text-[17px] text-[#707070]">
          Semester-wise Performance:
        </p>
        {/* CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#FADADA] p-6 rounded-2xl flex gap-4 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                Supports Academic Planning
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Having the approximate SGPA value allows students to determine which terms are weak and thus they can plan accordingly to enhance their overall academic performance.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#DDE1FF] p-6 rounded-2xl flex gap-4 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                Saves Time and Effort
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                The conversion of grades manually is hectic and time-consuming. The CGPA to SGPA converter provides the results instantly with minimum effort.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#FCE7C3] p-6 rounded-2xl flex gap-4 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#0F172A] mb-1">
                Useful for Applications and Documentation
              </h3>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Many academic and professional forms demand SGPA specifically. This calculator ensures that the data is accurate and helps users complete applications and paperwork conveniently.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}