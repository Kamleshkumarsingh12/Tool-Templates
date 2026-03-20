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
              Understanding how to calculate CGPA to percentage helps students to get the evaluation of their academic performance for the global requirements. A skill gap evaluation and improvement helps in recognizing what to change and develop to build a career internationally.
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