import { useMemo } from "react";
import Whycard from "../components/common/Whycard";
import useSectionScrollProgress from "../hooks/useSectionScrollProgress";
import useStickyScrollProgress from "../hooks/useStickyScrollProgress";
import { revealCurve, lerp } from "../lib/scrollShapes";

const CARDS = [
    {
        header: "TRẢI NGHIỆM THỰC TẾ",
        paragraph:
            "Không lý thuyết suông, không bài giảng dài dòng. Bạn sẽ được nhập vai vào các tình huống công việc thực tế và đưa ra quyết định như một nhân viên thực thụ.",
    },
    {
        header: "AI PHẢN HỒI CÁ NHÂN HÓA",
        paragraph:
            "Mỗi lựa chọn của bạn đều được AI phân tích chi tiết, so sánh với tiêu chuẩn ngành và đưa ra nhận xét mang tính xây dựng. Bạn sẽ biết mình mạnh ở đâu, cần cải thiện gì và nên học thêm kỹ năng nào.",
    },
    {
        header: "TIẾT KIỆM THỜI GIAN CÙNG VỚI CHI PHÍ",
        paragraph:
            "Thay vì mất 3-6 tháng thử việc hoặc học lại từ đầu, chỉ cần vài buổi mô phỏng 3-5 tiếng, bạn đã có thể xác định được mức độ phù hợp của mình với từng lĩnh vực.",
    },
];

// How tall the outer wrapper is vs. the viewport — (height - 100vh) is the
// scroll distance the whole animation gets to play out over.
const PIN_HEIGHT_VH = 240;

// Each card's tucked (closed) and spread (open) position, as an offset from
// center in px, plus a fan rotation while packed in the pocket. closedY is
// each card's own vertical CENTER when tucked (not its top edge).
const CARD_LAYOUT = [
    { closedX: -28, openX: -340, closedY: 120, openY: 0, closedRotate: -14 },
    { closedX: 0, openX: 0, closedY: 132, openY: 0, closedRotate: 0 },
    { closedX: 28, openX: 340, closedY: 120, openY: 0, closedRotate: 14 },
];
const CLOSED_SCALE = 0.65;

// Stagger between cards, in raw-progress units.
const CARD_STAGGER = 0.035;

// Envelope geometry, all in px, in a coordinate system where 0 = the
// section's vertical center and values grow downward.
const POCKET_WIDTH = 800;
const POCKET_HEIGHT = 200; // plain rectangle now — no pointed bottom
const FLAP_HEIGHT = 120; // back flap, apex-up, sits directly above the pocket
const POCKET_TOP_CLOSED = 40; // pocket's top edge when fully tucked in
const ENVELOPE_SINK = 190; // extra px the whole envelope sinks away by when open

// Mascot's tucked (inside the envelope, alongside the cards) vs. resting
// (bottom-right corner) position — both as an offset from section center.
const MASCOT_CLOSED = { x: 150, y: 150, rotate: -8, scale: 0.42 };
const MASCOT_OPEN = { x: 560, y: 300, rotate: 0, scale: 1 };

export default function Section2() {
    const [wrapperRef, raw] = useStickyScrollProgress();

    const cardOpen = useMemo(
        () =>
            CARDS.map((_, i) =>
                revealCurve(raw, {
                    start: 0.05 + i * CARD_STAGGER,
                    holdStart: 0.4 + i * CARD_STAGGER,
                    holdEnd: 0.6 - i * CARD_STAGGER,
                    end: 0.95 - i * CARD_STAGGER,
                })
            ),
        [raw]
    );

    // The envelope must stay opaque as long as ANY card still needs to be
    // hidden behind/in front of it, and only clears once the slowest card
    // has fully emerged — derived straight from the cards so it can never
    // drift out of sync with them.
    const pocketVisible = 1 - Math.min(...cardOpen);
    const pocketTopY = POCKET_TOP_CLOSED + (1 - pocketVisible) * ENVELOPE_SINK;
    const flapTopY = pocketTopY - FLAP_HEIGHT;

    const mascotOpen = revealCurve(raw, { start: 0.12, holdStart: 0.42, holdEnd: 0.6, end: 0.92 });
    const mx = lerp(MASCOT_CLOSED.x, MASCOT_OPEN.x, mascotOpen);
    const my = lerp(MASCOT_CLOSED.y, MASCOT_OPEN.y, mascotOpen);
    const mRotate = lerp(MASCOT_CLOSED.rotate, MASCOT_OPEN.rotate, mascotOpen);
    const mScale = lerp(MASCOT_CLOSED.scale, MASCOT_OPEN.scale, mascotOpen);

    return (
        <section ref={wrapperRef} className="relative w-full" style={{ height: `${PIN_HEIGHT_VH}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-linear-to-b from-[#5281f0] via-[#b9c6e5] to-[#d9e7e8] pt-16 md:pt-17.5">
                <h1
                    className="absolute left-1/2 -translate-x-1/2 translate-y-3 font-semibold text-[3rem] text-white w-full text-center"
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

                {/* Floating decorative blocks, same language as Section 1 — parked
                around where the card row sits so they read as "hugging" it. */}
                <span
                    className="floaty pointer-events-none absolute left-[8%] top-[30%] h-11 w-11 rotate-12 rounded-lg bg-jl-pink-400/70 sm:h-14 sm:w-14"
                    style={{ opacity: 0.35 + (1 - pocketVisible) * 0.65 }}
                />
                <span
                    className="floaty pointer-events-none absolute left-[13%] top-[64%] h-8 w-8 rounded-full bg-jl-sky-300/80 sm:h-10 sm:w-10"
                    style={{ opacity: 0.35 + (1 - pocketVisible) * 0.65, animationDelay: ".5s" }}
                />
                <span
                    className="floaty pointer-events-none absolute right-[10%] top-[26%] h-9 w-9 rounded-full bg-white/40 sm:h-11 sm:w-11"
                    style={{ opacity: 0.35 + (1 - pocketVisible) * 0.65, animationDelay: "1s" }}
                />
                <span
                    className="floaty pointer-events-none absolute right-[7%] top-[62%] h-10 w-10 rotate-20 rounded-md bg-jl-pink-400/60 sm:h-12 sm:w-12"
                    style={{ opacity: 0.35 + (1 - pocketVisible) * 0.65, animationDelay: ".3s" }}
                />

                {/* Back flap — open, pointing up, sits BEHIND the cards (z-20).
                Lighter fill than the pocket on purpose: the two pieces need to
                read as separate layers, not one shape. */}
                <svg
                    width={POCKET_WIDTH}
                    height={FLAP_HEIGHT}
                    viewBox={`0 0 ${POCKET_WIDTH} ${FLAP_HEIGHT}`}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-20"
                    style={{ transform: `translate(-50%, ${flapTopY}px)`, opacity: pocketVisible }}
                >
                    <defs>
                        <linearGradient id="flapFill" x1="0" y1="1" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8a6bf0" />
                            <stop offset="100%" stopColor="#a9c2ff" />
                        </linearGradient>
                    </defs>
                    <polygon
                        points={`0,${FLAP_HEIGHT} ${POCKET_WIDTH},${FLAP_HEIGHT} ${POCKET_WIDTH / 2},0`}
                        fill="url(#flapFill)"
                    />
                    <polyline
                        points={`0,${FLAP_HEIGHT} ${POCKET_WIDTH / 2},0 ${POCKET_WIDTH},${FLAP_HEIGHT}`}
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.6"
                        strokeWidth="2"
                        strokeDasharray="7 7"
                    />
                </svg>

                {/* Cards + mascot — packed behind the pocket while tucked, then
                travel out to their spread positions. z-30/z-25: below the
                front pocket (z-40) so it genuinely covers whatever still
                overlaps it, above the back flap (z-20) so the flap reads as
                sitting behind them. */}
                <div className="absolute left-1/2 top-1/2 z-30 h-80 w-full -translate-x-1/2 -translate-y-1/2">
                    {CARDS.map((card, i) => {
                        const l = CARD_LAYOUT[i];
                        const open = cardOpen[i];
                        const x = lerp(l.closedX, l.openX, open);
                        const y = lerp(l.closedY, l.openY, open);
                        const rotate = lerp(l.closedRotate, 0, open);
                        const scale = lerp(CLOSED_SCALE, 1, open);
                        return (
                            <div
                                key={card.header}
                                className="absolute left-1/2 top-1/2"
                                style={{
                                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg) scale(${scale})`,
                                    zIndex: 30 + i,
                                }}
                            >
                                <Whycard header={card.header} paragraph={card.paragraph} />
                            </div>
                        );
                    })}
                </div>

                {/* Mascot — starts tucked inside the envelope alongside the
                cards, then travels out to its own corner as the section opens
                up. Swap the src / add a second <img> once more mascot art
                lands. */}
                <img
                    src="/images/mascotthinking.png"
                    alt=""
                    className="pointer-events-none absolute left-1/2 top-1/2 z-25 h-28 w-auto object-contain sm:h-36"
                    style={{
                        transform: `translate(calc(-50% + ${mx}px), calc(-50% + ${my}px)) rotate(${mRotate}deg) scale(${mScale})`,
                    }}
                />

                {/* Front pocket — plain rectangle (no pointed bottom), sits IN
                FRONT of the cards and mascot (z-40), genuinely occluding
                whatever's still behind it. Darker fill + a dashed top seam so
                it reads as a distinct layer from the flap behind it. */}
                <svg
                    width={POCKET_WIDTH}
                    height={POCKET_HEIGHT}
                    viewBox={`0 0 ${POCKET_WIDTH} ${POCKET_HEIGHT}`}
                    className="pointer-events-none absolute left-1/2 top-1/2 z-40"
                    style={{ transform: `translate(-50%, ${pocketTopY}px)`, opacity: pocketVisible }}
                >
                    <defs>
                        <linearGradient id="pocketFill" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#4a6bf5" />
                            <stop offset="100%" stopColor="#6c4ce0" />
                        </linearGradient>
                    </defs>
                    <rect width={POCKET_WIDTH} height={POCKET_HEIGHT} fill="url(#pocketFill)" />
                    <rect
                        x="1" y="1"
                        width={POCKET_WIDTH - 2}
                        height={POCKET_HEIGHT - 2}
                        fill="none"
                        stroke="white"
                        strokeOpacity="0.6"
                        strokeWidth="2"
                        strokeDasharray="7 7"
                    />
                    <text
                        x={POCKET_WIDTH / 2}
                        y={POCKET_HEIGHT * 0.45}
                        textAnchor="middle"
                        fontSize="34"
                        fontWeight="800"
                        fill="rgba(255,255,255,0.9)"
                        className="font-display"
                    >
                        JobLens
                    </text>
                </svg>

                <style>{`
          .floaty { animation: floatBlock 5s ease-in-out infinite; }
          @keyframes floatBlock {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
          }
        `}</style>
            </div>
        </section>
    );
}