import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "tr"]
const defaultLocale = "en"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if path starts with a locale prefix
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameLocale) {
    // If someone hits /en or /en/about, redirect to unprefixed (canonical is unprefixed for en)
    if (pathnameLocale === defaultLocale) {
      const newPath = pathname.replace(`/${defaultLocale}`, "") || "/"
      return NextResponse.redirect(new URL(newPath, request.url), 301)
    }
    // /tr/* — let it pass through, [lang] segment handles it
    return
  }

  // No locale in path — this is the default (English)
  // Rewrite internally to /en/* so [lang] segment resolves
  request.nextUrl.pathname = `/en${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
}
