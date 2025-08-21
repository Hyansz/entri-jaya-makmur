import { useState, useEffect } from "react";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Fungsi untuk scroll ke atas dengan smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header
            className={`fixed top-2 inset-x-2 bg-gradient-to-r from-yellow-500/90 via-orange-600/90 to-orange-600/90 backdrop-blur-md text-white px-6 py-3 shadow-lg shadow-orange-800/30 z-50 transition-transform duration-300 rounded-2xl ${
                showHeader ? "translate-y-0" : "-translate-y-[90px]"
            }`}
        >
            <div className="flex justify-center items-center">
                <button onClick={scrollToTop} className="cursor-pointer">
                    <img
                        src="./img/logo2.png"
                        alt="logo"
                        className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                    />
                </button>
            </div>
        </header>
    );
}
