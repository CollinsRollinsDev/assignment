import Card from './Card';
import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel';

const Carousel2 = () => {
    const breakpoints = [
        {    width: 1, itemsToShow: 1},
        {    width: 768, itemsToShow: 3},
    ]



    return (
        <section className={styles.container}>
            <section className={styles.head}>
                <div className={styles.first}>
                <div className={styles.headings}>
                Ride. Bike. Scoot. Go bananas.
                </div>
                <div className={styles.second}>
                We’ve got options to get you where you’re going. Choose a ride* that suits your mood and budget.
                </div>
                </div>
                <div className={styles.navBtn}>

                </div>
            </section>

            <section className={styles.carouselBody}>
            <Carousel 
            breakPoints={breakpoints}
//             ref={carouselRef}
//   onPrevStart={onPrevStart}
//   onNextStart={onNextStart}
  disableArrowsOnEnd={false}
            >
                {/* <Card testimony={testimonies.one} src={sources.one} name={names.one}   />
                <Card testimony={testimonies.two} src={sources.two} name={names.two}   />
                <Card testimony={testimonies.three} src={sources.three} name={names.three}   />
                <Card testimony={testimonies.four} src={sources.four} name={names.four}   /> */}
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Carousel>
        
            </section>
       
        </section>
    )
}

export default Carousel2
