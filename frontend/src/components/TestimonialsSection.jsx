import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import '../styles/dental-clinic.css';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-[#c8a882]" />
            <span className="text-sm font-medium text-[#1a3a52]">آراء المرضى</span>
          </div>
          <h2 className="heading-1 mb-4">ماذا يقول مرضانا</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            نفتخر بثقة مرضانا ورضاهم عن خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c8a882] text-[#c8a882]" />
                ))}
              </div>

              {/* Comment */}
              <p className="body-medium text-gray-700 mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Service */}
              <div className="inline-block bg-[#1a3a52]/5 rounded-full px-3 py-1 mb-4">
                <span className="text-xs text-[#1a3a52] font-medium">{testimonial.service}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a3a52] to-[#2d5573] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">مريض</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a3a52] mb-2">1000+</div>
            <p className="text-gray-600">مريض سعيد</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a3a52] mb-2">15+</div>
            <p className="text-gray-600">سنة خبرة</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a3a52] mb-2">9</div>
            <p className="text-gray-600">خدمات متخصصة</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1a3a52] mb-2">100%</div>
            <p className="text-gray-600">رضا العملاء</p>
          </div>
        </div>
      </div>
    </section>
  );
};
