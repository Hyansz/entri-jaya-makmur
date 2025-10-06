import { useState, useCallback, memo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function Certificates() {
    const [index, setIndex] = useState(-1);

    // Data dideklarasikan di luar render untuk stabilitas
    const images = [
        { src: "/img/sertif1.webp", title: "ISO 9001:2015" },
        { src: "/img/sertif2.webp", title: "Sertifikat Nasional" },
        { src: "/img/sertif3.webp", title: "Lisensi Industri" },
        { src: "/img/sertif4.webp", title: "Penghargaan Mutu" },
    ];

    // Gunakan useCallback agar fungsi tidak recreate setiap render
    const openLightbox = useCallback((i) => setIndex(i), []);

    return (
        <section
            className="py-16 px-4 bg-white border-b-2 border-gray-200 w-11/12 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-center text-gray-800 font-bold mb-10 text-2xl uppercase tracking-wide">
                Sertifikasi PT. Entri Jaya Makmur
            </h2>

            {/* Grid Gambar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 ease-in-out bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        aria-label={`Lihat ${img.title}`}
                    >
                        <img
                            src={img.src}
                            alt={`Sertifikat ${img.title}`}
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="500"
                            className="w-full aspect-[4/5] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="bg-white text-center py-2 text-sm text-gray-600 font-medium">
                            {img.title}
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images}
                plugins={[Thumbnails, Zoom]}
                thumbnails={{ border: 0, padding: 8 }}
                zoom={{ maxZoomPixelRatio: 3, doubleTapDelay: 300 }}
            />
        </section>
    );
}

export default memo(Certificates);
