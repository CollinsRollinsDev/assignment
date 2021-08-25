import CarouselSection from "./CarouselOne/Carousel";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./HomePage.module.css";
import Layer1 from "./Layer2/Layer1";
import Layer4 from "./Layer4/Layer4";
import Layer6 from "./Layer6/Layer6";
import Layer7 from "./Layer7/Layer7";
import Layer8 from "./Layer8/Layer8";
import PreBanner from "./PreBanner/PreBanner";
import PreBody from "./PreBody/PreBody";

const HomePage = () => {
    return (
        <section className={styles.container}>
            <Header />
            <PreBody />
            <Layer1 />
            <CarouselSection />
            <Layer4 />
            <PreBanner />
            {/* <Layer6 /> */}
            {/* <Layer7 /> */}
            {/* <Layer8 /> */}
            {/* <Footer /> */}
        </section>
    )
}

export default HomePage
