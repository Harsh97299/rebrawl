import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildBreadcrumbJsonLd, getAlternates } from "@/lib/seo";
import { isValidLocale, localePath, type Locale } from "@/lib/i18n";
import { getDictionary } from "../dictionaries";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    alternates: getAlternates("/privacy-policy", lang),
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const t = dict.privacyPolicyPage;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd(
              [
                {
                  name: dict.common.home,
                  url: localePath("/", lang as Locale),
                },
                {
                  name: dict.footer.privacyPolicy,
                  url: localePath("/privacy-policy", lang as Locale),
                },
              ],
              lang as Locale,
            ),
          ),
        }}
      />

      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: "url('/background/about-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
        <div
          className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-bg-base to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.2) 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center gap-2 text-sm text-text-muted mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href={localePath("/", lang as Locale)}
              className="hover:text-white transition-colors"
            >
              {dict.common.home}
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-white" aria-current="page">
              {dict.footer.privacyPolicy}
            </span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4">
              {t.overviewHeading}{" "}
              <span className="text-brand-yellow">
                {t.overviewHeadingHighlight}
              </span>
            </h1>
            <p className="text-text-muted text-xl leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-bg-base overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10">
            <div className="rounded-3xl bg-bg-elevated p-8 border border-white/5 shadow-lg shadow-black/5">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
                {t.overviewHeading}{" "}
                <span className="text-brand-purple">
                  {t.overviewHeadingHighlight}
                </span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                {t.overviewText}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-bg-elevated p-8 border border-white/5 shadow-lg shadow-black/5">
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {t.collectionHeading}
                </h3>
                <ul className="space-y-3 text-text-muted text-base leading-relaxed list-disc list-inside">
                  {t.collectionItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-bg-elevated p-8 border border-white/5 shadow-lg shadow-black/5">
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {t.useHeading}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  {t.useText}
                </p>
                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  {t.rightsHeading}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {t.rightsText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
