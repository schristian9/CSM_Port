import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Sarlinson Christian | Customer Success Leader & Business Strategist",
  description: "Executive Customer Success portfolio demonstrating retention playbooks, growth strategies, and customer lifetime value metrics.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sarlinson Christian",
    "jobTitle": "Customer Success Manager & Strategist",
    "description": "Driving business growth and net retention through customer outcomes, lifecycle playbooks, and strategic account management.",
    "url": "https://sarlinson.com",
    "sameAs": [
      "https://github.com/sarlinson",
      "https://linkedin.com/in/sarlinson"
    ]
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased scroll-smooth scroll-pt-32`}
    >
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--color-accent)] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
