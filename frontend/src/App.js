import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { AppointmentSection } from "./components/AppointmentSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import "./styles/dental-clinic.css";

function App() {
  return (
    <div className="App font-arabic" dir="rtl">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <AppointmentSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
