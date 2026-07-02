import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const flora = localFont({
  src: "../public/fonts/Flora.otf",
  variable: "--font-flora",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${flora.variable} ${cormorant.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F5F1E8] text-[#2B4365] font-sans selection:bg-[#2B4365] selection:text-[#F5F1E8]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
