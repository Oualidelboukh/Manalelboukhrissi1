import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Lock } from 'lucide-react';
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
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-white rounded-xl p-1.5 shadow-md border-2 border-[#c8a882]/30">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/uoghbt1k_IMG-20251116-WA0002.jpg"
                    alt="Cabinet Dentaire Dr El Boukhrissi Manal"
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base sm:text-lg font-bold text-[#1a3a52] leading-tight">{clinicInfo.nameAr}</h1>
                <p className="text-xs text-gray-600">{clinicInfo.doctorAr}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-5">
              <button onClick={() => scrollToSection('home')} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors font-semibold text-sm">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection('services')} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors font-semibold text-sm">
                الخدمات
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors font-semibold text-sm">
                عن العيادة
              </button>
              <button onClick={() => scrollToSection('appointment')} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors font-semibold text-sm">
                حجز موعد
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors font-semibold text-sm">
                اتصل بنا
              </button>
              
              {/* Admin Login Button */}
              <button 
                onClick={() => navigate('/admin/login')}
                data-testid="admin-login-btn"
                className="flex items-center gap-2 bg-[#1a3a52] hover:bg-[#2d5573] text-white px-4 py-2.5 rounded-full transition-all transform hover:scale-105 font-semibold text-sm shadow-lg"
              >
                <Lock className="w-4 h-4" />
                دخول المستخدم
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 bg-[#1a3a52] text-white rounded-xl shadow-md"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 bg-white rounded-b-2xl shadow-lg">
              <nav className="flex flex-col gap-1 px-2">
                <button onClick={() => scrollToSection('home')} className="text-right text-[#1a3a52] hover:bg-[#1a3a52]/10 transition-colors font-semibold py-3 px-4 rounded-xl">
                  الرئيسية
                </button>
                <button onClick={() => scrollToSection('services')} className="text-right text-[#1a3a52] hover:bg-[#1a3a52]/10 transition-colors font-semibold py-3 px-4 rounded-xl">
                  الخدمات
                </button>
                <button onClick={() => scrollToSection('about')} className="text-right text-[#1a3a52] hover:bg-[#1a3a52]/10 transition-colors font-semibold py-3 px-4 rounded-xl">
                  عن العيادة
                </button>
                <button onClick={() => scrollToSection('appointment')} className="text-right text-[#1a3a52] hover:bg-[#1a3a52]/10 transition-colors font-semibold py-3 px-4 rounded-xl">
                  حجز موعد
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-right text-[#1a3a52] hover:bg-[#1a3a52]/10 transition-colors font-semibold py-3 px-4 rounded-xl">
                  اتصل بنا
                </button>
                <a href={`tel:${clinicInfo.phone}`} className="flex items-center justify-center gap-2 text-[#1a3a52] py-3 px-4 bg-[#c8a882]/20 rounded-xl mt-2 font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>{clinicInfo.phone}</span>
                </a>
                {/* Admin Login Button - Mobile */}
                <button 
                  onClick={() => {
                    navigate('/admin/login');
                    setIsMobileMenuOpen(false);
                  }}
                  data-testid="admin-login-btn-mobile"
                  className="flex items-center justify-center gap-2 bg-[#1a3a52] hover:bg-[#2d5573] text-white px-4 py-3.5 rounded-xl transition-all font-semibold mt-2 shadow-md"
                >
                  <Lock className="w-4 h-4" />
                  دخول المستخدم
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
