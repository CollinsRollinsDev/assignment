import styles from "./PreBody.module.css";
import Image from 'next/image';
const PreBody = () => {
    return (
        <section className={styles.container}>
            <section className={styles.left}>
                <div className={styles.leftContentDiv}>
                    <h1>READY WHEN YOU ARE</h1>
                    <h2>Hop in. Crack a window. Let’s get back out there.</h2>
                    <div className={styles.btnDiv}>
                        <button className={styles.btn1}>Apply to drive</button>
                        <button className={styles.btn2}>Sign up to ride</button>
                    </div>
                </div>
            </section>
            <section className={styles.right}>
                <div className={styles.divImg1}>
                    <Image 
                        src="/coverImg1.webp"
                        alt=""
                        layout="fill"
                    />
                </div>
                <div className={styles.divImg2}>
                <Image 
                        src="/coverImg2.webp"
                        alt=""
                        layout="fill"
                    />
                </div>
            </section>
        </section>
    )
}

export default PreBody
