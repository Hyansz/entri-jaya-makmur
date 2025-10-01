import { FaWhatsapp } from "react-icons/fa";
import { event } from "../lib/gtag";
import { MdStarRate } from "react-icons/md";

export default function ProductCard({
    title,
    size,
    price,
    originalPrice,
    image,
    sold,
}) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="mx-auto object-contain mb-4 rounded-xl"
                />
                <span className="absolute bottom-0 right-0 bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-tl-lg">
                    {size}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="font-bold flex text-xl text-yellow-400 mb-3 leading-tight">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                </div>
                <div className="flex text-md font-medium mb-3">
                    <p>{sold} Terjual</p>
                </div>
            </div>

            <p className="font-semibold text-[20px] mb-2 leading-tight">
                {title}
            </p>

            {originalPrice && (
                <p className="text-sm text-gray-500 mb-0.5 line-through">
                    Rp {originalPrice}
                </p>
            )}

            {/* Harga setelah diskon */}
            <p className="text-red-600 font-bold text-2xl mb-1.5 leading-none">
                Rp {price}
            </p>

            <p className="text-xs text-red-500 italic mt-0.5 mb-6">
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
    );
}
