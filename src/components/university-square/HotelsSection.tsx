'use client';

import { useTranslations } from 'next-intl';

export default function HotelsSection() {
  const t = useTranslations('hotels');
  const hotels = t.raw('hotels') as Array<{name: string; desc: string; price: string}>;

  return (
    <section className="section-padding">
      <div className="container-max">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-text-primary">
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 bg-accent" />

        <div className="space-y-4">
          {hotels.map((hotel, i) => (
            <div key={i} className="p-5 rounded-xl bg-bg-tertiary">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-medium mb-1 text-text-primary">{hotel.name}</h4>
                  <p className="text-sm mb-2 text-text-secondary">{hotel.desc}</p>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent text-white">
                  {hotel.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg border bg-bg-tertiary border-border">
          <h4 className="font-medium mb-2 text-text-primary">{t('supplements')}</h4>
          <p className="text-sm text-text-secondary">{t('supplementsContent')}</p>
        </div>
      </div>
    </section>
  );
}
