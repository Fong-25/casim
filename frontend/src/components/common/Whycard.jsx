export default function Whycard({
    header,
    paragraph,
    textColor = "#5274EA",
    backgroundColor = "#F7FAFA",
    borderColor = "#D9D9D9",
    blockColor = "#4C5BE0",
    imageUrl,
}) {
    return (
        <div
            className="relative h-[320px] w-[250px] overflow-hidden rounded-xl border px-4 pt-5"
            style={{
                backgroundColor,
                color: textColor,
                borderColor,
            }}
        >
            {/* Header */}
            <h2 className="text-[20px] font-bold leading-tight">
                {header}
            </h2>

            {/* Divider */}
            <div
                className="mt-3 h-[1px] w-full"
                style={{ backgroundColor: textColor }}
            />

            {/* Paragraph */}
            <p className="mt-3 text-[12px] leading-[1.35]">
                {paragraph}
            </p>

            {/* Decorative block */}
            <div
                className="absolute bottom-1 left-[15px] right-[15px] h-[115px] rounded-[8px]"
                style={{ backgroundColor: blockColor }}
            />

            {/* Decorative artwork */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt=""
                    className="absolute bottom-[-8px] left-1/2 w-[215px] -translate-x-1/2 object-contain"
                />
            )}
        </div>
    )
}