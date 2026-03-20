
export default function InfoSection() {
  return (
    <div className="bg-[#F4F5FF] py-15">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-2xl font-semibold text-[#0F172A]">
          Online CGPA to SGPA Conversion Calculator
        </h2>

        {/* PARAGRAPHS */}
        <p className="mt-4 text-[16px] leading-[29px] text-[#475569] font-medium max-w-[1050px]">
          The CGPA to SGPA conversion calculator on the internet will enable students to calculate their cumulative grade into semester grade point average in seconds. Instead of doing it manually or applying formulas, all they have to do is enter their CGPA to get results. This tool is helpful, especially when the application portals or academic forms ask for SGPA rather than CGPA. Many students fail their semester-wise details; this tool provides a practical solution to that. It works on grading systems and helps students to submit their academic records.
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
              <h3 className="text-[20px] font-semibold text-[#0F172A]">
                What is CGPA?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
              CGPA stands for Cumulative Grade Point Average. It is the overall performance of a student in all the semesters of a course. CGPA combines all semester results into a single score, rather than considering them individually.
              CGPA is also used to evaluate the consistency and long-term academic performance of a student by universities, employers, and scholarship committees. Higher CGPA shows consistent performance over the semesters, and the changes in SGPA may even it out to form the final CGPA over time.
            </p>

            {/* INNER CARD */}
            <div className="mt-6 bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 font-bold">∑</span>
                <h4 className="text-[15px] font-semibold text-[#0F172A]">
                  How to Calculate CGPA?
                </h4>
              </div>

              {/* <div className="space-y-4 text-[14px] text-gray-600">
                {[
                  "Firstly, multiply the grade points of each subject by its credit value.",
                  "Then sum up weighted grade points.",
                  "After that, divide the total by the total of semester credits.",
                  "The value obtained will be the SGPA for that semester."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full text-xs">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div> */}

              <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  Formula of CGPA Calculation
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  CGPA = Σ (SGPA × Semester Credits) ÷ Total Credits of All Semesters
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                  Example: Assume that a student scored the following SGPA values in five semesters: 7.6, 8.0, 7.8, 8.4, and 8.2, then
                </p>

                <div className="text-[14px] text-gray-600 leading-relaxed space-y-7">
                  <p>CGPA = (7.6 + 8.0 + 7.8 + 8.4 + 8.2) ÷ 5 = 8.0</p>

                  <p>So the CGPA comes to 8.0, as per the formula. The CGPA  indicates the student’s academic performance.</p>


                  <p className="text-[#10519E] italic">Note: CGPA cannot be accurately converted into SGPA without subject-wise grades and semester credit distribution. Any CGPA to SGPA conversion is only an approximation.</p>
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
                What is SGPA?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
              SGPA means Semester Grade Point Average. It calculates the student's academic performance in one semester. CGPA provides information on overall performance, but SGPA emphasizes semester-wise performance and gives proper per-subject performance insights.
            </p>
            <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
              SGPA can be utilized to find out strong and weak points in certain terms. Students use SGPA to measure improvement, plan for further semesters, and understand the contribution of each term to their CGPA.
            </p>

            {/* INNER CARD */}
            <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm">

              <div className="flex items-center gap-2 mb-4">
                <span className="text-blue-600 font-bold">∑</span>
                <h4 className="text-[15px] font-semibold text-[#0F172A]">
                  How to Calculate SGPA?
                </h4>
              </div>

              {/* <div className="space-y-4 text-[14px] text-gray-600">
                {[
                  "Multiply each semester SGPA by its total credits.",
                  "Then sum up weighted grade points.",
                  "Then add all semester results.",
                  "Divide by the total credits of all semesters."
                ].map((text, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full text-xs">
                      {i + 1}
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div> */}

              <p className="text-[#334155] text-[13px]">The subject credits and grade points are used to calculate SGPA.</p>

              <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  FORMULA OF SGPA CALCULATION
                </p>
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  SGPA = (Sum of Grade Points × Credit Points of each subject in a semester) ÷ (Total Credit Points in that semester)
                </p>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                  Example: Assume that a semester has the following subjects
                </p>

                <div className="text-[13px] text-[#475569]">
                  <span className="font-medium">Subject 1: Grade Point 9, Credit 4</span>
                  <br />
                  <span className="font-medium">Subject 2: Grade Point 8, Credit 3</span>
                  <br />
                  <span className="font-medium">Subject 3: Grade Point 7, Credit 3</span>
                  <br />
                  <span className="font-medium">Subject 4: Grade Point 8, Credit 2</span>
                  <br />
                  <span className="font-medium">SGPA = (9×4 + 8×3 + 7×3 + 8×2) ÷ (4+3+3+2)</span>
                  <br/>
                  <span className="font-medium">SGPA=(36+24+21+16) ÷ (12)</span>
                  <br/>
                  <span className="font-medium">SGPA = 97 ÷ 12 = 8.08</span>
                </div>
                <br />
                <div className="text-[13px] text-[#475569]">
                  <p>
                    SGPA comes to 8.08
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