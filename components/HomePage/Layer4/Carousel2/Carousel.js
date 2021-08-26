import Card from './Card';
import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel';

const Carousel2 = () => {
    const breakpoints = [
        {    width: 1, itemsToShow: 1},
        {    width: 768, itemsToShow: 3},
    ]

    const sources = {
        one: `/car2.png`,
        two: `/car3.png`,
        three: `/car4.png`,
        four: `/car5.png`,
        five: `/car6.png`,
        six: `/car7.png`,
        seven: `/car8.png`,
    }

    const headings = {
        one: `Rentals`,
        two: `Bikes & Scooters`,
        three: `Shared Rides`,
        four: `Wait & Save`,
        five: `Lyft`,
        six: `Priority Pickup`,
        seven: `Preferred Mode`,
    }
    

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
                <Card src={sources.one} headings={headings.one} />
                <Card src={sources.two} headings={headings.two}/>
                <Card src={sources.three} headings={headings.three}/>
                <Card src={sources.four} headings={headings.four}/>
                <Card src={sources.five} headings={headings.five}/>
                <Card src={sources.six} headings={headings.six}/>
                <Card src={sources.seven} headings={headings.seven}/>
            </Carousel>
        
            </section>
       
        </section>
    )
}

export default Carousel2
