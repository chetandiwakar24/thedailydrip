'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.bg}>
                <img src="/cafe_hero.png" alt="The Daily Drip interior" className={styles.bgImg} />
                <div className={styles.overlay} />
            </div>

            <div className={`container ${styles.content}`}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    ✦ Est. 2019 · Specialty Coffee
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    Where Every Cup <br />
                    <em className="text-primary">Tells a Story</em>
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    Hand-crafted espresso drinks, single-origin beans, and a warm space<br />
                    to savour life one sip at a time.
                </motion.p>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                >
                    <Link href="/menu" className="btn btn-primary">Explore Our Menu</Link>
                    <Link href="/#about" className="btn btn-outline">Our Story</Link>
                </motion.div>

                <motion.div
                    className={styles.stats}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {[['15+', 'Coffee Origins'], ['4.9★', 'Avg Rating'], ['7am', 'Opens Daily']].map(([val, lbl]) => (
                        <div key={lbl} className={styles.stat}>
                            <strong>{val}</strong>
                            <span>{lbl}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className={styles.scrollHint}>
                <motion.span
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >↓</motion.span>
            </div>
        </section>
    );
}
