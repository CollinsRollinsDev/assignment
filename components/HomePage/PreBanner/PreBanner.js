import styles from './PreBanner.module.css';

const PreBanner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.ready}>        
                <p>Ready to roll?</p>
                    <p>Get a Lyft estimate.</p>
            </div>
            <div className={styles.searches}>
                <input type="text"  placeholder="Pick up a location"/>
                <input type="text"  placeholder="Enter drop-off location"/>
            </div>
            <div className={styles.btnDiv}>
                    <button>Get Estimate</button>
            </div>
        </section>
    )
}

export default PreBanner
