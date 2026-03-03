import Link from 'next/link';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.brand}>
                    <div className={styles.logo}>☕ The <em>Daily Drip</em></div>
                    <p>A neighbourhood cafe crafting specialty coffee with heart — one cup at a time.</p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Instagram"><FiInstagram /></a>
                        <a href="#" aria-label="Facebook"><FiFacebook /></a>
                        <a href="#" aria-label="Twitter"><FiTwitter /></a>
                    </div>
                </div>

                <div className={styles.links}>
                    <div className={styles.col}>
                        <strong>Hours</strong>
                        <span>Mon–Fri: 7am – 9pm</span>
                        <span>Saturday: 8am – 10pm</span>
                        <span>Sunday: 9am – 8pm</span>
                    </div>
                    <div className={styles.col}>
                        <strong>Location</strong>
                        <span>42, Brew Street</span>
                        <span>Koramangala, Bangalore</span>
                        <span>Karnataka – 560034</span>
                        <span>+91 98765 43210</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <span>© {new Date().getFullYear()} The Daily Drip. All rights reserved.</span>
                    <span>Made with ☕ & love</span>
                </div>
            </div>
        </footer>
    );
}
