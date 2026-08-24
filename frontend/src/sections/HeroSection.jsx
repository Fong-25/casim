import MascotPlaceholder from "../components/common/Mascot";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-r from-[#3163dc] via-[#3163dc] to-[#00c4cc] pt-16 md:pt-[70px]">
            <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-jl-sky-300/30 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-112 w-md rounded-full bg-jl-pink-500/20 blur-[120px]" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-10 pt-14 sm:px-8">
                <div className="relative select-none text-center">
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 text-[19vw] font-display font-extrabold leading-none tracking-tight text-white/30 blur-xl sm:text-[16vw] md:text-[10.5rem]"
                    >
                        JobLens
                    </span>
                    <span
                        className="relative block text-[19vw] font-display font-extrabold leading-none tracking-tight text-white sm:text-[16vw] md:text-[10.5rem]"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, blue 55%, transparent 90%)",
                            maskImage: "linear-gradient(to bottom, blue 55%, transparent 90%)",
                        }}
                    >
                        JobLens
                    </span>
                </div>

                {/* <div className="mt-6 w-full md:mt-10">
                    <div className="relative mx-auto grid w-full max-w-[1200px] items-end gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] md:gap-2">
                        <div className="order-2 flex items-start justify-center md:order-1 md:justify-end md:-translate-y-6">
                            <div className="w-full max-w-[430px]">
                                <span className="block w-full rounded-[10px] bg-jl-pink-500 px-5 py-3 text-center font-body text-sm font-bold text-white shadow-lg shadow-jl-pink-500/30 sm:text-base">
                                    &ldquo;Trải nghiệm thực tế nghề nghiệp&rdquo;
                                </span>
                                <p className="mt-4 w-full max-w-[430px] font-body text-[15px] leading-relaxed text-white/90 sm:text-base">
                                    Joblens là nền tảng mô phỏng công việc bằng AI, giúp người dùng
                                    nhập vai vào các tình huống thực tế trong 3 ngành:{" "}
                                    <strong className="font-bold text-white">Thương mại điện tử</strong>,{" "}
                                    <strong className="font-bold text-white">Marketing</strong> và{" "}
                                    <strong className="font-bold text-white">Hệ thống thông tin quản lý</strong>
                                </p>
                            </div>
                        </div>

                        <div className="relative order-1 flex justify-center md:order-2 md:justify-center">
                            <span className="absolute -left-6 top-10 h-10 w-10 rotate-12 rounded-lg bg-jl-pink-400/85 shadow-[0_18px_30px_rgba(239,93,168,0.25)] animate-[float_5s_ease-in-out_infinite] sm:-left-8 sm:top-14 sm:h-12 sm:w-12" />
                            <span className="absolute right-6 top-2 h-7 w-7 rounded-full bg-jl-sky-300/80 shadow-[0_18px_30px_rgba(169,194,255,0.28)] animate-[float_4s_ease-in-out_infinite_.5s] sm:right-10 sm:h-8 sm:w-8" />
                            <span className="absolute bottom-12 left-4 h-12 w-12 rounded-full bg-white/15 shadow-[0_18px_30px_rgba(255,255,255,0.12)] animate-[float_6s_ease-in-out_infinite_1s] sm:h-16 sm:w-16" />
                            <span className="absolute bottom-2 right-12 h-7 w-7 rounded-md bg-jl-sky-300/80 rotate-12 animate-[float_5s_ease-in-out_infinite_1.2s] sm:h-9 sm:w-9" />

                            <MascotPlaceholder className="h-[360px] w-[360px] -translate-y-4 drop-shadow-[0_25px_35px_rgba(10,5,40,0.35)] sm:h-[460px] sm:w-[460px] md:h-[560px] md:w-[560px] lg:h-[640px] lg:w-[640px]" />
                        </div>
                    </div>
                </div> */}
            </div>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
        </section>
    );
}
