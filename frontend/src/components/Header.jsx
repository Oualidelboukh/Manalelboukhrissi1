import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Lock } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import '../styles/dental-clinic.css';

export const Header = () => {
  const navigate = useNavigate();
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
    <>
      <header className={`clinic-header ${isScrolled ? 'clinic-header-scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a882] to-[#1a3a52] rounded-xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl p-2 shadow-md border-2 border-[#c8a882]/20 group-hover:border-[#c8a882] transition-all duration-300">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/uoghbt1k_IMG-20251116-WA0002.jpg"
                    alt="Cabinet Dentaire Dr El Boukhrissi Manal"
                    className="h-12 w-12 object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[#1a3a52] leading-tight">{clinicInfo.nameAr}</h1>
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
              
              {/* Admin Login Button */}
              <button 
                onClick={() => navigate('/admin/login')}
                className="flex items-center gap-2 bg-[#1a3a52] hover:bg-[#2d5573] text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <Lock className="w-4 h-4" />
                دخول المستخدم
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

      {/* Floating Admin Button */}
      <button
        onClick={() => navigate('/admin/login')}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-[#1a3a52] to-[#2d5573] hover:from-[#2d5573] hover:to-[#1a3a52] text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="دخول الإدارة"
      >
        <Lock className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-2 -right-2 bg-[#c8a882] text-white text-xs px-2 py-0.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Admin
        </span>
      </button>
    </>
  );
};
