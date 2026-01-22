import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowLeft } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import '../styles/dental-clinic.css';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF9F2]" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 text-[#1a3a52]" />
            <span className="text-sm font-medium text-[#1a3a52]">موقعنا</span>
          </div>
          <h2 className="heading-1 mb-4">زرنا أو اتصل بنا</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            نحن هنا لخدمتك ونسعد بالرد على جميع استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#c8a882]/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a52] to-[#2d5573] rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">العنوان</h4>
                    <p className="text-gray-700 leading-relaxed mb-2 font-medium">{clinicInfo.addressAr}</p>
                    <p className="text-sm text-gray-500 italic mb-3">{clinicInfo.address}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.addressAr)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1a3a52] hover:text-[#c8a882] font-semibold text-sm transition-colors group"
                    >
                      <span>افتح في خرائط Google</span>
                      <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ transform: 'scaleX(-1)' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#c8a882]/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">رقم الهاتف</h4>
                    <a 
                      href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} 
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 px-6 py-3 rounded-xl transition-all group/phone"
                    >
                      <span className="text-2xl font-bold text-green-700 tracking-wider">{clinicInfo.phone}</span>
                      <span className="text-sm text-green-600 opacity-0 group-hover/phone:opacity-100 transition-opacity">اضغط للاتصال</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#c8a882]/30">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">البريد الإلكتروني</h4>
                    <a 
                      href={`mailto:${clinicInfo.email}`} 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 px-5 py-3 rounded-xl transition-all group/email break-all"
                    >
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-blue-700 font-semibold">{clinicInfo.email}</span>
                    </a>
                    <p className="text-sm text-gray-500 mt-2">نجيب على استفساراتكم خلال 24 ساعة</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-info-item">
              <div className="contact-icon bg-gradient-to-br from-[#1a3a52] to-[#2d5573]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">ساعات العمل</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-gradient-to-r from-green-50 to-transparent p-3 rounded-lg border-r-2 border-green-400">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-gray-800">الاثنين - الجمعة</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">مفتوح</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-gray-600">صباحاً:</span>
                        <span className="text-[#1a3a52] font-bold font-mono">08:30 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">مساءً:</span>
                        <span className="text-[#1a3a52] font-bold font-mono">14:30 - 18:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-3 rounded-lg border-r-2 border-blue-400">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">السبت</span>
                      <span className="text-[#1a3a52] font-bold font-mono">09:00 - 14:00</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-transparent p-3 rounded-lg border-r-2 border-red-400">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">الأحد</span>
                      <span className="text-red-600 font-bold">مغلق</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2d5573] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">هل لديك سؤال؟</h3>
              <p className="text-white/80 mb-4">لا تتردد في الاتصال بنا</p>
              <a 
                href={`https://wa.me/212${clinicInfo.phone.replace(/\s/g, '').substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clinic-gold w-full justify-center"
              >
                <Send className="w-5 h-5" />
                ارسل رسالة عبر WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px]">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3279.1!2d-2.734201!3d34.944358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDU2JzM5LjciTiAywrA0NCcwMy4xIlc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع العيادة"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8">
          <h3 className="heading-2 mb-4">جاهز للحصول على ابتسامة أحلامك؟</h3>
          <p className="body-large text-gray-600 mb-6 max-w-2xl mx-auto">
            احجز موعدك اليوم وابدأ رحلتك نحو ابتسامة صحية وجميلة
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('appointment');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-clinic-primary"
          >
            احجز موعدك الآن
          </button>
        </div>
      </div>
    </section>
  );
};
