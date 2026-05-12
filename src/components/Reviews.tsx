'use client';

import { useTranslations, useMessages } from 'next-intl';

const StarIcon = ({ fill, color }: { fill: string; color: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Reviews() {
  const t = useTranslations('reviews');
  const messages = useMessages() as any;
  const items = (messages?.reviews?.items || []) as Array<{name: string, date: string, rating: number, text: string}>;

  if (items.length === 0) return null;

  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('declaration')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((review, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ background: 'var(--accent)' }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{review.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{review.date}</div>
                </div>
              </div>
              <div className="flex mb-3 gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fill={i < review.rating ? "currentColor" : "none"} color={i < review.rating ? "#f59e0b" : "var(--border-color)"} />
                ))}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={t('moreReviewsUrl') || "https://maps.app.goo.gl/J7ZAtNfKtsWEitib6"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium transition-all hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {t('moreReviews')}
          </a>
        </div>
      </div>
    </section>
  );
}