import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section
            className="relative h-[100vh] bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/img/bsm1.jpg')` }}
            id="home"
        >
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 w-full">
                <h1
                    className={`text-3xl md:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-md transition-opacity duration-1000 ${
                        show ? "opacity-100" : "opacity-0"
                    }`}
                >
                    ALKOHOL ANTISEPTIK 96% & 70%
                </h1>
                <p
                    className={`text-lg md:text-xl font-medium w-11/12 md:w-2/3 mx-auto drop-shadow transition-opacity duration-1000 delay-300 ${
                        show ? "opacity-100" : "opacity-0"
                    }`}
                >
                    MELAYANI PARTAI BESAR SKALA INDUSTRI DAN INDUSTRI UMKM, KAMI
                    SIAP MELAYANI ANDA UNTUK PERMINTAAN ALKOHOL ANTISEPTIK 96% & 70%.
                    SILAHKAN HUBUNGI TIM KAMI.
                </p>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                <a
                    href="https://wa.me/6282324764733?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-orange-700 transition-all duration-300"
                >
                    <FaWhatsapp className="text-xl" />
                    Hubungi Kami
                </a>
            </div>
        </section>
    );
}
