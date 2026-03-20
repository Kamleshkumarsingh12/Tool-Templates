export default function BenefitsSection() {
  const benefits = [
    {
      text: "The SGPA to CGPA conversion is required for admission to college or university when filling out the application forms.",
      bg: "bg-[#FADADA]",
    },
    {
      text: "The practical advantage of using a converter over manual calculations is that it minimizes errors, saves time, and provides an immediate, accurate response.",
      bg: "bg-[#DDE1FF]",
    },
    {
      text: "To determine the consistency during the semester, the semester-wise SGPA to CGPA conversion is used by many universities.",
      bg: "bg-[#FCE7C3]",
    },
    {
      text: "SGPA to CGPA conversion also helps in boosting the confidence level of students with continuous monitoring of the progress; students can see the growth in their grades from semester to semester.",
      bg: "bg-[#E4F6E1]",
    },
    {
      text: "For students planning to study abroad, it is important for them to understand how to convert SGPA to CGPA. Many foreign universities use CGPA based on SGPA as the primary metric for admissions and scholarships.",
      bg: "bg-[#FAD6E8]",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-[28px] font-semibold text-[#0F172A]">
          Benefits of SGPA to CGPA Conversion Calculator
        </h2>

        {/* PARAGRAPH */}
        <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed max-w-4xl">
          The reason why the SGPA to CGPA conversion calculator is beneficial and how it simplifies the process of academic grades conversion. Rather than addressing formulas, the benefits below reflect the practical significance of the tool.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {benefits.map((item, i) => (
            <div
              key={i}
              className={`${item.bg} p-6 rounded-2xl flex gap-4 items-start min-h-[110px]`}
            >
              <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm">
                <span className="text-blue-500 text-sm">✦</span>
              </div>

              <p className="text-[14px] text-[#475569] leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}