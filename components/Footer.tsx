import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

type FooterDict = {
  tagline: string;
  navigate: string;
  legal: string;
  home: string;
  apkArchive: string;
  disclaimer: string;
  safetyInfo: string;
  dmca: string;
  privacyPolicy: string;
  terms: string;
  notAffiliated: string;
  trademark: string;
  copyright: string;
  officialArchive: string;
};

interface FooterProps {
  lang: Locale;
  dict: FooterDict;
}

export default function Footer({ lang, dict }: FooterProps) {
  const navLinks = [
    { href: localePath("/", lang), label: dict.home },
    { href: localePath("/archive", lang), label: dict.apkArchive },
    { href: localePath("/faq", lang), label: "FAQ" },
    {
      href: localePath("/contact", lang),
      label: lang === "tr" ? "İletişim" : "Contact",
    },
  ];

  const legalLinks = [
    { href: localePath("/dmca", lang), label: dict.dmca },
    { href: localePath("/privacy-policy", lang), label: dict.privacyPolicy },
    { href: localePath("/terms", lang), label: dict.terms },
  ];

  return (
    <footer className="relative bg-black/60 border-t border-white/5 overflow-visible">
      {/* Brawler character */}
      <div
        className="hidden lg:block absolute right-16 bottom-0 w-80 pointer-events-none z-30 -translate-y-[20%]"
        aria-hidden="true"
      >
        <Image
          src="/footer-brawl.webp"
          alt=""
          width={400}
          height={400}
          className="w-full h-auto opacity-80"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.webp"
                alt="ReBrawl logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display text-2xl font-extrabold text-white">
                Re<span className="text-brand-yellow">Brawl</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              {dict.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider mb-4">
              {dict.navigate}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider mb-4">
              {dict.legal}
            </h3>
            <ul className="space-y-2.5 mb-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-text-muted text-xs leading-relaxed">
              {dict.notAffiliated}
              <br />
              {dict.trademark}
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} {dict.copyright}
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-success bg-success/10 border border-success/20 px-3 py-1.5 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            {dict.officialArchive}
          </span>
        </div>
      </div>
    </footer>
  );
}
