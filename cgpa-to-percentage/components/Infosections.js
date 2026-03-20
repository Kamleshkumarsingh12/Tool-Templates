
export default function InfoSection() {
  return (
    <div className="bg-[#F4F5FF] py-15">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-[#0F172A]">
          Online CGPA to Percentage Conversion Calculator
        </h2>

        {/* PARAGRAPHS */}
        <p className="mt-4 text-[16px] leading-[29px] text-[#475569] font-medium max-w-[1050px]">
          Some universities, employers, and scholarship forms still require marks in percentage rather than CGPA for clear evaluation. The online CGPA to Percentage conversion calculator
        </p>

        <p className="mt-4 text-[16px] leading-[29px] text-[#475569] font-medium max-w-[1050px]">
          helps students to convert CGPA wherever and whenever required easily. Just enter the CGPA details and get the instant percentage results. The tool is reliable, quick, easy to use, and perfect for students who need to know their academic performance and percentage at the time of entrance exams, admission, and placements.
        </p>

        {/* TWO CARDS */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* SGPA CARD */}
          <div className="bg-[#f3f6fb] p-6 rounded-2xl">

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                <span className="text-blue-600 font-semibold">S</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F172A]">
                What is CGPA?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
              CGPA (Cumulative Grade Point Average) indicates the overall performance of a student in terms of grade points in all the semesters in a course. It is usually calculated using a 10-point scale, and it is a simplified way to compute a student’s academic performance used by universities and employers for admissions and job purposes.
            </p>

            {/* INNER CARD */}
            <div className="mt-6 bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 font-bold">∑</span>
                <h4 className="text-[15px] font-semibold text-[#0F172A]">
                  How to Calculate CGPA?
                </h4>
              </div>
              <div className="text-[#000000] mb-4 text-[14px]">
                CGPA is calculated by taking the weighted average of grade points based on subject credits across all semesters.
              </div>
              <div className="text-[#000000] mt-3 mb-2 text-[14px]">
                The Steps of calculating CGPA involve:
              </div>
              <div className="space-y-4 text-[14px] text-gray-600">
                {[
                  "First, add all the grade points received in each subject.",
                  "Then divide the total by the number of subjects.",
                  "The final value is your CGPA.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full text-xs">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  FORMULA OF CGPA CALCULATION
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  CGPA = Sum of grade points of each subject ÷ Total subjects
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                  Example: Suppose a student scored the following Grade Points out of 10 in five subjects  = 9, 8, 7, 8, 9
                </p>

                <div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    CGPA = (9 + 8 + 7 + 8 + 9) ÷ 5 = 8.2
                  </p>
                  <br></br>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    The final value obtained is 8.2, which is your CGPA, which represents the student’s academic performance.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* CGPA CARD */}
          <div className="bg-[#f3f6fb] p-6 rounded-2xl h-full flex flex-col">

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                <span className="text-blue-600 font-semibold">C</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F172A]">
                What is Percentage?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
              The percentage represents marks out of 100 and provides a clear view of the actual performance of a student. It makes the academic comparison clearer as it provides exact scores rather than points. A percentage is widely used by colleges, employers, and scholarship providers for eligibility assessment.
            </p>

            {/* INNER CARD */}
            <div className="mt-12 bg-white rounded-2xl p-5 shadow-sm">

              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 font-bold">∑</span>
                <h4 className="text-[15px] font-semibold text-[#0F172A]">
                  How to Calculate Percentage?
                </h4>
              </div>
              <div className="text-[#000000] mb-4 text-[14px]">
                The percentage shows the marks out of 100, and provides a clear picture of academic performance. The percentage is more exact than CGPA  as it shows the actual score instead of grade points.
              </div>
                <div className="text-[#000000] mt-3 mb-2 text-[14px]">
                The Steps of calculating Percentage involve:
              </div>
              <div className="space-y-4 text-[14px] text-gray-600">
                {[
                  "Divide the secured marks by the total marks.",
                  "After that, multiply the result by 100.",
                  "The value received is the final result.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full text-xs">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  FORMULA OF PERCENTAGE CALCULATION
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  Percentage = (Marks obtained ÷ Maximum marks) × 100
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                  Example:Assume a student scored 450 marks out of 500.
                </p>
                <br></br>
                <div className="text-[14px] text-gray-600 leading-relaxed mt-2space-y-2">
                  <p>
                    Percentage = (450 ÷ 500) × 100 = 90%
                  </p>
                  <br></br>
                  <p>
                    The final result is 90% after applying the formula.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}