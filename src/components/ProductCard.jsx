import { FaWhatsapp } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { memo, useCallback } from "react";
import { event } from "../lib/gtag";

function ProductCard({ title, size, price, originalPrice, image, sold }) {
    const handleClick = useCallback(() => {
        event({
            action: "click",
            category: "whatsapp",
            label: "klik_wa_product",
        });
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-lg p-4 max-w-sm mx-auto transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto object-contain mb-4 rounded-xl"
                    width="400"
                    height="400"
                />
                <span className="absolute bottom-0 right-0 bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-tl-lg">
                    {size}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="font-bold flex text-xl text-yellow-400 mb-3 leading-tight">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => (
                            <MdStarRate key={i} />
                        ))}
                </div>
                <p className="text-md font-medium mb-3">{sold} Terjual</p>
            </div>

            <p className="font-semibold text-[20px] mb-2 leading-tight">
                {title}
            </p>

            {originalPrice && (
                <p className="text-sm text-gray-500 mb-0.5 line-through">
                    Rp {originalPrice}
                </p>
            )}

            <p className="text-red-600 font-bold text-2xl mb-1.5 leading-none">
                Rp {price}
            </p>
            <p className="text-xs text-red-500 italic mt-0.5 mb-6">
                *Harga sudah termasuk PPN
            </p>

            <a
                href="https://wa.me/6285174394123?text=Halo!%20Bisa%20minta%20info%20lebih%20lanjut%20tentang%20produk%20Alkohol?"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition cursor-pointer"
            >
                <FaWhatsapp />
                Pesan Sekarang
            </a>
        </div>
    );
}

export default memo(ProductCard);
