import styles from "./Layer8.module.css";
import Image from "next/image";
import Card from "./Card";
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';


const Layer8 = () => {

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
    carouselRef.current.goTo(5);
  }
};

const breakpoints = [
    {    width: 1, itemsToShow: 1},
    {    width: 768, itemsToShow: 5},
]

const sources = {
    one: `/airbnb.png`,
    two: `/ascension.jpg`,
    three: `/bluecross.png`,
    four: `/concur.png`,
    // five: `/delta.png`,
    six: `/logist.jpg`,
    seven: `/salesforce.jpg`,
    eight: `/slack.jpg`,
    nine: `/usc.png`,
    // ten: `/concur.png`
}

  return (
    <section className={styles.container}>
      <div className={styles.logoDiv}>
        <Image src="/lyftBus.png" alt="" layout="fill" />
      </div>
      <div className={styles.staticOffer}>We help you move your</div>
      <div className={styles.dynamicOffer}>business</div>
      <p className={styles.narrate}>
        Affordable transportation solutions, effortless payments, and getting
        all the right people to all the right places. So you can get work done.
      </p>
      <div className={styles.subArea}>
        <p>Learn about Lyft Business</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M24 11.871l-5-4.871v3h-19v4h19v3z" />
            </svg>
          <div></div>
        </div>

        <section className={styles.slide}>
        <Carousel 
            breakPoints={breakpoints}
            ref={carouselRef}
  onPrevStart={onPrevStart}
  onNextStart={onNextStart}
  disableArrowsOnEnd={false}
            >
                <Card src={sources.one}   />
                <Card src={sources.two}  />
                <Card src={sources.three}  />
                <Card src={sources.four}   />
                {/* <Card src={sources.five}   /> */}
                <Card src={sources.six}   />
                <Card src={sources.seven}   />
                <Card src={sources.eight}   />
                <Card src={sources.nine}   />
                {/* <Card src={sources.four}   /> */}
            </Carousel>
        </section>
    </section>
  );
};

export default Layer8;
