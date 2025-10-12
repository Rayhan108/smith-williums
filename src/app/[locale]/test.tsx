'use client';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-gray-600">{t('subtitle')}</p>
    </main>
  );
}
