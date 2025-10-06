import { useState, useEffect, useRef } from "react";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    if (
                        currentScrollY > lastScrollY.current &&
                        currentScrollY > 50
                    ) {
                        setShowHeader(false);
                    } else {
                        setShowHeader(true);
                    }
                    lastScrollY.current = currentScrollY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* 🧠 Preload style khusus header (opsional, bisa taruh di index.html juga) */}
            <link
                rel="preload"
                href="/img/logo2.webp"
                as="image"
                type="image/webp"
            />

            <header
                className={`fixed top-2 inset-x-2 bg-gradient-to-r from-yellow-500/90 via-orange-600/90 to-orange-600/90 backdrop-blur-md text-white px-6 py-3 shadow-lg shadow-orange-800/30 z-50 transition-transform duration-300 rounded-2xl ${
                    showHeader ? "translate-y-0" : "-translate-y-[90px]"
                }`}
            >
                <div className="flex justify-center items-center">
                    <button onClick={scrollToTop} className="cursor-pointer">
                        {/* 🪶 Lazy load + responsive logo */}
                        <img
                            src="./img/logo2.webp"
                            alt="logo"
                            width="160"
                            height="40"
                            loading="lazy"
                            decoding="async"
                            className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                        />
                    </button>
                </div>
            </header>
        </>
    );
}
