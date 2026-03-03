import './globals.css';

export const metadata = {
  title: 'The Daily Drip — Specialty Coffee & Cafe',
  description: 'The Daily Drip is your neighbourhood specialty coffee cafe. Handcrafted espresso drinks, artisan pastries, and a warm cozy space to enjoy every sip.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
