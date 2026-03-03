'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './menu.module.css';

const menuData = {
    Espresso: [
        { name: 'Espresso', desc: 'Double shot of our house blend', price: '₹180' },
        { name: 'Americano', desc: 'Espresso + hot water, long and smooth', price: '₹200' },
        { name: 'Cappuccino', desc: 'Equal thirds espresso, steamed milk, foam', price: '₹240' },
        { name: 'Flat White', desc: 'Double ristretto, velvety microfoam', price: '₹260' },
        { name: 'Cortado Honey', desc: 'Equal espresso & milk, wildflower honey', price: '₹240' },
        { name: 'Signature Latte', desc: 'Double shot, oat milk, caramel drizzle', price: '₹280' },
    ],
    'Cold Drinks': [
        { name: 'Cold Brew', desc: '18hr steeped, smooth and low acidity', price: '₹260' },
        { name: 'Cold Brew Float', desc: 'Cold brew + vanilla ice cream', price: '₹320' },
        { name: 'Iced Latte', desc: 'Espresso, milk, ice — refreshingly simple', price: '₹260' },
        { name: 'Iced Matcha Latte', desc: 'Ceremonial matcha, oat milk, vanilla, ice', price: '₹300' },
        { name: 'Dalgona Matcha', desc: 'Whipped matcha foam, oat milk base', price: '₹300' },
        { name: 'Seasonal Soda', desc: 'Ask our barista for today\'s creation', price: '₹200' },
    ],
    'Food & Pastries': [
        { name: 'Almond Croissant', desc: 'Buttery, twice-baked with frangipane cream', price: '₹180' },
        { name: 'Dark Choco Tart', desc: '70% cacao ganache, crisp sablé shell', price: '₹220' },
        { name: 'Cinnamon Knot', desc: 'Cardamom butter, pearl sugar, espresso glaze', price: '₹160' },
        { name: 'Blueberry Muffin', desc: 'Bursting with fresh blueberries, lemon zest top', price: '₹150' },
        { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, chilli flakes, lemon', price: '₹280' },
        { name: 'Overnight Oats', desc: 'Vanilla oats, seasonal fruits, granola, honey', price: '₹240' },
    ],
    'Specials': [
        { name: 'Spiced Chai Latte', desc: 'House-blended masala chai, steamed whole milk', price: '₹220' },
        { name: 'Golden Turmeric', desc: 'Turmeric, ginger, oat milk, black pepper', price: '₹240' },
        { name: 'Rose Cardamom Latte', 'desc': 'Espresso, rose water, cardamom, oat milk', price: '₹280' },
        { name: 'Butter Coffee', desc: 'Bulletproof style — black coffee, MCT butter', price: '₹300' },
    ],
};

const categories = Object.keys(menuData);

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function MenuPage() {
    const [active, setActive] = useState(categories[0]);

    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className={styles.heroBg}>
                        <img src="/coffee_menu.png" alt="Our menu" />
                        <div className={styles.heroOverlay} />
                    </div>
                    <div className={`container ${styles.heroContent}`}>
                        <motion.span
                            className={styles.heroLabel}
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        >
                            ✦ Handcrafted with Care
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            Our <em className="text-primary">Menu</em>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Every item crafted from scratch, daily. Using only the finest ingredients.
                        </motion.p>
                    </div>
                </section>

                {/* Menu Content */}
                <section className={`section ${styles.menuSection}`}>
                    <div className="container">
                        {/* Category Tabs */}
                        <div className={styles.tabs}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
                                    onClick={() => setActive(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Items Grid */}
                        <motion.div
                            key={active}
                            className={styles.grid}
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {menuData[active].map(mi => (
                                <motion.div key={mi.name} className={`card ${styles.menuCard}`} variants={item}>
                                    <div className={styles.cardInner}>
                                        <div>
                                            <strong>{mi.name}</strong>
                                            <span>{mi.desc}</span>
                                        </div>
                                        <span className={styles.price}>{mi.price}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
