import { FaGlobe, FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Market from "./Market";
import { event } from "../lib/gtag";
import { MdStarRate } from "react-icons/md";

export default function Variants() {
    const variants = [
        {
            image: "./img/70_1_L.webp",
            name: "Alkohol 70% 1 L",
            price: "Rp 25.000",
            promo: "Rp 20.000",
            sold: "385",
        },
        {
            image: "./img/70_5_L.webp",
            name: "Alkohol 70% 5 L",
            price: "Rp 130.000",
            promo: "Rp 115.000",
            sold: "695",
        },
        {
            image: "./img/70_20_L.webp",
            name: "Alkohol 70% 20 L",
            price: "Rp 450.000",
            promo: "Rp 410.000",
            sold: "751",
        },
        {
            image: "./img/70_200_L.webp",
            name: "Alkohol 70% 200 L",
            price: "Rp 3.500.000",
            promo: "Rp 3.195.000",
            sold: "957",
        },
    ];

    return (
        <section
            id="variant"
            className="bg-white text-center py-16 border-b-2 border-gray-200"
            data-aos="zoom-in"
            data-aos-duration="600"
        >
            <h2 className="text-2xl md:text-[40px] font-bold text-gray-800 uppercase mb-10">
                Varian Kemasan Alkohol Antiseptik 70%
            </h2>

            {/* Mobile & Tablet */}
            <div className="block lg:hidden mb-12 px-2 w-11/12 mx-auto">
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
                            <div className="bg-white shadow-md hover:shadow-lg rounded-xl p-4 flex flex-col items-center w-11/12 mx-auto mb-10 py-6 mt-1">
                                <img
                                    src={variant.image}
                                    alt={variant.name}
                                    className="h-60 object-top object-cover mb-6 rounded-2xl"
                                />
                                <div className="w-[85%] text-left">
                                    <div className="flex items-center w-full justify-between mb-3">
                                        <div className="font-bold flex text-xl text-yellow-400 leading-tight">
                                            <MdStarRate />
                                            <MdStarRate />
                                            <MdStarRate />
                                            <MdStarRate />
                                            <MdStarRate />
                                        </div>
                                        <div className="flex text-sm font-medium">
                                            <p>{variant.sold} Terjual</p>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl mb-3 font-semibold text-gray-800">
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
                                    <a
                                        href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition cursor-pointer"
                                        onClick={() =>
                                            event({
                                                action: "click",
                                                category: "whatsapp",
                                                label: "klik_wa_product",
                                            })
                                        }
                                    >
                                        <FaWhatsapp />
                                        Hubungi Kami
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex justify-center gap-6 mb-12 w-10/12 mx-auto overflow-hidden p-2">
                {variants.map((variant, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md hover:shadow-lg rounded-xl p-5 flex flex-col items-center transition-all duration-300"
                    >
                        <img
                            src={variant.image}
                            alt={variant.name}
                            className=" object-contain rounded-lg mb-4"
                        />
                        <div className="w-full text-left">
                            <div className="flex items-center justify-between mb-3">
                                <div className="font-bold flex text-xl text-yellow-400 leading-tight">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                </div>
                                <div className="flex text-sm font-medium">
                                    <p>{variant.sold} Terjual</p>
                                </div>
                            </div>
                            <h4 className="text-lg mb-2 font-semibold text-gray-800 leading-tight">
                                {variant.name}
                            </h4>
                            <p className="text-sm text-gray-500 line-through mt-1">
                                {variant.price}
                            </p>
                            <p className="text-xl text-red-600 font-bold">
                                {variant.promo}
                            </p>
                            <p className="text-[11px] w-full text-red-500 italic mb-3">
                                *Harga sudah termasuk PPN
                            </p>
                            <a
                                href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition cursor-pointer"
                                onClick={() =>
                                    event({
                                        action: "click",
                                        category: "whatsapp",
                                        label: "klik_wa_product",
                                    })
                                }
                            >
                                <FaWhatsapp />
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tombol WhatsApp */}
            {/* <div className="mb-10 flex items-center justify-center mx-auto flex-col rounded-xl border-[2px] border-green-600 w-fit md:flex-row md:rounded-xl hover:border-green-700 transition">
                <a
                    href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 shadow-lg rounded-t-lg md:rounded-t-none md:rounded-l-lg hover:bg-green-700 transition-all duration-300"
                    onClick={() =>
                        event({
                            action: "click",
                            category: "whatsapp",
                            label: "klik_wa_variant",
                        })
                    }
                >
                    <FaWhatsapp className="text-xl" />
                    Hubungi Kami
                </a>
                <h1 className="text-xl py-3 md:py-2 font-semibold md:px-3">
                    0851-7439-4123
                </h1>
            </div> */}

            <div className="w-10/12 mx-auto">
                {/* SEO & CTA */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
                    Jual Alkohol Antiseptik 70% dan 96% Segala Kemasan
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 mb-10">
                    Alkohol 96% - Alkohol Ethanol - Alkohol Etanol - Jual
                    Alkohol 96% - Jual Alkohol 96% 200 Liter - Jual Alkohol 96%
                    20 Liter - Jual Alkohol 96% 5 Liter - Jual Alkohol 96% 1
                    Liter - Pesan Alkohol 96% - Antiseptik - Bahan parfum -
                    Biang parfum - Etanol parfum - Alkohol parfum - Pabrik
                    alkohol - Pabrik etanol - Grosir parfum - Grosir etanol -
                    Absolute parfum - Grosir chemical - Pabrik chemical - Pabrik
                    etanol absolute - Bahan herbal - Chemical herbal - Bahan
                    Kosmetik - Bahan Sabun - Home Care - Essential Oil - Parfum
                </p>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    {/* <a
                        href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-green-700 transition-all duration-300"
                        onClick={() =>
                            event({
                                action: "click",
                                category: "whatsapp",
                                label: "klik_wa_keyword",
                            })
                        }
                    >
                        <FaWhatsapp className="text-xl" />
                        Hubungi Kami
                    </a> */}
                    <div className="flex items-center justify-center flex-col rounded-xl border-[2px] border-green-600 w-fit md:flex-row md:rounded-xl hover:border-green-700 transition">
                        <a
                            href="https://wa.me/6285174394123?text=✦%20Halo%20kak,%20mau%20tanya%20produk%20alkohol%20antiseptiknya?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 shadow-lg rounded-t-lg md:rounded-t-none md:rounded-l-lg hover:bg-green-700 transition-all duration-300"
                            onClick={() =>
                                event({
                                    action: "click",
                                    category: "whatsapp",
                                    label: "klik_wa_variant",
                                })
                            }
                        >
                            <FaWhatsapp className="text-xl" />
                            Hubungi Kami
                        </a>
                        <h1 className="text-xl py-3 md:py-2 font-semibold md:px-3">
                            0851-7439-4123
                        </h1>
                    </div>

                    <a
                        href="https://entrijayamakmur.co.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full text-md shadow-md"
                        onClick={() =>
                            event({
                                action: "click",
                                category: "website",
                                label: "klik_web_entrijayamakmur",
                            })
                        }
                    >
                        <FaGlobe className="text-2xl" />
                        Kunjungi Website Resmi Kami
                    </a>
                </div>
            </div>

            <Market />
        </section>
    );
}
