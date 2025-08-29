import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = [
        {
            title: "Alkohol Antiseptik 96% Kemasan 1 Liter",
            size: "1 L",
            price: "26.000",
            originalPrice: "32.000",
            image: "./img/96_ 1_L.webp",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 5 Liter",
            size: "5 L",
            price: "130.000",
            originalPrice: "150.000",
            image: "./img/96_ 5_L.webp",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 20 Liter",
            size: "20 L",
            price: "430.000",
            originalPrice: "450.000",
            image: "./img/96_ 20_L.webp",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 200 Liter",
            size: "200 L",
            price: "4.000.000",
            originalPrice: "4.500.000",
            image: "./img/96_ 200_L.webp",
        },
    ];

    return (
        <section
            className="mx-auto py-16 w-11/12 border-b-2 border-slate-200"
            id="produk"
        >
            <h2
                className="text-center text-4xl font-bold mb-8 text-red-600"
                data-aos="zoom-in"
                data-aos-duration="600"
            >
                ALKOHOL ANTISEPTIK 96%
            </h2>

            {/* Daftar Produk */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 200}
                        data-aos-duration="300"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            {/* Banner Promo Minimalis */}
            <div
                className="mt-10 bg-orange-600 text-center py-6 sm:py-8 px-4 sm:px-6 rounded-xl shadow-md shadow-orange-800 space-y-3"
                data-aos="zoom-in"
                data-aos-duration="600"
            >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
                    !! GRATIS ONGKIR !!
                </h3>

                <p className="text-base sm:text-lg text-white font-medium">
                    Berlaku untuk minimal pembelian{" "}
                    <span className="text-white font-bold">25 drum</span> per
                    order!
                </p>
            </div>
        </section>
    );
}
