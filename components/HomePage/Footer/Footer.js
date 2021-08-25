import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.container}>
            <section className={styles.top}>
                <div className={styles.first}>
                    <div className={styles.head}>
                    DRIVER
                    </div>
                    <div className={styles.body}>

                        <div>Become A Driver</div>
                        <div>Earnings </div>
                        <div>Cities</div>
                        <div>Help</div>
                        <div>Safety</div>
                        <div>Application Requirements</div>
                        <div>Express Drive</div>
                        <div>Bonus</div>
                        <div>Lyft Rewards</div>
                        <div>Driving Opportunities</div>
                        <div>Insurance</div>
                        <div>Hub</div>

                    </div>
                </div>
                <div  className={styles.second}>
                <div className={styles.head}>
                RIDER
                </div>
                    <div className={styles.body}>

                        <div>Sign up to ride</div>
                        <div>Fair Estimate</div>
                        <div>Lyft Pink</div>
                        <div>Cities</div>
                        <div>Help</div>
                        <div>Safety</div>
                        <div>Business Profile</div>
                        <div>Rewards</div>
                        <div>Events</div>
                        <div>Airports</div>
                        <div>Gift Cards</div>
                        <div>Donate</div>
                        <div>Blog</div>

                    </div>
                </div>
                <div  className={styles.third}>
                <div className={styles.head}>
                    LYFT
                </div>
                    <div className={styles.body}>

                        <div>Career</div>
                        <div>LyftUp</div>
                        <div>Business</div>
                        <div>Rentals</div>
                        <div>Bikes</div>
                        <div>Scooters</div>
                        <div>Self Driving</div>
                        <div>Lyft Medias</div>
                        <div>Developers</div>
                        <div>Press</div>
                        <div>Investors Relations</div>

                    </div>
                </div>
                <div className={styles.end}>
                    <button>Lyft Driver App</button>
                    <button>Lyft Rider App</button>
                    <button>Ride on web</button>
                </div>
            </section>
            <section className={styles.bottom}>
            <section className={styles.friend}>
            <div>Terms</div>
                <div>Privacy</div>
                <div>© 2021 Lyft Inc.</div>
                <div>CPUC ID No. TCP0032513-P</div>
                <div>icon</div>
                <div>icon</div>
                <div>icon</div>
            </section>
            </section>
        </section>
    )
}

export default Footer
