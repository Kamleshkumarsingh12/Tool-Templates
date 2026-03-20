export default function DifferenceSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-[26px] font-semibold text-[#0F172A]">
          Difference Between SGPA and Percentage
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed">
          Both SGPA and percentage are used to measure academic performance, yet they use different systems.
        </p>

        {/* LIST */}
        <ul className="mt-10 text-left space-y-4 text-[16px] text-[#334155] leading-relaxed">

          <li>
            • SGPA uses a grade point system and follows a credit-based calculation system, whereas percentage uses a system of actual marks based.
          </li>

          <li>
            • SGPA tends to operate on a 10-point scale, but percentages always operate on a 100-point scale.
          </li>

          <li>
            • In fact, SGPA is calculated on a semester basis. However, a percent can give performance in terms of a subject or performance as a whole.
          </li>

          <li>
            • Since percentages are more popular across industries and institutions. While SGPA is widely used in higher education institutions
          </li>

        </ul>

      </div>
    </div>
  );
}