

export default function InfoSection() {
  return (
    <div className="bg-[#F4F6FB] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CARD */}
          <div>

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
                <span className="text-blue-600 text-sm">📘</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F172A]">
                What is SGPA?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
              SGPA or Semester Grade Point Average is a system that universities use to present semester-wise academic performance of the students. They give grade points to each subject and multiply them by their credits to assess the overall semester performance. SGPA’s importance is that it not only shows students’ progress but also plays a major role in other areas like job applications, entrance examinations, and scholarship applications.
            </p>

            {/* INNER BOX */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">

              <h4 className="text-[15px] font-semibold text-[#0F172A] mb-3">
                <span className="text-blue-600 font-bold">∑</span>   How to Calculate SGPA?
              </h4>

              <p className="text-[13px] text-[#475569] mb-4">
                The subject credits and grade points are required to calculate SGPA. To calculate SGPA, universities multiply the grade point by the credits. Thereafter, they sum up all the credit points and divide them by the total credits.
              </p>

              {/* FORMULA */}
              <div className="bg-[#F1F5F9] rounded-lg p-4 border-l-4 border-blue-500 mb-4">
                <p className="text-[12px] font-semibold text-blue-600 mb-1">
                  FORMULA OF SGPA CALCULATION
                </p>
                <p className="text-[13px] text-[#0F172A]">
                  SGPA = Σ [(GRADE POINTS × CREDITS)] ÷ (TOTAL CREDITS)
                </p>
              </div>

              {/* EXAMPLE */}
              <p className="text-[12px] text-[#64748B] mb-3 uppercase">
                Example:
              </p>

              <div className="text-[13px] text-[#475569] leading-relaxed space-y-1">
                <p>Suppose a student gets grade points and credits in five subjects.</p>
                <p>Grade Point = 9, Credits = 4</p>
                <p>Grade Point = 8, Credits = 3</p>
                <p>Grade Point = 7, Credits = 2</p>
                <p>Grade Point = 10, Credits = 3</p>
                <p>Grade Point = 6, Credits = 2</p>

                <p className="mt-2">Step 1: Multiply the grade points by the credits for each subject</p>
                <p>9 × 4 = 36</p>
                <p>8 × 3 = 24</p>
                <p>7 × 2 = 14</p>
                <p>10 × 3 = 30</p>
                <p>6 × 2 = 12</p>

                <p className="mt-2">Step 2: Therefore, add the multiplied values together.</p>
                <p>36 + 24 + 14 + 30 + 12 = 116</p>

                <p className="mt-2">Step 3: After that, add the total number of credits.</p>
                <p>4 + 3 + 2 + 3 + 2 = 14</p>

                <p className="mt-2">Step 4: Divide the total grade points by the credits to find the SGPA.</p>
                <p>SGPA = 116 ÷ 14 = 8.28</p>

                <p className="mt-2">Therefore, the student’s SGPA for the semester is 8.28</p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div>

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
                <span className="text-blue-600 text-sm">📊</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#0F172A]">
                What is Percentage?
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
              A percentage represents marks obtained out of 100. It is widely used by universities, employers, and scholarship bodies because it provides a standardized and easily comparable academic score. In percentage format, employers, scholarship boards, and competitive exam authorities are likely to require the results in percentages since it is a simple and universally accepted way of measuring performance.
            </p>

            {/* INNER BOX */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
    
              <h4 className="text-[15px] font-semibold text-[#0F172A] mb-3">
                <span className="text-blue-600 font-bold">∑</span> How to Calculate Percentage?
              </h4>

              <p className="text-[13px] text-[#475569] mb-4">
                To calculate a percentage, divide the total marks secured by the total maximum marks. Then multiply the result by 100. It is a formula that represents the performance in a straightforward and universally accepted format.
              </p>

              {/* FORMULA */}
              <div className="bg-[#F1F5F9] rounded-lg p-4 border-l-4 border-blue-500 mb-4">
                <p className="text-[12px] font-semibold text-blue-600 mb-1">
                  FORMULA OF CGPA CALCULATION
                </p>
                <p className="text-[13px] text-[#0F172A]">
                  PERCENTAGE = (OBTAINED MARKS ÷ TOTAL MARKS) × 100
                </p>
              </div>

              {/* EXAMPLE */}
              <p className="text-[12px] text-[#64748B] mb-3 uppercase">
                Example:
              </p>

              <div className="text-[13px] text-[#475569] leading-relaxed space-y-1">
                <p>Step 1: Calculate the total marks you secured in all subjects.</p>
                <p>Step 2: Then find out the total maximum marks for all subjects combined.</p>

                <p className="mt-2">Example:</p>
                <p>Suppose a student scored 420 marks out of 500 maximum marks.</p>

                <p className="mt-2">Step 3: After that, divide the secured marks by the maximum marks.</p>
                <p>420 ÷ 500 = 0.84</p>

                <p className="mt-2">Step 4: Multiply the result by 100:</p>
                <p>0.84 × 100 = 84%</p>

                <p className="mt-2">Final Result = 84%</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}