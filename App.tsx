import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import LaserEngraving from './components/LaserEngraving';
import Products from './components/Products';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Regions from './components/Regions';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import AIStudio from './components/AIStudio';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <LaserEngraving />
        <Products />
        <Gallery />
        <AIStudio />
        <WhyChooseUs />
        <Regions />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;