export default function Whycard({
    header,
    paragraph,
    textColor = "#5274EA",
    backgroundColor = "#F7FAFA",
    borderColor = "#5274EA",
    blockColor = "#4C5BE0",
    imageUrl,
}) {
    return (
        <div
            className="relative h-[320px] w-[280px] overflow-hidden rounded-xl border-1 px-4 pt-5"
            style={{
                backgroundColor,
                color: textColor,
                borderColor,
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-center h-10">
                <h2 className="text-[20px] font-bold leading-tight text-center">
                    {header}
                </h2>
            </div>

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