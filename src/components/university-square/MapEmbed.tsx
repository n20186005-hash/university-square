import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('mapSection');

  return (
    <section id="map" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4 text-text-primary">
          {t('title')}
        </h2>
        <p className="mb-8 text-text-secondary">{t('subtitle')}</p>

        <div className="rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.5!2d26.1000!3d44.4360!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzE2LjQJF!5e0!3m2!1sen!2sro!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="University Square Location"
          />
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
            {t('openMaps')}
          </a>
        </div>
      </div>
    </section>
  );
}
