/** @format */

import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({src, name, testimony}) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.pictureDiv}>
        <div className={styles.pictureCarrier}>
          <Image src={src} alt='' layout='fill' />
        </div>
      </div>

      <div className={styles.testimonialDiv}>
        {testimony}
      </div>

      <div className={styles.subscription}>
          <div className={styles.name}>
                - {name}
          </div>
          <div className={styles.position}>
          Driving with Lyft since 2016
          </div>
      </div>
    </section>
  );
};

export default Card;
