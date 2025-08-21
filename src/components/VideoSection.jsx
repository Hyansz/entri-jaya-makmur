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
            <div className="relative pt-[60%] md:pt-[30%] h-0 overflow-hidden rounded-lg shadow-md max-w-3xl mx-auto border border-gray-200">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/t_9Zu8M9KJI?si=53B6aSZjPx5OakXR"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
