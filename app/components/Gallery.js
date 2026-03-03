'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Gallery.module.css';

const photos = [
    { src: '/cafe_hero.png', alt: 'Cafe Interior', span: 'wide' },
    { src: '/barista_pour.png', alt: 'Barista Craft', span: 'tall' },
    { src: '/coffee_menu.png', alt: 'Coffee Selection', span: 'normal' },
    { src: '/cafe_pastries.png', alt: 'Pastries', span: 'normal' },
];

export default function Gallery() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="gallery" className={`section ${styles.gallery}`}>
            <div className="container">
                <motion.div
                    className="section-heading"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="label">The Experience</span>
                    <h2>A Glimpse <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Inside</em></h2>
                    <div className="divider divider-center" />
                    <p>Step into The Daily Drip — where every corner is a moment worth capturing.</p>
                </motion.div>

                <div className={styles.grid}>
                    {photos.map((photo, i) => (
                        <motion.div
                            key={photo.src}
                            className={`${styles.cell} ${styles[photo.span]}`}
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <img src={photo.src} alt={photo.alt} />
                            <div className={styles.overlay}>
                                <span>{photo.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
