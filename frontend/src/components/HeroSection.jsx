import React from 'react';
import { Calendar, Phone, ArrowLeft } from 'lucide-react';
import { clinicInfo, images } from '../data/mockData';
import '../styles/dental-clinic.css';

export const HeroSection = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-clinic" dir="rtl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.heroDentist})`,
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-white pt-20 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#c8a882] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">عيادة حديثة ومتطورة</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="heading-hero text-white mb-6 leading-tight">
              ابتسامتك الصحية<br />
              <span className="text-[#c8a882]">تبدأ من هنا</span>
            </h1>
            
            <p className="body-large text-white/90 mb-4 max-w-lg">
              مرحباً بكم في <strong>{clinicInfo.nameAr}</strong>
            </p>
            
            <p className="body-medium text-white/80 mb-8 max-w-lg leading-relaxed">
              نقدم أفضل خدمات طب الأسنان بأحدث التقنيات العالمية وفريق طبي متخصص
              لضمان حصولكم على ابتسامة صحية وجميلة
            </p>
            
            {/* Doctor Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-8 max-w-md">
              <p className="text-sm text-white/70 mb-1">طبيبة الأسنان</p>
              <p className="text-xl font-bold text-white">{clinicInfo.doctorAr}</p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToAppointment}
                className="btn-clinic-gold group"
              >
                <Calendar className="w-5 h-5" />
                احجز موعدك الآن
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ transform: 'scaleX(-1)' }} />
              </button>
              
              <a 
                href={`tel:${clinicInfo.phone}`}
                className="btn-clinic-secondary bg-white/20 border-white text-white hover:bg-white hover:text-[#1a3a52]"
              >
                <Phone className="w-5 h-5" />
                {clinicInfo.phone}
              </a>
            </div>
          </div>
          
          {/* Right Side - Stats/Features */}
          <div className="hidden md:flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">15+</div>
              <p className="text-white text-lg">سنوات من الخبرة</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">9</div>
              <p className="text-white text-lg">خدمات متخصصة</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">100%</div>
              <p className="text-white text-lg">رضا المرضى</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
