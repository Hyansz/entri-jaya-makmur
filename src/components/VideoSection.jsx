export default function VideoSection() {
    return (
        <section
            className="py-12 px-4 text-center"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                Video Tentang Produk Kami
            </h2>

            {/* Bungkus untuk layout */}
            <div className="flex justify-center">
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
            </div>
        </section>
    );
}
