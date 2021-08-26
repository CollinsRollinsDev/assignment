import styles from './Card.module.css';
import Image from 'next/image'

const Card = ({src}) => {

    return (
        <section className={styles.card}>
          <Image src={src} alt='' layout='fill' quality={50}/>
         
        </section>
    )
}

export default Card
