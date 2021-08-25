import styles from "./Layer7.module.css";
import Image from "next/image";

const Layer7 = () => {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.imgDiv}>
          <Image src="/layer7Img.webp" alt="" layout="fill" />
        </div>
      </section>
      <section className={styles.right}>
        <p className={styles.safety}>VACCINE ACCESS</p>
        <p className={styles.showUp}>
          Getting the vaccine starts with getting to the vaccine
        </p>
        <p className={styles.narration}>
          The pandemic has been tough on all of us, but it’s been particularly
          hard on communities that are underserved by public transit,
          healthcare, and other basic services. It’s our duty to help the best
          way we can: with rides. We’re working with partners and community
          members to help provide access to transportation to vaccine sites for
          people who need it. So everyone can say, “Sorry, COVID, our ride’s
          here.”
        </p>
        <div className={styles.subArea}>
        <p>Learn more about vaccine access</p>{" "}
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
      </section>
    </section>
  );
};

export default Layer7;
