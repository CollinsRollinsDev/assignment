import styles from './Card.module.css';
import Image from 'next/image';

const Card = ({src, headings}) => {
    return (
       <>
             <section className={styles.cards}>
                <div className={styles.first}>
                    {headings}
                </div>
                <div className={styles.second}>
                    <div className={styles.imgDiv}>
                        <Image 
                            src={src}
                            alt=""
                            layout="fill"
                        />
                    </div>
                </div>
                <div className={styles.third}>
                    Collins Rollins
                </div>
            </section>
           
       </>
    )
}

export default Card
