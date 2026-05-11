'use client';

import { useTranslations } from 'next-intl';

export default function Recommendations() {
  const t = useTranslations('recommendations');
  const attractions = t.raw('attractions') as Array<{name: string; url: string}>;
  const tours = t.raw('tours') as Array<{name: string; url: string}>;

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-text-primary">
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 bg-accent" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-text-primary">
              {t('attractionsTitle')}
            </h3>
            <div className="space-y-3">
              {attractions?.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg transition-colors hover:opacity-80 bg-bg-tertiary border border-border"
                >
                  <span className="font-medium text-text-primary">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4 text-text-primary">
              {t('toursTitle')}
            </h3>
            <div className="space-y-3">
              {tours?.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg transition-colors hover:opacity-80 bg-bg-tertiary border border-border"
                >
                  <span className="font-medium text-text-primary">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
