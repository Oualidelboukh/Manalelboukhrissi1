import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import '../styles/dental-clinic.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`clinic-header ${isScrolled ? 'clinic-header-scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a52] to-[#2d5573] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              <span>🦷</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#1a3a52]">{clinicInfo.nameAr}</h1>
              <p className="text-xs text-gray-600">{clinicInfo.doctorAr}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#1a3a52] transition-colors font-medium">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1a3a52] transition-colors font-medium">
              الخدمات
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#1a3a52] transition-colors font-medium">
              عن العيادة
            </button>
            <button onClick={() => scrollToSection('appointment')} className="text-gray-700 hover:text-[#1a3a52] transition-colors font-medium">
              حجز موعد
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#1a3a52] transition-colors font-medium">
              اتصل بنا
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-2 text-[#1a3a52] hover:text-[#c8a882] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{clinicInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#1a3a52] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-right text-gray-700 hover:text-[#1a3a52] transition-colors font-medium py-2">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection('services')} className="text-right text-gray-700 hover:text-[#1a3a52] transition-colors font-medium py-2">
                الخدمات
              </button>
              <button onClick={() => scrollToSection('about')} className="text-right text-gray-700 hover:text-[#1a3a52] transition-colors font-medium py-2">
                عن العيادة
              </button>
              <button onClick={() => scrollToSection('appointment')} className="text-right text-gray-700 hover:text-[#1a3a52] transition-colors font-medium py-2">
                حجز موعد
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-right text-gray-700 hover:text-[#1a3a52] transition-colors font-medium py-2">
                اتصل بنا
              </button>
              <a href={`tel:${clinicInfo.phone}`} className="flex items-center justify-end gap-2 text-[#1a3a52] py-2">
                <span className="text-sm font-medium">{clinicInfo.phone}</span>
                <Phone className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
