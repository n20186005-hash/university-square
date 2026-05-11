'use client';

import { useTranslations } from 'next-intl';

export default function Gallery() {
  const t = useTranslations('gallery');
  const captions = t.raw('captions') as string[];

  return (
    <section id="gallery-section" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-text-primary">
            {t('title')}
          </h2>
          <p className="text-lg text-text-secondary">{t('subtitle')}</p>
          <div className="w-12 h-0.5 mx-auto mt-4 bg-accent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {captions.map((caption, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden bg-bg-tertiary hover:opacity-90 transition-opacity cursor-pointer">
              <div className="w-full h-full flex items-center justify-center p-4">
                <span className="text-sm text-center text-text-secondary">{caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/TfLYWpuKv5kHGqsW9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors bg-accent text-white hover:bg-accent-hover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
