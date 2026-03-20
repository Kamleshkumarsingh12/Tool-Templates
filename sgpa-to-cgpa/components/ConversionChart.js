export default function ConversionChart() {
  return (
     <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* HEADING */}
          <h2 className="text-[28px] font-semibold text-[#0F172A]">
            SGPA to CGPA Conversion Chart
          </h2>

          {/* PARAGRAPH */}
          <p className="mt-4 text-[15px] text-[#64748B] leading-relaxed max-w-4xl mx-auto">
            This chart demonstrates and gives students an idea of their semester performance. It is required particularly in filling forms, shortlisting colleges, or preparing academic documents, where SGPA and CGPA are needed
          </p>
          <div className="mt-10 max-w-5xl mx-auto bg-[#F8FAFC] rounded-2xl border border-gray-100 shadow-[0px_18px_60px_rgba(2,6,23,0.26)] overflow-hidden">
            <table className="w-full text-left border-[1px]">
              <thead className="text-[#64748B] text-[13px] uppercase bg-[#F1F5F9]">
                <tr>
                  <th className="text-left text-[#64748B] py-5 px-6">Marks (%) Range (Estimated)</th>
                  <th className="text-left py-5 px-6 text-[#10519E]">SGPA Range</th>
                  <th className="text-left py-5 px-6 text-[#10519E]">Estimated CGPA Range</th>
                  <th className="text-left py-5 px-6 text-[#64748B]">Result Status</th>
                </tr>
              </thead>
              <tbody className="text-[14px] text-[#475569]">
                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">85 - 100</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">9.0 - 10.0</td>
                  <td className="py-5 px-6 text-[#475569]">8.8 - 10.0</td>
                  <td className="py-5 px-6 text-[#16A34A] font-medium">Excellent</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">70 - 84</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">8.0 - 8.9</td>
                  <td className="py-5 px-6 text-[#475569]">7.8 - 8.7</td>
                  <td className="py-5 px-6 text-[#16A34A] font-medium">Very Good</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">60 - 69</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">7.5 - 7.9</td>
                  <td className="py-5 px-6 text-[#475569]">6.8 - 7.7</td>
                  <td className="py-5 px-6 text-blue-500 font-medium">Good</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">50 - 59</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">6.5 - 6.9</td>
                  <td className="py-5 px-6 text-[#475569]">6.3 - 6.7</td>
                  <td className="py-5 px-6 text-[#D97706] font-medium">Above Average</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">40 - 49</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">6.0 - 6.5</td>
                  <td className="py-5 px-6 text-[#475569]">6.0 - 6.2</td>
                  <td className="py-5 px-6 text-gray-500 font-medium">Average</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">35 - 39</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">5.5 - 6.0</td>
                  <td className="py-5 px-6 text-[#475569]">5.5 - 5.9</td>
                  <td className="py-5 px-6 text-[#D97706] font-medium">Borderline Pass</td>
                </tr>

                <tr className="border-t">
                  <td className="py-5 px-6 text-[#475569]">Below 35</td>
                  <td className="py-5 px-6 text-[#10519E] font-medium">Below 5.5</td>
                  <td className="py-5 px-6 text-[#475569]">Below 5.5</td>
                  <td className="py-5 px-6 text-[#DC2626] font-medium">Fail</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
  );
}