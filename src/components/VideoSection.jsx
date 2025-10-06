import { useEffect, useRef, useState, memo } from "react";

function VideoSection() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Lazy-load lite-youtube script hanya saat pertama kali dibutuhkan
        if (!customElements.get("lite-youtube")) {
            const script = document.createElement("script");
            script.src =
                "https://cdn.jsdelivr.net/npm/lite-youtube-embed@0.3.1/src/lite-yt-embed.js";
            script.async = true;
            document.body.appendChild(script);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section
            ref={ref}
            className="py-12 px-4 text-center bg-white w-11/12 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Video Tentang Produk Kami
            </h2>

            <div className="flex justify-center">
                {isVisible ? (
                    <lite-youtube
                        videoid="t_9Zu8M9KJI"
                        params="rel=0&modestbranding=1"
                        style={{
                            width: "100%",
                            maxWidth: "800px",
                            aspectRatio: "16 / 9",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            backgroundColor: "#000",
                        }}
                    ></lite-youtube>
                ) : (
                    <div
                        className="bg-gray-200 animate-pulse rounded-xl"
                        style={{
                            width: "100%",
                            maxWidth: "800px",
                            aspectRatio: "16 / 9",
                        }}
                        aria-label="Loading video preview..."
                    ></div>
                )}
            </div>
        </section>
    );
}

export default memo(VideoSection);
