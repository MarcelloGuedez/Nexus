import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";
import BackToTopButton from "@/components/BackToTopButton";
import { Toaster } from "@/components/ui/toaster";


const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Benefits = lazy(() => import("@/components/Benefits"));
const Clients = lazy(() => import("@/components/Clients"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));

function App() {
  return (
    <>
      <Helmet>
        <title>NEXUS - Agência de Design & Marketing</title>
        <meta name="description" content="Agência de design e marketing digital especializada em criar soluções criativas que impulsionam seu negócio. Serviços de social media, vídeos, branding e muito mais." />
      </Helmet>
      
      <div className="relative min-h-screen bg-black text-white">
        <div className="site-background"></div>
        <div className="site-noise"></div>
        <ProceduralGroundBackground />
        
        <Header />
        
        <main className="relative z-10">
          <Hero />
          <Suspense fallback={<div className="text-center py-20">Carregando...</div>}>
            <About />
            <Services />
            <Benefits />
            <Clients />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
        <BackToTopButton />
        <Toaster />
      </div>
    </>
  );
}

export default App;