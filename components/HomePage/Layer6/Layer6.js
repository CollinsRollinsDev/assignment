import styles from "./Layer6.module.css";
import Image from 'next/image'


const Layer6 = () => {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <p className={styles.safety}>SAFETY FIRST</p>
        <p className={styles.showUp}>How to show up like a best stranger</p>
        <p className={styles.narration}>
          SAFETY FIRST How to show up like a best stranger Every ride should
          feel safe and comfy to everyone. A few simple ground rules can help
          make that happen for all drivers and riders. Read up, mask up, and
          crack a window to enjoy the breeze in your hair.
        </p>
        <div className={styles.subArea}>
          <button>Learn about safety</button>
          <div>
            <p>Community guidelines</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M24 11.871l-5-4.871v3h-19v4h19v3z" />
            </svg>
          </div>
        </div>
      </section>
      <section className={styles.right}>
          <div className={styles.imgDiv}>
              <Image src="/layer6Img.webp"
              alt=""
              layout="fill"
              />
          </div>
      </section>
    </section>
  );
};

export default Layer6;
