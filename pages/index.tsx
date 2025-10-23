// pages/index.tsx
import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* 나머지 About, Experience, Project는 나중에 이어서 */}
    </>
  );
}
