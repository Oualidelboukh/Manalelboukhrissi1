import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import { clinicInfo, images } from '../data/mockData';
import '../styles/dental-clinic.css';

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'خبرة واحترافية',
      description: 'فريق طبي متخصص بخبرة سنوات في جميع مجالات طب الأسنان'
    },
    {
      icon: Users,
      title: 'رعاية شخصية',
      description: 'نهتم بكل مريض بشكل فردي ونقدم خطة علاجية مخصصة'
    },
    {
      icon: Clock,
      title: 'مواعيد مرنة',
      description: 'نوفر مواعيد مريحة تناسب جدولك اليومي'
    },
    {
      icon: Shield,
      title: 'معايير عالية',
      description: 'نلتزم بأعلى معايير النظافة والتعقيم الصحي'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white w-full" dir="rtl">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={images.dentalOffice}
                alt="عيادة طب الأسنان"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/60 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#c8a882] rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                  15+
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1a3a52]">1000+</p>
                  <p className="text-sm text-gray-600">مريض راضٍ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-[#1a3a52]">عن العيادة</span>
            </div>
            
            <h2 className="heading-1 mb-6">
              مرحباً بكم في<br />
              <span className="text-[#c8a882]">{clinicInfo.nameAr}</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="body-large text-gray-700">
                نحن عيادة طب أسنان حديثة تقع في قلب {clinicInfo.cityAr}، نسعى لتقديم أفضل 
                خدمات طب الأسنان لكل أفراد العائلة.
              </p>
              
              <p className="body-medium text-gray-600">
                تقود عيادتنا <strong className="text-[#1a3a52]">{clinicInfo.doctorAr}</strong>، طبيبة أسنان متخصصة 
                بخبرة واسعة في جميع مجالات طب الأسنان. نحرص على تقديم رعاية 
                صحية عالية الجودة بأحدث التقنيات وأرقى المعايير.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a3a52] mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-clinic-primary"
            >
              اتصل بنا للمزيد
            </button>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-[#1a3a52]">جولة في عيادتنا</span>
            </div>
            <h2 className="heading-1 mb-4">عيادة حديثة ومتطورة</h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              اكتشف بيئة عيادتنا المجهزة بأحدث التقنيات والمعدات الطبية
            </p>
          </div>

          {/* Gallery Grid - 5 images with special layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* First row - 3 images */}
            {images.gallery.slice(0, 3).map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/90 via-[#1a3a52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Second row - 2 images centered */}
            <div className="md:col-start-1 md:col-span-3 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {images.gallery.slice(3, 5).map((image, index) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/90 via-[#1a3a52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-sm text-white/90">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
