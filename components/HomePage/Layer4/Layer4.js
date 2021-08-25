/** @format */

import Image from "next/image";
import Carousel2 from "./Carousel2/Carousel";
import styles from "./Layer4.module.css";

const Layer4 = () => {
  return (
    <section className={styles.container}>
      <section className={styles.top}>
        <div className={styles.leftside}>
          <div className={styles.narration}>
            <p className={styles.first}>DRIVE WITH LYFT</p>
            <p className={styles.second}>Ready, set, go</p>
            <p className={styles.third}>in just a few quick taps.</p>
            <p className={styles.fourth}>
              Whether you’re following your heart or your busy schedule, we’ll
              get you where you need to go.
            </p>
          </div>
          <div className={styles.selection}>
            <div className={styles.box1}>
              <div className={styles.iconDiv}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                >
                  <path d='M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.304-15l-3.431 12h-2.102l2.542-9h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.196z' />
                </svg>
              </div>
              <div className={styles.textDiv}>
                Get reliable ride in minutes.
              </div>
            </div>
            <div className={styles.box2}>
              <div className={styles.iconDiv}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z' />
                </svg>
              </div>
              <div className={styles.textDiv}>
                Know that your driver is not wearing face mask
              </div>
            </div>

            <div className={styles.box3}>
              <div className={styles.iconDiv}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z' />
                </svg>
              </div>
              <div className={styles.textDiv}>
                Schedule your ride in advance
              </div>
            </div>

            <button className={styles.getRide}>Get a ride</button>

            <div className={styles.imgSide}>
              <Image src='/liftpink.png' alt='' layout='fill' />
            </div>
            <p className={styles.joinText}>
              Join Lyft Pink to unlock perks like 15% off rideshare, free
              Grubhub+ membership, exclusive offers, and more. All for $19.99 a
              month. Available in the US only.
            </p>
          </div>
        </div>
        <div className={styles.rightside}>
            <div className={styles.imgCovering}>
              <Image src='/phone.webp' alt='' layout='fill' />

            </div>
        </div>
      </section>
      <section className={styles.bottom}>
      <Carousel2 />      

      </section>
      <div className={styles.sub}>
            Availability of bikes, scooters, rentals, ride types, and transit information varies by region.
            </div>
    </section>
  );
};

export default Layer4;
