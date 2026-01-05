interface SectionImageDividerProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAspectRatio?: "square" | "video" | "auto";
}

export default function SectionImageDivider({
  title,
  description,
  imageUrl,
  imageAspectRatio = "square",
}: SectionImageDividerProps) {
  const getAspectClass = () => {
    if (imageAspectRatio === "auto") return "";
    if (imageAspectRatio === "video") return "aspect-video";
    return "aspect-square sm:aspect-video";
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {imageUrl ? (
          <div
            className={`w-full rounded-lg overflow-hidden ${getAspectClass()}`}
          >
            <img
              src={imageUrl}
              alt={title || "Section image"}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-full bg-gray-100 border border-gray-200 rounded-lg overflow-hidden p-12 sm:p-16 flex items-center justify-center ${getAspectClass()}`}
          >
            <div className="text-center text-muted-foreground space-y-4">
              <svg
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {title && (
                <p className="text-sm sm:text-base font-semibold text-foreground">
                  {title}
                </p>
              )}
              {description && (
                <p className="text-xs sm:text-sm">{description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
