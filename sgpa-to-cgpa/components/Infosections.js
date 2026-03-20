
export default function InfoSection() {
  return (
<div className="bg-[#F4F5FF] py-15">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-2xl font-semibold text-[#0F172A]">
            Online SGPA to CGPA Conversion Calculator
          </h2>

          {/* PARAGRAPHS */}
          <p className="mt-4 text-[19px] leading-[29px] text-[#475569] font-medium max-w-[1050px]">
            The SGPA to CGPA calculator is a simple tool used to convert SGPA to CGPA without doing it manually. CGPA is the overall academic performance, whereas SGPA highlights single-semester performance. CGPA is mostly required in many universities, recruiters, and scholarship portals as compared to SGPA.
          </p>

          <p className="mt-4 text-[19px] leading-[29px] text-[#475569] font-medium max-w-[1050px]">
            While applying for admissions, placements, internships, scholarships, and higher studies, it is required to convert the SGPA into CGPA. The use of the SGPA to CGPA converter tool saves time, reduces calculation errors, and provides accurate results instantly.
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
                  What is SGPA?
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
                SGPA (Semester Grade Point Average) displays a clear picture of a student's academic performance in one semester. SGPA is calculated using subject grades and its credits. Depending on the performance, SGPA differs in each semester.
              </p>

              {/* INNER CARD */}
              <div className="mt-6 bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-bold">∑</span>
                  <h4 className="text-[15px] font-semibold text-[#0F172A]">
                    How to Calculate SGPA?
                  </h4>
                </div>

                <div className="space-y-4 text-[14px] text-gray-600">
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
                </div>

                <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-xs font-semibold text-blue-600 mb-1">
                    FORMULA OF SGPA CALCULATION
                  </p>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    SGPA = (SUM OF GRADE POINTS × CREDIT POINTS OF EACH SUBJECT IN A SEMESTER) ÷ (TOTAL CREDIT POINTS IN THAT SEMESTER)
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                    Example: Assume that a semester has the following subjects
                  </p>

                  <div className="text-[14px] text-gray-600 leading-relaxed space-y-1">
                    <p>Subject 1: Grade Point 9, Credits 4</p>
                    <p>Subject 2: Grade Point 8, Credits 3</p>
                    <p>Subject 3: Grade Point 7, Credits 3</p>
                    <p>Subject 4: Grade Point 8, Credits 2</p>

                    <p className="mt-2">
                      SGPA = (9×4 + 8×3 + 7×3 + 8×2) ÷ (4+3+3+2)
                    </p>
                    <p>SGPA = (36+24+21+16) ÷ 12</p>
                    <p>SGPA = 97 ÷ 12 = 8.08</p>
                    <br></br>
                    <p className="mt-2">SGPA comes to 8.08</p>
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
                  What is CGPA?
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[15px] leading-[26px] text-gray-600 max-w-[420px]">
                CGPA (Cumulative Grade Point Average) is an overall measure of a student's academic performance across all semesters. CGPA is significant in required academic assessments, job applications, and higher education admissions.
              </p>

              {/* INNER CARD */}
              <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm">

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-bold">∑</span>
                  <h4 className="text-[15px] font-semibold text-[#0F172A]">
                    How to Calculate CGPA?
                  </h4>
                </div>

                <div className="space-y-4 text-[14px] text-gray-600">
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
                </div>

                <div className="mt-5 bg-[#f3f6fb] rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-xs font-semibold text-blue-600 mb-1">
                    FORMULA OF CGPA CALCULATION
                  </p>
                  <p className="text-[13px] text-gray-700 leading-relaxed">
                    CGPA = Σ (SGPA × SEMESTER CREDITS) ÷ TOTAL CREDITS OF ALL SEMESTERS
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
                    Example: Assume that a student scored the following SGPA values in five semesters: 7.6, 8.0, 7.8, 8.4, and 8.2, then
                  </p>
                  <br></br>
                  <div className="text-[14px] text-gray-600 leading-relaxed space-y-2">
                    <p>
                      CGPA = (7.6 + 8.0 + 7.8 + 8.4 + 8.2) ÷ 5 = 8.0
                    </p>
                    <br></br>
                    <p>
                      So the CGPA comes to 8.0, as per the formula. The CGPA indicates the student's academic performance.
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