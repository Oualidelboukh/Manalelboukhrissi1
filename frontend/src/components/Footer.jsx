import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { clinicInfo } from '../data/mockData';
import '../styles/dental-clinic.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a3a52] text-white pt-16 pb-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#c8a882] rounded-xl flex items-center justify-center text-white text-xl">
                <span>🦷</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">{clinicInfo.nameAr}</h3>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              عيادة طب أسنان حديثة في {clinicInfo.cityAr} تقدم أفضل خدمات طب الأسنان بأحدث التقنيات.
            </p>
            <p className="text-sm font-semibold text-[#c8a882]">{clinicInfo.doctorAr}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors text-sm">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-sm">
                  الخدمات
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-sm">
                  عن العيادة
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('appointment')} className="text-white/80 hover:text-white transition-colors text-sm">
                  حجز موعد
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-sm">
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">تقويم الأسنان</li>
              <li className="text-white/80">زراعة الأسنان</li>
              <li className="text-white/80">طب الأسنان التجميلي</li>
              <li className="text-white/80">تبييض الأسنان</li>
              <li className="text-white/80">طب الأسنان للأطفال</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">اتصل بنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#c8a882]" />
                <span className="text-sm text-white/80">{clinicInfo.addressAr}</span>
              </li>
              <li>
                <a href={`tel:${clinicInfo.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#c8a882]" />
                  <span className="text-sm">{clinicInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors break-all">
                  <Mail className="w-5 h-5 text-[#c8a882] flex-shrink-0" />
                  <span className="text-sm">{clinicInfo.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">تابعنا</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c8a882] rounded-lg flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c8a882] rounded-lg flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#c8a882] rounded-lg flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} {clinicInfo.nameAr}. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
