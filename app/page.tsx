import Navbar from '@/components/navbar/navbar';
import AetherHero from '@/components/main/hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <AetherHero
        title="Create stunning YouTube thumbnails with AI"
        subtitle="Nailart AI transforms your ideas into eye-catching thumbnails in seconds. No design skills required."
        ctaLabel="Get Started"
        ctaHref="#get-started"
      />
    </>
  );
}
