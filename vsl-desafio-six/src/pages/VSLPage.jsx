import { useUTM } from '../hooks/useUtm';
import Headline from '../components/Headline';
import VideoPlayer from '../components/VideoPlayer';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function VSLPage() {

  useUTM();

 
  return (
    <main className="min-h-screen bg-white">
      <Headline />
      <VideoPlayer />
      <ProductSection />
      <Testimonials />
      <Footer />
    </main>
  );
}
