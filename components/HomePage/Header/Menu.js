import styles from "./Menu.module.css";

const Menu = ({setCancel}) => {

const handleCancel = () => {
    setCancel(false);
}
  return (
    <section className={styles.container}>
        <section className={styles.wrapper}>
      <section className={styles.header}>
        <section className={styles.logo}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="50"
            viewBox="-29.6928 -35.02625 257.3376 210.1575"
          >
            <path
              d="M0 2.445h30.06v80.674c0 12.767 5.84 20.372 10.458 23.632-4.889 4.346-19.829 8.149-30.966-1.087C2.986 100.22 0 91.268 0 82.847zm187.863 67.014v-8.478h9.168V31.238h-10.068C183.098 13.381 167.2 0 148.187 0c-21.903 0-39.658 17.756-39.658 39.658v69.459c6.24.877 13.674-.109 19.999-5.354 6.565-5.445 9.551-14.396 9.551-22.817v-2.559h15.013V48.644h-15.013v-8.986h.036c0-5.562 4.509-10.071 10.072-10.071 5.562 0 10.089 4.509 10.089 10.071v29.801c0 21.902 17.774 39.658 39.676 39.658V79.53c-5.562 0-10.089-4.509-10.089-10.071zM74.015 31.238v43.651c0 2.478-2.056 4.487-4.593 4.487s-4.593-2.009-4.593-4.487V31.238H35.085v51.338c0 9.235 3.132 20.915 17.385 24.718 14.268 3.807 22.545-4.074 22.545-4.074-.754 5.192-5.644 8.995-13.521 9.81-5.96.616-13.582-1.358-17.384-2.988v27.199c9.688 2.857 19.935 3.78 29.963 1.834 18.199-3.531 29.685-18.742 29.685-38.979V31.238z"
              fillRule="evenodd"
            />
          </svg>
        </section>

        <section className={styles.items2}>
          <button>Log in</button>
          <svg onClick={handleCancel}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </section>
      </section>
        <section className={styles.main}>
            <section className={styles.driveArea}>
                <div className={styles.head}>DRIVER</div>
                <div>Earnings</div>
                <div>Cities</div>
                <div>Help</div>
                <div>Apply to drive</div>
            </section>

            <section className={styles.driveArea}>
                <div className={styles.head}>RIDER</div>
                <div>Cities</div>
                <div>For Business</div>
                <div>Help</div>
                <div>Sign up to ride</div>
            </section>

            <section className={styles.driveArea}>
                <div className={styles.head}>COLLINS ROLLINS</div>
            </section>
        </section>
        </section>
    </section>
  );
};

export default Menu;
