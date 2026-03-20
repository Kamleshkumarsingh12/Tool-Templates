export default function DifferenceTable() {
  return (
    <div className="bg-white py-17">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-center text-[#0F172A]">
          Difference Between SGPA and CGPA
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-center text-gray-600 max-w-5xl mx-auto text-[16px] leading-relaxed">
          This section elaborates on the major differences between SGPA and CGPA in terms of meaning, use, and calculation. Although SGPA is an indicator of a student's performance in one semester, CGPA represents the overall academic performance of a student in all semesters. Hence, CGPA provides a clear view of performance, and it is used as an official academic assessment.
        </p>

        {/* TABLE */}
        <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl overflow-hidden">

            {/* HEADER */}
            <thead className="bg-[#F8FAFC] text-[#0F172A]">
              <tr>
                <th className="text-left text-[#64748B] py-6 px-6 text-sm font-semibold">
                  TERMS OF COMPARISON
                </th>
                <th className="text-left text-[#137FEC] py-6 px-6 text-sm font-semibold">
                  SGPA (SEMESTER GRADE POINT AVERAGE)
                </th>
                <th className="text-left text-[#137FEC] py-6 px-6 text-sm font-semibold">
                  CGPA (CUMULATIVE GRADE POINT AVERAGE)
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
                  SGPA represents a student's academic performance in a single semester.
                </td>
                <td className="py-5 px-6 text-[16px]">
                 CGPA measures overall academic performance across all semesters.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Scope
                </td>
                <td className="py-5 px-6 text-[16px]">
                  SGPA scope is limited to one semester.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  CGPA covers the entire academic duration.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Calculation
                </td>
                <td className="py-5 px-6 text-[16px]">
                  Calculated using grade points and credit points for a semester.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  Calculated by averaging SGPA across semesters.
                </td>
              </tr>

              <tr className="border-t">
                <td className="py-5 px-6 text-[17px] font-semibold text-[#0F172A]">
                  Purpose
                </td>
                <td className="py-5 px-6 text-[16px]">
                  Helps evaluate short-term academic performance.
                </td>
                <td className="py-5 px-6 text-[16px]">
                  Used for admissions, placements, and overall evaluation.
                </td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}