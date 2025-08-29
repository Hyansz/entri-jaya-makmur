import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Certificates() {
    const images = [
        { src: "/img/sertif1.webp", title: "ISO 9001:2015" },
        { src: "/img/sertif2.webp", title: "Sertifikat Nasional" },
        { src: "/img/sertif3.webp", title: "Lisensi Industri" },
        { src: "/img/sertif4.webp", title: "Penghargaan Mutu" },
    ];

    const [index, setIndex] = useState(-1);

    return (
        <section
            className="py-16 px-4 bg-white border-b-2 border-gray-200 w-11/12 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-center text-gray-800 font-bold mb-10 text-2xl uppercase tracking-wide">
                Sertifikasi PT. Entri Jaya Makmur
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="group rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 ease-in-out cursor-pointer bg-white"
                        onClick={() => setIndex(i)}
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full aspect-[4/5] object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="bg-white text-center py-2 text-sm text-gray-600 font-medium">
                            {img.title}
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images}
                plugins={[Thumbnails, Zoom]} // Aktifkan Zoom
                thumbnails={{ border: 0, padding: 8 }}
                zoom={{ maxZoomPixelRatio: 3, doubleTapDelay: 300 }}
            />
        </section>
    );
}
