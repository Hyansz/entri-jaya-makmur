import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { event } from "../lib/gtag";

export default function MapSection() {
    const [reload, setReload] = useState(0);
    const [error, setError] = useState(false);

    const reloadMap = () => {
        setReload((prev) => prev + 1);
        setError(false);
    };

    return (
        <section
            className="bg-white py-12 px-4"
            id="kontak"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <div className="max-w-6xl mx-auto">
                {/* Map */}
                <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-md border border-gray-300 mb-6 relative">
                    {error && (
                        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10">
                            <div className="text-center">
                                <p className="text-gray-700 mb-2">
                                    Gagal memuat peta. Coba refresh ulang.
                                </p>
                                <button
                                    onClick={reloadMap}
                                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-full text-sm"
                                >
                                    Refresh Map
                                </button>
                            </div>
                        </div>
                    )}
                    <iframe
                        key={reload}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4312915944647!2d110.85039187506354!3d-7.527847474292622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1119d43e7431%3A0x50a9a4615f05cb08!2sPT%20ENTRI%20JAYA%20MAKMUR%20(PLESUNGAN)!5e0!3m2!1sen!2sid!4v1753677526251!5m2!1sen!2sid"
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen=""
                        onError={() => setError(true)}
                    ></iframe>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center mb-4">
                    <a
                        href="https://wa.me/6282324764733?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-green-700 transition-all duration-300"
                        onClick={() =>
                            event({
                                action: "click",
                                category: "whatsapp",
                                label: "klik_wa",
                            })
                        }
                    >
                        <FaWhatsapp className="text-xl" />
                        Hubungi Kami
                    </a>
                </div>

                {/* Alamat */}
                <p className="text-center text-gray-800 text-sm md:text-base mb-6 max-w-3xl mx-auto">
                    DK SAMIRUKUN, RT.7/RW.11, Samirukun, Plesungan, Kec.
                    Gondangrejo, Kabupaten Karanganyar, Jawa Tengah 57127
                </p>
            </div>
        </section>
    );
}
