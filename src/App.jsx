import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Variants from "./components/Variants";
import Certificates from "./components/Certificates";
import VideoSection from "./components/VideoSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function App() {
    return (
        <div className="font-sans text-gray-800">
            <Header />
            <Hero />
            <Welcome />
            <ProductList />
            <Variants />
            <Certificates />
            <VideoSection />
            <MapSection />
            <Footer />
            {/* <Fan /> */}
        </div>
    );
}
