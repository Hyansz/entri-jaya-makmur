import ProductCard from "./ProductCard";

export default function ProductList() {
    const products = [
        {
            title: "Alkohol Antiseptik 96% Kemasan 1 Liter",
            size: "1 L",
            price: "26.000",
            originalPrice: "32.000",
            image: "/img/96_1_L.webp",
            sold: "731",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 5 Liter",
            size: "5 L",
            price: "130.000",
            originalPrice: "150.000",
            image: "/img/96_5_L.webp",
            sold: "815",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 20 Liter",
            size: "20 L",
            price: "430.000",
            originalPrice: "450.000",
            image: "/img/96_20_L.webp",
            sold: "928",
        },
        {
            title: "Alkohol Antiseptik 96% Kemasan 200 Liter",
            size: "200 L",
            price: "4.000.000",
            originalPrice: "4.500.000",
            image: "/img/96_200_L.webp",
            sold: "1730",
        },
    ];

    return (
        <section
            id="produk"
            className="mx-auto py-16 w-11/12 border-b-2 border-slate-200"
        >
            <div className="mb-8" data-aos="zoom-in" data-aos-duration="400">
                <h2 className="text-center text-[42px] font-bold mb-4 text-red-600">
                    ALKOHOL ANTISEPTIK 96%
                </h2>
                <p className="text-center w-[80%] mx-auto">
                    Bahan baku parfum cair dengan kualitas premium, cocok
                    digunakan untuk industri kosmetik, sabun, parfum isi ulang,
                    dan produk wewangian lainnya. Tersedia dalam ukuran 1 L s.d.
                    20 L.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                        data-aos-duration="300"
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

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
