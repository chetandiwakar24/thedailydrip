'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './MenuHighlights.module.css';

const items = [
    {
        category: 'Espresso',
        items: [
            { name: 'Signature Drip Latte', desc: 'Double shot, steamed oat milk, caramel drizzle', price: '₹280' },
            { name: 'Cold Brew Float', desc: '18-hr cold brew, vanilla ice cream, tonic', price: '₹320' },
            { name: 'Cortado Honey', desc: 'Equal parts espresso & milk, raw wildflower honey', price: '₹240' },
        ],
    },
    {
        category: 'Pastries',
        img: '/cafe_pastries.png',
        items: [
            { name: 'Almond Croissant', desc: 'Buttery, twice-baked with frangipane cream', price: '₹180' },
            { name: 'Dark Choco Tart', desc: '70% cacao ganache in a crisp sablé shell', price: '₹220' },
            { name: 'Cinnamon Knot', desc: 'Cardamom butter, pearl sugar, espresso glaze', price: '₹160' },
        ],
    },
    {
        category: 'Specials',
        items: [
            { name: 'Dalgona Matcha', desc: 'Whipped premium matcha, oat milk, vanilla', price: '₹300' },
            { name: 'Spiced Chai Latte', desc: 'House-blended masala chai, steamed whole milk', price: '₹220' },
            { name: 'Seasonal Soda', desc: "Ask our barista for today's seasonal creation", price: '₹200' },
        ],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function MenuHighlights() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="menu" className={`section ${styles.menu}`}>
            <div className="container">
                <motion.div
                    className="section-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <span className="label">What We Serve</span>
                    <h2>Menu <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Highlights</em></h2>
                    <div className="divider divider-center" />
                    <p>Crafted with intention. Every item on our menu is made from scratch, daily.</p>
                </motion.div>

                <div className={styles.grid}>
                    {items.map((cat, ci) => (
                        <motion.div
                            key={cat.category}
                            className={styles.col}
                            variants={container}
                            initial="hidden"
                            animate={inView ? 'show' : 'hidden'}
                        >
                            <div className={styles.colHeader}>
                                <span className={styles.colTag}>{cat.category}</span>
                            </div>
                            {cat.img && (
                                <div className={styles.catImg}>
                                    <img src={cat.img} alt={cat.category} />
                                </div>
                            )}
                            {cat.items.map(it => (
                                <motion.div key={it.name} className={`card ${styles.menuCard}`} variants={item}>
                                    <div className={styles.menuCardBody}>
                                        <div>
                                            <strong>{it.name}</strong>
                                            <span>{it.desc}</span>
                                        </div>
                                        <span className={styles.price}>{it.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
                    <Link href="/menu" className="btn btn-primary">View Full Menu →</Link>
                </div>
            </div>
        </section>
    );
}
