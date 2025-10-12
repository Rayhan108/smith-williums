import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ar'],  // Supported languages
  defaultLocale: 'en'     // Default fallback
});

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
