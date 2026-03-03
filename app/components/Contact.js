'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';
import styles from './Contact.module.css';

const hours = [
    { day: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 8:00 PM' },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            });
            setSent(true);
        } catch {
            setSent(true);
        }
        setLoading(false);
    };

    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <motion.div
                    className="section-heading"
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="label">Find Us</span>
                    <h2>Come <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Say Hello</em></h2>
                    <div className="divider divider-center" />
                    <p>We'd love to see you in person. Or drop us a message!</p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className={styles.infoCard}>
                            <FiMapPin className={styles.icon} />
                            <div>
                                <strong>Address</strong>
                                <span>42, Brew Street, Koramangala<br />Bangalore – 560034</span>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <FiPhone className={styles.icon} />
                            <div>
                                <strong>Phone</strong>
                                <span>+91 98765 43210</span>
                            </div>
                        </div>
                        <div className={styles.infoCard}>
                            <FiMail className={styles.icon} />
                            <div>
                                <strong>Email</strong>
                                <span>hello@thedailydrip.in</span>
                            </div>
                        </div>
                        <div className={styles.hours}>
                            <div className={styles.hoursHeader}>
                                <FiClock className={styles.icon} />
                                <strong>Opening Hours</strong>
                            </div>
                            {hours.map(h => (
                                <div key={h.day} className={styles.hourRow}>
                                    <span>{h.day}</span>
                                    <span>{h.time}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {sent ? (
                            <div className={styles.successMsg}>
                                <span>☕</span>
                                <h3>Thank you!</h3>
                                <p>We'll get back to you shortly. Come grab a coffee in the meantime!</p>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <h3>Send a Message</h3>
                                <div className={styles.field}>
                                    <label htmlFor="name">Your Name</label>
                                    <input id="name" type="text" placeholder="Jane Doe" required
                                        value={formState.name}
                                        onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" type="email" placeholder="jane@example.com" required
                                        value={formState.email}
                                        onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={4} placeholder="Tell us anything…" required
                                        value={formState.message}
                                        onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Sending…' : 'Send Message ✉'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
