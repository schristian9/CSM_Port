import Link from "next/link";

export default function SiteFooter({ backToPortfolio = false }) {
  return (
    <footer className="w-full bg-white text-slate-500 py-12 px-4 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-sans tracking-tight font-black uppercase leading-none text-slate-900">
            SARLINSON CHRISTIAN
          </h2>
          <p className="text-xs font-sans tracking-widest text-blue-600 mt-1.5 uppercase">
            Technical Success Manager & Onboarding Specialist
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 text-xs font-sans text-slate-400">
          {backToPortfolio && (
            <Link href="/" className="hover:text-blue-600 underline uppercase">
              ← Back to Portfolio
            </Link>
          )}
          <span>© {new Date().getFullYear()} SARLINSON CHRISTIAN</span>
        </div>
      </div>
    </footer>
  );
}