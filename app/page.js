import React from 'react';
import Hero from './Component/Hero';
import Footer from './Component/Footer';
import Features from './Component/Features';
import Collections from './Component/Collections';
import ProductsPage from './all-products/page';
import CTA from './Component/Collections';

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductsPage/>
      <Features/>
      <CTA/>
      
    </div>
  );
};

export default Home;