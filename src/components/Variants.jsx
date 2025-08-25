import { FaGlobe, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Market from "./Market";
import { event } from "../lib/gtag";

export default function Variants() {
    const variants = [
        {
            image: "./img/70_100_ML.jpg",
            name: "Alkohol 70% 100 ml",
            price: "Rp 5.000",
            promo: "Rp 3.500",
        },
        {
            image: "./img/70_1_L.jpg",
            name: "Alkohol 70% 1 L",
            price: "Rp 25.000",
            promo: "Rp 20.000",
        },
        {
            image: "./img/70_5_L.jpg",
            name: "Alkohol 70% 5 L",
            price: "Rp 130.000",
            promo: "Rp 115.000",
        },
        {
            image: "./img/70_20_L.jpg",
            name: "Alkohol 70% 20 L",
            price: "Rp 450.000",
            promo: "Rp 410.000",
        },
        {
            image: "./img/70_200_L.jpg",
            name: "Alkohol 70% 200 L",
            price: "Rp 3.500.000",
            promo: "Rp 3.195.000",
        },
    ];

    return (
        <section
            id="variant"
            className="bg-white text-center py-16 border-b-2 border-gray-200 w-11/12 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase mb-12">
                Varian Kemasan Alkohol Antiseptik 70%
            </h2>

            {/* Mobile & Tablet */}
            <div className="block lg:hidden mb-12 px-2">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                    }}
                >
                    {variants.map((variant, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-4 flex flex-col items-center min-h-[300px] space-y-3">
                                <img
                                    src={variant.image}
                                    alt={variant.name}
                                    className="h-60 w-full object-top object-cover mb-6 rounded-2xl"
                                />
                                <h4 className="text-xl font-semibold text-gray-800 text-center">
                                    {variant.name}
                                </h4>
                                <p className="text-base text-gray-500 line-through">
                                    {variant.price}
                                </p>
                                <p className="text-2xl text-red-600 font-bold">
                                    {variant.promo}
                                </p>
                                <p className="text-xs text-red-500 italic mb-6">
                                    *Harga sudah termasuk PPN
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex justify-center gap-6 mb-12 w-full overflow-hidden flex-wrap p-2">
                {variants.map((variant, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-lg rounded-xl p-5 flex flex-col items-center flex-shrink w-[160px] xl:w-[200px] min-h-[260px] space-y-3 transition-all duration-300"
                    >
                        <img
                            src={variant.image}
                            alt={variant.name}
                            className="h-36 object-contain"
                        />
                        <h4 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                            {variant.name}
                        </h4>
                        <p className="text-sm text-gray-500 line-through mb-1">
                            {variant.price}
                        </p>
                        <p className="text-xl text-red-600 font-bold">
                            {variant.promo}
                        </p>
                        <p className="text-[11px] text-red-500 italic">
                            *Harga sudah termasuk PPN
                        </p>
                    </div>
                ))}
            </div>

            {/* Tombol WhatsApp */}
            <div className="mb-10">
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

            {/* SEO & CTA */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
                Jual Alkohol Antiseptik 70% dan 96% Segala Kemasan
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 mb-10">
                Alkohol 96% - Alkohol Ethanol - Alkohol Etanol - Jual Alkohol
                96% - Jual Alkohol 96% 200 Liter - Jual Alkohol 96% 20 Liter -
                Jual Alkohol 96% 5 Liter - Jual Alkohol 96% 1 Liter - Pesan
                Alkohol 96% - Antiseptik - Bahan parfum - Biang parfum - Etanol
                parfum - Alkohol parfum - Pabrik alkohol - Pabrik etanol -
                Grosir parfum - Grosir etanol - Absolute parfum - Grosir
                chemical - Pabrik chemical - Pabrik etanol absolute - Bahan
                herbal - Chemical herbal - Bahan Kosmetik - Bahan Sabun - Home
                Care - Essential Oil - Parfum
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
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

                <a
                    href="https://entrijayamakmur.co.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-md shadow-md"
                >
                    <FaGlobe className="text-2xl" />
                    Kunjungi Website Resmi Kami
                </a>
            </div>

            <Market />
        </section>
    );
}
