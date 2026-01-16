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
    <section id="services" className="py-20 bg-[#FFF9F2]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-[#1a3a52]">خدماتنا</span>
          </div>
          <h2 className="heading-1 mb-4">الخدمات الطبية المتخصصة</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات طب الأسنان بأحدث التقنيات وأعلى معايير الجودة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="service-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="heading-3 mb-3">{service.titleAr}</h3>
                <p className="body-medium text-gray-600 mb-4">
                  {service.descriptionAr}
                </p>
                <div className="mt-auto pt-4">
                  <p className="text-sm text-gray-500 font-medium">{service.titleFr}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="body-large text-gray-700 mb-6">
            هل تريد معرفة المزيد عن خدماتنا؟
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-clinic-primary"
          >
            احجز استشارة مجانية
          </button>
        </div>
      </div>
    </section>
  );
};
