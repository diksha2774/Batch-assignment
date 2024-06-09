"use client"
import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Feature1 from '@/components/Feature1';
import Featuere3 from '@/components/Featuere3';  // Corrected import
import Feature2 from '@/components/Feature2';
import Feature4 from '@/components/Feature4';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Feature5 from '@/components/Feature5';

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page created with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main>
        <section className="hero">
          <Hero darkMode={darkMode} />
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Feature1 darkMode={darkMode} />
          </div>
        </section>
        <section className="advantages py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Featuere3 darkMode={darkMode} />
          </div>
        </section>
        <section className="customizable py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Feature2 darkMode={darkMode} />
          </div>
        </section>
        <section className="testimonials py-16">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            <Feature4 darkMode={darkMode} />
          </div>
        </section>
        <section className="faq py-16">
          <div className="container mx-auto px-4">
            <FAQ darkMode={darkMode} />
          </div>
        </section>
        <section className="image">
          <Feature5 darkMode={darkMode} />
        </section>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;
