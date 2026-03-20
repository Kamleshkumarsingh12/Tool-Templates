export default function BenefitsSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[26px] font-semibold text-[#0F172A]">
          Benefits of SGPA to Percentage Conversion Calculator
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] text-[#64748B] max-w-3xl leading-relaxed">
          The SGPA to Percentage Conversion Calculator has so many benefits. It gives instant results without manual effort. With accuracy, it reduces calculation mistakes and ensures exact results. Students can use it for admissions, job applications, entrance exams, and scholarship forms. The tool is compatible with any device, and it makes academic conversion simpler for everyone.
        </p>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#FFE4E6] p-6 rounded-2xl flex gap-4 items-start">
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Quick and Precise Deliveries- The calculator helps to convert SGPA to a percentage in seconds using a standard formula. It removes human errors, and students can rely on the results for official use and eligibility criteria.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#E6E7FF] p-6 rounded-2xl flex gap-4 items-start">
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Saves Time and Efforts- No manual calculations required, enter SGPA and obtain the outcome immediately. This saves time and eliminates the burden of complicated calculations.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#FFEECA] p-6 rounded-2xl flex gap-4 items-start">
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Supports job application and higher studies - Many universities, recruiters, and competitive examinations follow the percentage. The calculator assists students in achieving these requirements within seconds.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#DCFCE7] p-6 rounded-2xl flex gap-4 items-start">
            <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm">
              <span className="text-blue-500 text-sm">✦</span>
            </div>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Reduce grading system confusion- Various universities have different formulas for grading. The calculator makes it easy because it offers a simple and standardized conversion. It makes the students realize their grades in a more positive way.
            </p>
          </div>


        </div>

      </div>
    </div>
  );
}