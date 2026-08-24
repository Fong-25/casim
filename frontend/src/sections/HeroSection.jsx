import MascotPlaceholder from "../components/common/Mascot";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-r from-[#3163dc] via-[#3163dc] to-[#00c4cc] pt-16 md:pt-17.5">

            {/* ambient glow blobs */}
            <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-jl-sky-300/30 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-112 w-md rounded-full bg-jl-pink-500/20 blur-[120px]" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 sm:px-8">
                {/* Wordmark with glow "feet" — sized up */}
                <div className="relative select-none text-center">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 font-display font-extrabold leading-none tracking-tight text-white/70 blur-2xl text-[23vw] sm:text-[19vw] md:text-[13rem]"
                    >
                        JobLens
                    </span>
                    <span
                        className="relative block font-display font-extrabold leading-none tracking-tight text-white text-[23vw] sm:text-[19vw] md:text-[13rem]"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 96%)",
                            maskImage: "linear-gradient(to bottom, black 55%, transparent 96%)",
                        }}
                    >
                        JobLens
                    </span>
                </div>

                {/* Divider line — the two halves pushed further apart */}
                <div className="mt-3 flex w-full max-w-2xl items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:gap-10 sm:text-xs opacity-75">
                    <span className="whitespace-nowrap">Hãy cùng bắt đầu</span>
                    <span className="h-px flex-1 bg-white/25" />
                    <span className="whitespace-nowrap">hành trình trải nghiệm</span>
                </div>

                {/* Stage row: text block sits top-left, mascot is bottom-anchored and
                horizontally centered within the row. The mascot is now taller than
                the row itself, so it overflows upward and covers a bit of the
                wordmark's feet + the divider line above, same as the reference. */}
                <div className="relative mt-8 w-full min-h-75 sm:min-h-90 md:mt-10 md:min-h-105 lg:min-h-115] p-0">
                    {/* Badge + copy — same width, pinned left, widened */}
                    <div className="relative z-10 flex w-full max-w-95 flex-col items-start gap-4 text-left sm:max-w-95 -translate-x-10">
                        <div className="w-full rounded-md bg-jl-pink-500 px-5 py-2.5 font-body text-sm font-bold text-white shadow-lg shadow-jl-pink-500/30">
                            &ldquo;Trải nghiệm thực tế nghề nghiệp&rdquo;
                        </div>
                        <p className="w-full font-body text-[15px] leading-relaxed text-white/90 sm:text-base">
                            Joblens là nền tảng mô phỏng công việc bằng AI, giúp người dùng
                            nhập vai vào các tình huống thực tế trong 3 ngành:{" "}
                            <strong className="font-bold text-white">Thương mại điện tử</strong>,{" "}
                            <strong className="font-bold text-white">Marketing</strong> và{" "}
                            <strong className="font-bold text-white">Hệ thống thông tin quản lý</strong>
                        </p>
                    </div>

                    {/* Mascot — enlarged, bottom-middle of the section, overlapping the
                    wordmark/divider above, floating shapes surround it */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
                        <div className="relative pointer-events-auto">
                            <span className="absolute top-[3%] left-[68%] h-10 w-10 rotate-12 rounded-lg bg-jl-pink-400/80 animate-[float_5s_ease-in-out_infinite] sm:h-12 sm:w-12" />
                            <span className="absolute top-[24%] left-[-9%] h-8 w-8 rounded-full bg-jl-sky-300/80 animate-[float_4s_ease-in-out_infinite_.5s] sm:h-9 sm:w-9" />
                            <span className="absolute top-[46%] left-[95%] h-9 w-9 rounded-full bg-white/20 animate-[float_6s_ease-in-out_infinite_1s] sm:h-10 sm:w-10" />
                            <span className="absolute top-[68%] left-[-12%] h-10 w-10 rotate-20 rounded-md bg-jl-pink-400/70 animate-[float_5.5s_ease-in-out_infinite_.3s] sm:h-11 sm:w-11" />

                            <MascotPlaceholder className="h-95 w-auto object-contain object-bottom sm:h-115 md:h-135 lg:h-145" />
                        </div>
                    </div>
                    <div className="absolute bottom-50 h-55 bg-white right-0 w-40 rounded-xl flex flex-col justify-start align-start p-4">
                        <h3 className="text-md font-bold bg-linear-to-r from-[#3163dc] to-[#00c4cc] text-transparent bg-clip-text">Data <br /> Analyst</h3>
                        <p className="text-xs font-body bg-linear-to-r from-[#3163dc] to-[#00c4cc] text-transparent bg-clip-text">Trải nghiệm <br /> vị trí này</p>
                        <div className="p-2 rounded-md mt-2 absolute bottom-4 left-4 bg-linear-to-r from-jl-blue-500 to-jl-violet-500 text-white text-md hover:scale-105 hover:brightness-110 transition-transform active:scale-98">
                            <Link to='/register' >
                                Bắt đầu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
        </section >
    );
}