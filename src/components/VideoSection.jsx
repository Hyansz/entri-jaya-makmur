import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-12 px-4 text-center" ref={ref}>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Video Tentang Produk Kami
            </h2>

            <div className="flex justify-center">
                {visible ? (
                    <lite-youtube
                        videoid="t_9Zu8M9KJI"
                        style={{
                            width: "100%",
                            maxWidth: "800px",
                            aspectRatio: "16 / 9",
                            borderRadius: "1rem",
                            overflow: "hidden",
                        }}
                        params="autoplay=1&rel=0"
                    ></lite-youtube>
                ) : (
                    <div
                        className="bg-gray-200 animate-pulse rounded-xl"
                        style={{
                            width: "100%",
                            maxWidth: "800px",
                            aspectRatio: "16 / 9",
                        }}
                    ></div>
                )}
            </div>
        </section>
    );
}
