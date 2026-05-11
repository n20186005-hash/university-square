import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/university-square/Header';
import Hero from '@/components/university-square/Hero';
import Intro from '@/components/university-square/Intro';
import BasicInfo from '@/components/university-square/BasicInfo';
import HoursSection from '@/components/university-square/HoursSection';
import TicketsSection from '@/components/university-square/TicketsSection';
import TransportSection from '@/components/university-square/TransportSection';
import InfoSection from '@/components/university-square/InfoSection';
import RouteSection from '@/components/university-square/RouteSection';
import PhotoSpotsSection from '@/components/university-square/PhotoSpotsSection';
import HotelsSection from '@/components/university-square/HotelsSection';
import Gallery from '@/components/university-square/Gallery';
import Reviews from '@/components/university-square/Reviews';
import MapEmbed from '@/components/university-square/MapEmbed';
import Recommendations from '@/components/university-square/Recommendations';
import Footer from '@/components/university-square/Footer';

export async function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' },
  ];
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <MapEmbed />
        <Recommendations />
      </main>
      <Footer />
    </>
  );
}
