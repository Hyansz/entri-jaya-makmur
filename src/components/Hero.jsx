// Hero.jsx (Optimized)
import { useEffect, useState, memo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { event } from "../lib/gtag";

function Hero() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Hindari layout shift awal (pakai RAF + delay ringan)
        const raf = requestAnimationFrame(() => {
            setTimeout(() => setShow(true), 150);
        });
        return () => cancelAnimationFrame(raf);
    }, []);

    const handleClick = () => {
        event({
            action: "click",
            category: "whatsapp",
            label: "klik_wa_hero",
        });
    };

    // Preload image (agar tidak memicu reflow saat gambar muncul)
    useEffect(() => {
        const desktop = new Image();
        desktop.src = "/img/bsm1.webp";
        const mobile = new Image();
        mobile.src = "/img/bsm2.webp";
    }, []);

    return (
        <section id="home">
            {/* Desktop */}
            <div
                className="hidden md:block relative h-screen bg-cover bg-center text-white will-change-transform"
                style={{ backgroundImage: "url('/img/bsm1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h1
                        className={`text-3xl md:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-md transition-opacity duration-1000 ${
                            show ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        ALKOHOL ANTISEPTIK 96% & 70%
                    </h1>
                    <p
                        className={`text-lg md:text-xl font-medium max-w-3xl mx-auto drop-shadow transition-opacity duration-1000 delay-300 ${
                            show ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        MELAYANI PARTAI BESAR SKALA INDUSTRI DAN INDUSTRI UMKM,
                        KAMI SIAP MELAYANI ANDA UNTUK PERMINTAAN ALKOHOL
                        ANTISEPTIK 96% & 70%. SILAHKAN HUBUNGI TIM KAMI.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                    <a
                        href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-orange-700 transition-transform duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                        Pesan Sekarang
                    </a>
                </div>
            </div>

            {/* Mobile */}
            <div
                className="block md:hidden relative h-screen bg-cover bg-center text-white will-change-transform"
                style={{ backgroundImage: "url('/img/bsm2.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h1
                        className={`text-3xl font-bold mb-4 text-yellow-400 drop-shadow-md transition-opacity duration-1000 ${
                            show ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        ALKOHOL ANTISEPTIK 96% & 70%
                    </h1>
                    <p
                        className={`text-lg font-medium max-w-lg mx-auto drop-shadow transition-opacity duration-1000 delay-300 ${
                            show ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        MELAYANI PARTAI BESAR SKALA INDUSTRI DAN INDUSTRI UMKM,
                        KAMI SIAP MELAYANI ANDA UNTUK PERMINTAAN ALKOHOL
                        ANTISEPTIK 96% & 70%. SILAHKAN HUBUNGI TIM KAMI.
                    </p>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-[60%]">
                    <a
                        href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        className="flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 hover:bg-orange-700 transition-transform duration-300"
                    >
                        <FaWhatsapp className="text-xl" />
                        Pesan Sekarang
                    </a>
                </div>
            </div>
        </section>
    );
}

export default memo(Hero);
