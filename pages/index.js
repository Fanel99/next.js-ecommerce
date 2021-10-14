import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Galery from '../components/Galery';
import Hero from '../components/Hero';
import Whyus from '../components/Whyus';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grandpa´s Flowers Shop</title>
        <meta name="keywords" content="flowers shop" />
      </Head>
      <Hero />
      <About />
      <Whyus />
      <Galery />
      <Contact />
        
    </div>
  );
}
