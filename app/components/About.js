'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.css';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className={`container ${styles.grid}`}>
                {/* Image column */}
                <motion.div
                    ref={ref}
                    className={styles.imgWrap}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/barista_pour.png" alt="Barista craft" className={styles.mainImg} />
                    <div className={styles.badge}>
                        <span className="serif">Since</span>
                        <strong>2019</strong>
                    </div>
                </motion.div>

                {/* Text column */}
                <motion.div
                    className={styles.text}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <span className="text-primary" style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Our Story
                    </span>
                    <div className="divider" style={{ margin: '0.75rem 0 1.5rem' }} />
                    <h2>More Than Coffee — <em>It's a Ritual</em></h2>
                    <p style={{ marginTop: '1.5rem' }}>
                        The Daily Drip was born from a simple obsession: what if every cup of coffee you drank was the best cup of your day? We source single-origin beans from small farms across Ethiopia, Colombia, and Guatemala, building relationships that go beyond a transaction.
                    </p>
                    <p style={{ marginTop: '1rem' }}>
                        Our baristas are trained to the precision of artisans — dialling in every extraction, steaming milk to a perfect 65°C, and crafting drinks that are as beautiful to look at as they are to drink.
                    </p>

                    <div className={styles.pillars}>
                        {[
                            { icon: '🌱', title: 'Sustainable', desc: 'Direct-trade, ethically sourced beans' },
                            { icon: '🔥', title: 'Freshly Roasted', desc: 'Roasted in small batches every week' },
                            { icon: '🏆', title: 'Award Winning', desc: 'Best Cafe – City Guide 2023 & 2024' },
                        ].map(p => (
                            <div key={p.title} className={styles.pillar}>
                                <span className={styles.pillarIcon}>{p.icon}</span>
                                <div>
                                    <strong>{p.title}</strong>
                                    <span>{p.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
