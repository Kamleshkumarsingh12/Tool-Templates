export default function DifferenceTable() {
  return (
    <div className="bg-white py-17">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center text-[#0F172A]">
          Difference Between CGPA and Percentage
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-center text-gray-600 max-w-5xl mx-auto text-[16px] leading-relaxed">
          CGPA and Percentage are two different methods used to calculate students’ academic performance. CGPA uses grade points to represent the performance, which provides a better assessment. However, the percentage focuses on exact marks and gives a precise score out of 100. It is more detailed and used by colleges and employers.
        </p>

        {/* TABLE */}
        <div className="mt-12 max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden">

            {/* HEADER */}
            <thead className="bg-[#F8FAFC] text-[#0F172A]">
              <tr>
                <th className="text-left text-[#64748B] py-6 px-6 text-sm font-semibold">
                  PARAMETER
                </th>
                <th className="text-left text-[#137FEC] py-6 px-6 text-sm font-semibold">
                  CGPA (Cumulative Grade Point Average)
                </th>
                <th className="text-left text-[#137FEC] py-6 px-6 text-sm font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="text-gray-600 text-[14px] leading-relaxed">

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Meaning
                </td>
                <td className="py-5 px-6 text-[16px]">
                  CGPA shows the academic performance of a student using grade points.
                </td>
                <td className="py-5 px-6 text-[16px]">
                 The Percentage depicts exact marks out of 100.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Scope
                </td>
                <td className="py-5 px-6 text-[16px]">
                  CGPA scope is limited as it represents score ranges.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  The scope of Percentage is high, as it gives a numerical value.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Calculation
                </td>
                <td className="py-5 px-6 text-[16px]">
                  CGPA is evaluated through averages.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  The Percentage is calculated through exact totals and percentages.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Purpose
                </td>
                <td className="py-5 px-6 text-[16px]">
                  Schools and universities mainly used CGPA.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  It is commonly used for admissions, scholarships and placements. 
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}