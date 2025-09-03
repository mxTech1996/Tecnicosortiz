'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const navigate = useRouter();

  return (
    <main>
      <Navbar isHome={false} withCart={true} withAll={false} />

      <Footer />
    </main>
  );
}
