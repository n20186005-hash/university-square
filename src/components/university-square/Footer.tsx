import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 px-4 bg-bg-secondary border-t border-border">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-semibold mb-4 text-text-primary">
              University Square
            </h3>
            <p className="text-sm mb-4 text-text-secondary">
              {t('disclaimer')}
            </p>
            <div>
              <h4 className="font-medium text-sm mb-2 text-text-primary">
                {t('officialResourcesTitle')}
              </h4>
              <div className="flex flex-wrap gap-4">
                {Object.entries(t.raw('officialLinks') as Record<string, string>).map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-accent hover:text-accent-hover"
                  >
                    {t(`officialLinks.${key}`)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3 text-text-primary">Navigation</h4>
            <div className="space-y-2">
              <a href="#gallery-section" className="block text-sm text-text-secondary hover:text-accent">{t('gallery') || 'Gallery'}</a>
              <a href="#reviews" className="block text-sm text-text-secondary hover:text-accent">{t('reviews') || 'Reviews'}</a>
              <a href="#map" className="block text-sm text-text-secondary hover:text-accent">{t('map') || 'Map'}</a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3 text-text-primary">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-text-secondary hover:text-accent">{t('privacy')}</a>
              <a href="#" className="block text-sm text-text-secondary hover:text-accent">{t('terms')}</a>
              <a href="#" className="block text-sm text-text-secondary hover:text-accent">{t('cookies')}</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-center text-text-muted">
            {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
