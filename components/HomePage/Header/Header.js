/** @format */

import styles from "./Header.module.css";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <section className={styles.container}>
      <div className={styles.logoArea}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            width="100%"
            viewBox="-29.6928 -35.02625 257.3376 210.1575"
          >
            <path
              d="M0 2.445h30.06v80.674c0 12.767 5.84 20.372 10.458 23.632-4.889 4.346-19.829 8.149-30.966-1.087C2.986 100.22 0 91.268 0 82.847zm187.863 67.014v-8.478h9.168V31.238h-10.068C183.098 13.381 167.2 0 148.187 0c-21.903 0-39.658 17.756-39.658 39.658v69.459c6.24.877 13.674-.109 19.999-5.354 6.565-5.445 9.551-14.396 9.551-22.817v-2.559h15.013V48.644h-15.013v-8.986h.036c0-5.562 4.509-10.071 10.072-10.071 5.562 0 10.089 4.509 10.089 10.071v29.801c0 21.902 17.774 39.658 39.676 39.658V79.53c-5.562 0-10.089-4.509-10.089-10.071zM74.015 31.238v43.651c0 2.478-2.056 4.487-4.593 4.487s-4.593-2.009-4.593-4.487V31.238H35.085v51.338c0 9.235 3.132 20.915 17.385 24.718 14.268 3.807 22.545-4.074 22.545-4.074-.754 5.192-5.644 8.995-13.521 9.81-5.96.616-13.582-1.358-17.384-2.988v27.199c9.688 2.857 19.935 3.78 29.963 1.834 18.199-3.531 29.685-18.742 29.685-38.979V31.238z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className={styles.searchArea}>
        <section>
          <div className={styles.circleDiv}></div>
          <input
            type="text"
            placeholder="Where are you going?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.second}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg>
          </div>
        </section>
      </div>

      <section className={styles.menuArea}>
        <div className={styles.first}>DRIVER</div>
        <div className={styles.second}>RIDER</div>
        <div className={styles.third}>BUSINESS</div>
        <div className={styles.fourth}>LOGIN</div>
        <div className={styles.fifth}>SIGN UP</div>
      </section>
      <section className={styles.mobileMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </section>
    </section>
  );
};

export default Header;
