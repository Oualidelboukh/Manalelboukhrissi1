import React from 'react';
import { Smile, Activity, Plus, Star, Monitor, Heart, Users, Camera, Sparkles, Calendar, ArrowLeft } from 'lucide-react';
import { services } from '../data/mockData';
import '../styles/dental-clinic.css';

const iconMap = {
  Smile: Smile,
  Activity: Activity,
  Plus: Plus,
  Star: Star,
  Monitor: Monitor,
  Heart: Heart,
  Users: Users,
  Camera: Camera,
  Sparkles: Sparkles
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF9F2] w-full" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-5 py-2.5 mb-6 border border-[#1a3a52]/10">
            <span className="w-2.5 h-2.5 bg-[#c8a882] rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-[#1a3a52]">خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a3a52] mb-4">خدمات طب الأسنان الشاملة</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            نقدم مجموعة متكاملة من خدمات طب الأسنان بأعلى معايير الجودة العالمية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#c8a882]/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a3a52] to-[#2d5573] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1a3a52] mb-3 group-hover:text-[#c8a882] transition-colors">{service.titleAr}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                  {service.descriptionAr}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-xs sm:text-sm text-[#c8a882] font-semibold">{service.titleFr}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-[#1a3a52] to-[#2d5573] rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-white">هل تريد معرفة المزيد عن خدماتنا؟</h3>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            احجز استشارة مجانية الآن واحصل على فحص شامل
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#c8a882] hover:bg-[#b89872] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Calendar className="w-5 h-5" />
            احجز استشارة مجانية
            <ArrowLeft className="w-4 h-4" style={{ transform: 'scaleX(-1)' }} />
          </button>
        </div>
      </div>
    </section>
  );
};
