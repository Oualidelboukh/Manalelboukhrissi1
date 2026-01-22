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
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8a882] to-white rounded-xl blur-sm opacity-50"></div>
                <div className="relative bg-white rounded-xl p-2 shadow-lg">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/uoghbt1k_IMG-20251116-WA0002.jpg"
                    alt="Cabinet Dentaire"
                    className="h-10 w-10 object-contain"
                  />
                </div>
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
                <a 
                  href="https://www.instagram.com/dr.manalel?igsh=ZjBiaXY3YTM5ZHg0&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  title="Instagram - Dr. Manal El Boukhrissi"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#1877f2] rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href={`https://wa.me/212${clinicInfo.phone.replace(/\s/g, '').substring(1)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#25d366] rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  title="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
