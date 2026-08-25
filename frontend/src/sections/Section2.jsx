import PlaceholderSection from "./PlaceholderSection";
import Whycard from "../components/common/Whycard";

export default function Section2() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-[#5281f0] via-[#b9c6e5] to-[#d9e7e8] pt-16 md:pt-17.5">
            <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-1 font-semibold text-[3rem] text-white w-full text-center"
                style={{
                    WebkitMaskImage: "linear-gradient(to bottom, black 45%, transparent 96%)",
                    maskImage: "linear-gradient(to bottom, black 45%, transparent 96%)",
                }}
            >
                TẠI SAO LẠI CHỌN JOBLENS?
            </h1>
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-20 whitespace-nowrap text-[18rem] font-bold leading-none text-white opacity-40">
                CHOOSE US
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-30 justify-center items-center">
                <Whycard
                    header="Lorem ipsum"
                    paragraph="Lorem ipsum fawe fwajf oawe furwai ja hfg4 3utq hesru fiwa fhgaee iuah4ueh whefu aoi jhawe jfwahe f"
                />
                <Whycard
                    header="Lorem ipsum"
                    paragraph="Lorem ipsum fawe fwajf oawe furwai ja hfg4 3utq hesru fiwa fhgaee iuah4ueh whefu aoi jhawe jfwahe f"
                />
                <Whycard
                    header="Lorem ipsum"
                    paragraph="Lorem ipsum fawe fwajf oawe furwai ja hfg4 3utq hesru fiwa fhgaee iuah4ueh whefu aoi jhawe jfwahe f"
                />

            </div>
        </section>
    );
}
