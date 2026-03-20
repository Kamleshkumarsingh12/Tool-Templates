

export default function BenefitsSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[26px] font-semibold text-[#0F172A]">
          Benefits of the CGPA to Percentage Conversion Calculator
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] text-[#64748B] max-w-6xl leading-relaxed">
          Converting CGPA to percentage ensures accurate academic representation for admissions, scholarships, and official records. It provides authentic and accurate conversions and boosts students’ confidence. Let's explore the benefits of conversion in detail:
        </p>

        {/* CARDS */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#FDE2E2] p-8 rounded-2xl flex gap-2 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <p className="text-[15px] text-[#0F172A]">
                <b>Instant and Accurate Results:</b> The calculator is error-free and provides accurate results in seconds.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#E0E7FF] p-8 rounded-2xl flex gap-2 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] text-[#0F172A]">
                <b>Works on Different Scales:</b> The tool is compatible with various formats, regardless of the system of the 5-point, 4-point, or 10-point CGPA.
              </h3>
              
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#FEF3C7] p-6 rounded-2xl flex gap-4 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] text-[#0F172A]">
                <b>Easy to Use:</b> Students can convert scores easily without the technical knowledge or tough steps.
              </h3>
            
            </div>

          </div>

          {/* CARD 4 */}
          <div className="bg-[#DCFCE7] p-6 rounded-2xl flex gap-4 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <h3 className="text-[15px] text-[#0F172A]">
                <b>Compatible:</b> It is compatible with mobile devices, computers, or tablets, and students can use it anywhere easily.
              </h3>
            
            </div>

          </div>
          {/*CARD 5 */}
          <div className="bg-[#FFD9EF] p-8 rounded-2xl flex gap-2 items-start">

            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>

            <div>
              <p className="text-[15px] text-[#0F172A]">
                <b>Time Saving:</b> Converting instantly saves time and avoids any delays.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}