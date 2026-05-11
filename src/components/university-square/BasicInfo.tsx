import { useTranslations } from 'next-intl';

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-text-primary">
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8 bg-accent" />

        <div className="space-y-4">
          {[
            { label: t('officialName'), value: t('officialNameValue') },
            { label: t('type'), value: t('typeValue') },
            { label: t('country'), value: t('countryValue') },
            { label: t('city'), value: t('cityValue') },
            { label: t('address'), value: t('addressValue') },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-border">
              <span className="text-sm font-medium min-w-[120px] text-text-muted">
                {item.label}
              </span>
              <span className="text-base text-text-primary">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
