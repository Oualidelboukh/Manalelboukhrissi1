import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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
            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">العنوان</h4>
                <p className="text-gray-600">{clinicInfo.addressAr}</p>
                <p className="text-sm text-gray-500 mt-1">{clinicInfo.address}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">رقم الهاتف</h4>
                <a href={`tel:${clinicInfo.phone}`} className="text-[#1a3a52] font-semibold hover:text-[#c8a882] transition-colors">
                  {clinicInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h4>
                <a href={`mailto:${clinicInfo.email}`} className="text-[#1a3a52] hover:text-[#c8a882] transition-colors break-all">
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-info-item">
              <div className="contact-icon">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">ساعات العمل</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">الأحد - الخميس:</span>
                    <span className="text-[#1a3a52] font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الجمعة:</span>
                    <span className="text-[#1a3a52] font-semibold">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">السبت:</span>
                    <span className="text-[#1a3a52] font-semibold">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الأحد:</span>
                    <span className="text-red-500 font-semibold">مغلق</span>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5!2d-2.7376!3d34.9488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU2JzU1LjciTiAywrA0NCcxNS40Ilc!5e0!3m2!1sen!2sma!4v1234567890"
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
