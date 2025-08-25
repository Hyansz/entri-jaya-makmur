import TokopediaLogo from "../assets/tokopedia.png";
import { SiShopee } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { event } from "../lib/gtag";

export default function Market() {
    return (
        <div className="mt-12 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 uppercase tracking-wide">
                Beli Produk Kami di Marketplace Favorit Anda
            </h3>
            <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
                <a
                    href="https://www.tiktok.com/@pt.entrijayamakmur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                    onClick={() =>
                        event({
                            action: "click",
                            category: "whatsapp",
                            label: "klik_tiktok",
                        })
                    }
                >
                    <FaTiktok className="text-black text-4xl mb-1" />
                    <span className="text-sm font-medium text-gray-700">
                        TikTok Shop
                    </span>
                </a>
                <a
                    href="https://shopee.co.id/pt.entrijayamakmur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                    onClick={() =>
                        event({
                            action: "click",
                            category: "whatsapp",
                            label: "klik_shopee",
                        })
                    }
                >
                    <SiShopee className="text-orange-500 text-4xl mb-1" />
                    <span className="text-sm font-medium text-gray-700">
                        Shopee
                    </span>
                </a>
                <a
                    href="http://www.tokopedia.com/entri-jaya-makmur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                    onClick={() =>
                        event({
                            action: "click",
                            category: "whatsapp",
                            label: "klik_tokopedia",
                        })
                    }
                >
                    <img
                        src={TokopediaLogo}
                        alt="Tokopedia"
                        className="w-10 h-10 object-contain mb-1"
                    />
                    <span className="text-sm font-medium text-gray-700">
                        Tokopedia
                    </span>
                </a>
            </div>
        </div>
    );
}
