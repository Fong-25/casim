import PlaceholderSection from "./PlaceholderSection";

//
export default function Section4() {
    const steps = [
        "Tạo tài khoản nhanh chóng bằng Gmail",
        "Lựa chọn ngành và vị trí công việc mong muốn",
        "Nhập vai vào tình huống và đưa ra quyết định",
        "Nhận phản hồi và đánh giá chi tiết từ AI",
    ];
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#5281f0] via-[#5874b6] to-[#fcfcfc] pt-16 md:pt-17.5 pb-16">
            <h1 className="
                        absolute left-1/2 -translate-x-1/2 -translate-y-10
                        text-center text-5xl font-semibold leading-[1.2]
                        py-2 whitespace-nowrap
                        bg-linear-to-b from-white via-white to-[#a6a3a3]
                        bg-clip-text text-transparent
                    "
            >
                CÁCH HOẠT ĐỘNG
            </h1>
            {/* Video + decorative JOBLENS */}
            <div className="relative mx-auto mt-8 w-[calc(100%-2rem)] max-w-300">
                <div className="relative h-[clamp(320px,38vw,400px)] w-full">
                    {/* <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -bottom-40 z-0 select-none overflow-hidden text-center text-[clamp(6rem,18vw,13rem)] font-black leading-none tracking-tight text-white/30"
                    >
                        JOBLENS
                    </div> */}

                    <div className="absolute inset-x-0 bottom-8 z-10 h-[clamp(300px,34vw,360px)] overflow-hidden rounded-2xl bg-amber-50 shadow-xl">
                        <video
                            className="absolute h-[90%] w-full object-cover bottom-0"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="https://placehold.co/1200x450/000000/ffffff?text=Placeholder+for+video"
                        >
                            <source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative z-20 mt-10 px-1 md:px-0">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
                        {steps.map((step, index) => (
                            <div key={step} className="contents">
                                <div className="flex min-h-16 items-center justify-center rounded-xl bg-[#4165df] px-5 py-3 text-center text-sm font-bold leading-tight text-white shadow-md md:min-h-[68px]">
                                    {step}
                                </div>

                                {index < steps.length - 1 && (
                                    <div
                                        aria-hidden="true"
                                        className="mx-auto hidden h-0 w-0 border-y-33 border-l-28 border-y-transparent border-l-[#5b57e8] md:block"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
