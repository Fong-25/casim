import PlaceholderSection from "./PlaceholderSection";
import IndustryCard from "../components/common/IndustryCard";
import StatItem from "../components/common/StatItem";

const INDUSTRIES = [
    {
        title: "Thương mại điện tử",
        description: "Vận hành sàn, xử lý đơn hàng, chạy chiến dịch khuyến mãi, …",
        mascotSrc: "/images/mascotthinking.png",
    },
    {
        title: "Marketing",
        description: "Xây dựng kế hoạch truyền thông, phân tích chân dung khách hàng, sáng tạo nội dung, …",
        mascotSrc: "/images/mascotthinking.png",
    },
    {
        title: "Hệ thống thông tin quản lý",
        description: "Phân tích quy trình doanh nghiệp, thiết kế hệ thống thông tin, …",
        mascotSrc: "/images/mascotthinking.png",
    },
];

const STATS = [
    { number: "10+", label: "Nghề\nnghiệp" },
    { number: "20+", label: "Tình\nhuống" },
    { number: "2", label: "Ngôn\nngữ" },
];

export default function Section3() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-t from-[#5281f0] via-[#b9c6e5] to-[#fcfcfc] pt-16 md:pt-17.5">
            <h1
                className="absolute left-1/2 -translate-x-1/2 translate-y-3 font-bold text-[3rem] text-blue-700 w-full text-center"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, blue 45%, transparent 96%)",
                    maskImage: "linear-gradient(to bottom, blue 45%, transparent 96%)",
                }}
            >BA NHÓM NGÀNH CHÍNH</h1>

            {/* Soft cloud blobs tucked into the top corners */}
            <div className="pointer-events-none absolute -left-10 -top-6 h-40 w-72 rounded-full bg-white/70 blur-2xl" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-80 rounded-full bg-white/70 blur-2xl" />

            {/* Cards and stats share the exact same grid (columns, gap, max-w)
            so a stat item is guaranteed to sit centered under its card,
            regardless of how wide either one's own content is. */}
            <div className="relative z-10 mx-auto grid max-w-4xl grid-cols-3 justify-items-center gap-x-8 gap-y-10 px-6 pt-28">
                {INDUSTRIES.map((industry) => (
                    <IndustryCard key={industry.title} {...industry} />
                ))}
            </div>

            <div className="relative z-10 mx-auto mt-6 grid max-w-4xl grid-cols-3 justify-items-center gap-x-8 px-6 pb-16">
                {STATS.map((stat) => (
                    <StatItem key={stat.number + stat.label} {...stat} />
                ))}
            </div>
        </section>
    );
}