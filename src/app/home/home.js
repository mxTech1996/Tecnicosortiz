'use client';
import Image from 'next/image';
import { find, map } from 'lodash';
import { useRouter } from 'next/navigation';
import Container from '../../components/atoms/Container';
import Navbar from '../../components/organisms/Navbar';
import Footer from '../../components/organisms/Footer';

import { productsData, references, additionalProducts } from '../../data';
import Button from '@/components/atoms/button';
import { References } from 'ui-old-version';
import WhyChooseUs from '@/components/organisms/whyus';
import AnimatedCategories from '@/components/organisms/About';
import MissionVisionSection from '@/components/organisms/Benefits';
import HeroSection from '@/components/organisms/Hero';
import ServicesSection from '@/components/organisms/Services';
import AboutUsSection from '@/components/organisms/Services';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <Footer />
    </main>
  );
}
