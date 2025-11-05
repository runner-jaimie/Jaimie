// pages/index.tsx
import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </>
  );
}
