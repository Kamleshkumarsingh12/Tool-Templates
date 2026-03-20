export default function ConversionChartSection() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center"> {/* ⬅️ reduced width */}

        {/* HEADING */}
        <h2 className="text-[26px] font-semibold text-[#0F172A]">
          SGPA to Percentage Conversion Chart
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[14px] text-[#64748B] leading-relaxed max-w-2xl mx-auto">
          The SGPA to Percentage Chart gives an approximate idea of converting SGPA into percentage for academic and career requirements.
        </p>

        {/* TABLE CARD */}
        <div className="mt-10 bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-[0px_18px_60px_rgba(2,6,23,0.08)] overflow-hidden">

          <table className="w-full text-left">

            {/* HEADER */}
            <thead className="bg-[#F1F5F9] text-[#64748B] text-[13px] uppercase">
              <tr>
                <th className="py-5 px-6">SGPA</th>
                <th className="py-5 px-6">Percentage</th>
                <th className="py-5 px-6">Result Status</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-[14px] text-[#475569]">

              <tr className="border-t">
                <td className="py-5 px-6 font-medium">9.5</td>
                <td className="py-5 px-6">90.25%</td>
                <td className="py-5 px-6 text-[#16A34A] font-medium">Excellent</td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 font-medium">7.5</td>
                <td className="py-5 px-6">71.25%</td>
                <td className="py-5 px-6 text-blue-500 font-medium">Good</td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 font-medium">5.5</td>
                <td className="py-5 px-6">52.25%</td>
                <td className="py-5 px-6 text-[#D97706] font-medium">Pass</td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 font-medium">Below 4.0</td>
                <td className="py-5 px-6">Below 32.5%</td>
                <td className="py-5 px-6 text-[#DC2626] font-medium">Fail</td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 font-medium">Below 2.5</td>
                <td className="py-5 px-6">Below 17.5%</td>
                <td className="py-5 px-6 text-[#DC2626] font-medium">Fail</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}