import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];

  return (
    <section className="section-padding">
      <div className="container-max">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-text-primary">
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 bg-accent" />

        <p className="text-lg leading-relaxed mb-12 text-text-secondary text-balance">
          {t('description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl p-6 sm:p-8 bg-bg-tertiary">
            <h3 className="font-display text-xl font-semibold mb-4 text-text-primary">
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-6 sm:p-8 bg-bg-tertiary">
            <h3 className="font-display text-xl font-semibold mb-4 text-text-primary">
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-text-secondary">{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
