import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LEFT - LOGO */}
        <div>
          <Image
            src="/logo.png"
            alt="edept logo"
            width={110}
            height={32}
            priority
          />
        </div>

        {/* RIGHT SIDE (NAV + BUTTONS) */}
        <div className="flex items-center gap-10">

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10 text-[16px] font-medium text-[#0F172A]">

            <a href="#" className="relative overflow-hidden hover:text-[#F59E0B] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#F59E0B] after:w-0 after:transition-all">
              Student
            </a>

            <a href="#" className="relative overflow-hidden hover:text-[#F59E0B] hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#F59E0B] after:w-0 after:transition-all">
              Universities
            </a>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#F59E0B] ">
              Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-[#F59E0B]">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <button className="bg-[#1D4ED8] text-white px-4 py-2 w-[160px] h-[40px] rounded-md text-sm font-medium">
              Global Careers Hub
            </button>

            <button className="bg-[#F59E0B] text-white px-4 py-2 w-[160px] h-[40px] rounded-md text-sm font-medium">
              Get in touch
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}