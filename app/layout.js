import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const flora = localFont({
  src: "../public/fonts/Flora.otf",
  variable: "--font-flora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

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
      className={`${flora.variable} ${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FFF6E7] text-[#8C2F39] font-sans selection:bg-[#8C2F39] selection:text-[#FFF6E7]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
