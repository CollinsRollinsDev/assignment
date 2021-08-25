import styles from './Carousel.module.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import { useRef } from 'react';

// Import Swiper styles

const CarouselSection = () => {

    const carouselRef = useRef(null);
const onNextStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the last item, go to first item
    carouselRef.current.goTo(0);
  }
};
const onPrevStart = (currentItem, nextItem) => {
  if (currentItem.index === nextItem.index) {
    // we hit the first item, go to last item
    carouselRef.current.goTo(3);
  }
};

    const breakpoints = [
        {    width: 1, itemsToShow: 1},
        {    width: 768, itemsToShow: 3},
    ]

    const testimonies = {
        one: `“I'm a disabled Marine Corps veteran, and because of my disability, I'm no longer able to work in a structured environment. The few hours a week that I drive connects me to my community and gives me extra money to help make ends meet.”`,
        two:`“Driving with Lyft is the perfect way to make money and be there for my family’s needs. I love providing a way to get my passengers from point A to B. Independence is key for me, and I enjoy meeting new people while driving!”`,
        three: `“My motto is very simple. It doesn't cost you a penny to be nice and kind, but it will cost you everything if you're not. If I'm free and somebody needs my help, I'll be the first one to jump in, in a heartbeat.”`,
        four: `“As a student, it’s hard to complete my class work around a schedule. I started driving more with Lyft and realized it was the perfect opportunity to make money and work on my own time! Driving with Lyft gives me freedom in my schedule to focus on school, which is my main priority.”`
    }

    const sources = {
        one: `/testimonyDp1.webp`,
        two: `/testimonyDp2.webp`,
        three: `/testimonyDp3.webp`,
        four: `/testimonyDp4.webp`
    }

    const names = {
        one: `Christine`,
        two: `Timothy`,
        three: `Mary`,
        four: `Harold`
    }

    return (
        <section className={styles.container}>
            <Carousel 
            breakPoints={breakpoints}
            ref={carouselRef}
  onPrevStart={onPrevStart}
  onNextStart={onNextStart}
  disableArrowsOnEnd={false}
            >
                <Card testimony={testimonies.one} src={sources.one} name={names.one}   />
                <Card testimony={testimonies.two} src={sources.two} name={names.two}   />
                <Card testimony={testimonies.three} src={sources.three} name={names.three}   />
                <Card testimony={testimonies.four} src={sources.four} name={names.four}   />
            </Carousel>

            <style jsx>
                {`
                    .rec-dot{
                        display: none
                    }
                `}
            </style>
            </section>
    )
}

export default CarouselSection
