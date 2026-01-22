import React from 'react';
import { Smile, Activity, Plus, Star, Monitor, Heart, Users, Camera, Sparkles } from 'lucide-react';
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
    <section id="services" className="py-24 bg-gradient-to-br from-[#FFF9F2] via-white to-[#FFF9F2]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-5 py-2 mb-6">
            <span className="w-2 h-2 bg-[#c8a882] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-[#1a3a52] tracking-wide">خدماتنا المتخصصة</span>
          </div>
          <h2 className="heading-1 mb-6">خدمات طب الأسنان الشاملة</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من خدمات طب الأسنان بأعلى معايير الجودة العالمية، باستخدام أحدث التقنيات والمعدات الطبية المتطورة لضمان راحتك وسلامتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="service-card fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon group-hover:shadow-lg">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="heading-3 mb-3 group-hover:text-[#c8a882] transition-colors">{service.titleAr}</h3>
                <p className="body-medium text-gray-600 mb-4 leading-relaxed">
                  {service.descriptionAr}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="text-sm text-[#1a3a52] font-semibold tracking-wide">{service.titleFr}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#1a3a52] to-[#2d5573] rounded-3xl p-12 shadow-2xl">
          <h3 className="heading-2 mb-4 text-white">هل تريد معرفة المزيد عن خدماتنا؟</h3>
          <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
            احجز استشارة مجانية الآن واحصل على فحص شامل وخطة علاج مخصصة تناسب احتياجاتك
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#c8a882] hover:bg-[#a98d6b] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <Calendar className="w-6 h-6" />
            احجز استشارة مجانية
            <ArrowLeft className="w-5 h-5" style={{ transform: 'scaleX(-1)' }} />
          </button>
        </div>
      </div>
    </section>
  );
};
