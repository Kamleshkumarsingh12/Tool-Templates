export default function CTASection() {
  return (
     <div className="bg-white pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* BLUE CTA BLOCK */}
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] rounded-[28px] px-10 py-12 text-white">

            {/* HEADING */}
            <h2 className="text-[28px] font-semibold mb-4">
              Calculate your Skill Gap
            </h2>

            {/* PARAGRAPH */}
            <p className="text-[15px] leading-relaxed text-[#E0E7FF] max-w-8xl">
              Knowing your grades is an essential step to getting into global education and employment opportunities. The conversion of CGPA to SGPA helps students to evaluate their academic performance against the global requirements and recognize gaps that require improvement.
            </p>

            {/* BUTTON */}
            <button className="mt-6 bg-white text-[#1D4ED8] px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
              Know More
            </button>

          </div>

        </div>
      </div>
  );
}