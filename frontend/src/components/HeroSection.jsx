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
    <section id="home" className="hero-clinic w-full overflow-x-hidden" dir="rtl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(${images.heroDentist})`,
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#1a3a52]/95 via-[#1a3a52]/85 to-[#1a3a52]/70 w-full" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-white pt-24 md:pt-20 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-5 py-2.5 mb-6 border border-white/20">
              <span className="w-2.5 h-2.5 bg-[#c8a882] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-white">عيادة حديثة ومتطورة</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              ابتسامتك الصحية<br />
              <span className="text-[#c8a882]">تبدأ من هنا</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white font-medium mb-4 max-w-lg drop-shadow-md">
              مرحباً بكم في <strong className="text-[#c8a882]">{clinicInfo.nameAr}</strong>
            </p>
            
            <p className="text-base sm:text-lg text-white/95 mb-8 max-w-lg leading-relaxed drop-shadow-md">
              نقدم أفضل خدمات طب الأسنان بأحدث التقنيات العالمية وفريق طبي متخصص
              لضمان حصولكم على ابتسامة صحية وجميلة
            </p>
            
            {/* Doctor Info */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 mb-8 max-w-md shadow-xl border border-white/50">
              <p className="text-sm text-[#1a3a52]/70 mb-1 font-medium">طبيبة الأسنان</p>
              <p className="text-xl font-bold text-[#1a3a52]">{clinicInfo.doctorAr}</p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToAppointment}
                className="flex items-center justify-center gap-3 bg-[#c8a882] hover:bg-[#b89872] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                احجز موعدك الآن
                <ArrowLeft className="w-4 h-4" style={{ transform: 'scaleX(-1)' }} />
              </button>
              
              <a 
                href={`tel:${clinicInfo.phone}`}
                className="flex items-center justify-center gap-3 bg-white/20 hover:bg-white border-2 border-white text-white hover:text-[#1a3a52] px-6 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all"
              >
                <Phone className="w-5 h-5" />
                {clinicInfo.phone}
              </a>
            </div>
          </div>
          
          {/* Right Side - Stats/Features */}
          <div className="hidden md:flex flex-col gap-5">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-xl border border-white/50">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">15+</div>
              <p className="text-[#1a3a52] text-lg font-semibold">سنوات من الخبرة</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-xl border border-white/50">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">9</div>
              <p className="text-[#1a3a52] text-lg font-semibold">خدمات متخصصة</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-xl border border-white/50">
              <div className="text-5xl font-bold text-[#c8a882] mb-2">100%</div>
              <p className="text-[#1a3a52] text-lg font-semibold">رضا المرضى</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
