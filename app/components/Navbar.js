'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Menu', href: '/#menu' },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>☕</span>
                    <span>The <em>Daily Drip</em></span>
                </Link>

                <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
                    {navLinks.map(l => (
                        <Link key={l.label} href={l.href} className={styles.navLink} onClick={() => setOpen(false)}>
                            {l.label}
                        </Link>
                    ))}
                    <Link href="/menu" className={`btn btn-primary ${styles.ctaBtn}`} onClick={() => setOpen(false)}>
                        Full Menu
                    </Link>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {open ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </header>
    );
}
