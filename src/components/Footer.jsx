import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-orange-600 text-white px-4 pt-6 pb-3">
            {/* Bagian atas footer */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                {/* Logo dan nama */}
                <div className="flex-shrink-0 flex items-center gap-2">
                    <img
                        src="./img/logo1.webp"
                        alt="Logo"
                        className="h-12 object-contain"
                    />
                </div>

                {/* Deskripsi perusahaan */}
                <p className="text-sm leading-relaxed md:text-left text-center">
                    PT Entri Jaya Makmur adalah perusahaan manufaktur alat kesehatan
                    mencakup produk elektromedik, laboratorium, BMHP (Liquid & Non Liquid), dan produk IVD.
                </p>
            </div>

            {/* Garis pemisah */}
            <div className="border-t border-white/30 my-4" />

            {/* Copyright & Social Icons */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 mb-6 md:mb-2">
                <p className="text-xs text-white/80 text-center mb-1 md:mb-0 md:text-left">
                    &copy; {new Date().getFullYear()} PT Entri Jaya Makmur. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <a
                        href="https://www.instagram.com/pt.entrijayamakmur"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-white transition-transform duration-200 transform hover:scale-110"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://www.facebook.com/pt.entrijayamakmur"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-white transition-transform duration-200 transform hover:scale-110"
                    >
                        <FaFacebookF className="text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
