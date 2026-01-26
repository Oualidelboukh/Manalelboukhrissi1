import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowLeft } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import '../styles/dental-clinic.css';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FFF9F2] w-full" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/212${clinicInfo.phone.replace(/\s/g, '').substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-[#25d366] hover:bg-[#1ea952] text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ transform: 'scaleX(-1)' }} />
                </a>
                
                <a 
                  href="https://www.instagram.com/dr.manalel?igsh=ZjBiaXY3YTM5ZHg0&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  تابعنا على Instagram
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ transform: 'scaleX(-1)' }} />
                </a>
              </div>
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
