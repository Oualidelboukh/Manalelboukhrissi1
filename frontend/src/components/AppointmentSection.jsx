import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import '../styles/dental-clinic.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'تقويم الأسنان',
    'علاج الأسنان',
    'زراعة الأسنان',
    'طب الأسنان التجميلي',
    'تبييض الأسنان',
    'طب الأسنان للأطفال',
    'أخرى'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.service) {
      toast.error('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to backend API
      const response = await axios.post(`${API}/appointments`, formData);
      
      if (response.data.success) {
        toast.success(response.data.message || 'تم حجز موعدك بنجاح! سنتصل بك قريباً للتأكيد.');
        
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          time: '',
          service: '',
          notes: ''
        });
      } else {
        toast.error('حدث خطأ أثناء حجز الموعد. الرجاء المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      
      // Handle validation errors from backend
      if (error.response?.status === 422 && error.response?.data?.detail) {
        const details = error.response.data.detail;
        
        // Check if it's a validation error array
        if (Array.isArray(details)) {
          const errorMessages = details.map(err => {
            if (typeof err === 'object' && err.msg) {
              return err.msg;
            }
            return String(err);
          }).join(', ');
          toast.error(errorMessages);
        } else if (typeof details === 'string') {
          toast.error(details);
        } else {
          toast.error('خطأ في البيانات المدخلة. الرجاء التحقق من جميع الحقول.');
        }
      } else {
        // Show generic error message
        const errorMessage = error.response?.data?.detail || 
                            error.response?.data?.message || 
                            'حدث خطأ أثناء حجز الموعد. الرجاء المحاولة مرة أخرى.';
        
        if (typeof errorMessage === 'string') {
          toast.error(errorMessage);
        } else {
          toast.error('حدث خطأ أثناء حجز الموعد. الرجاء المحاولة مرة أخرى.');
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-[#FFF9F2] to-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a3a52]/10 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-[#1a3a52]" />
            <span className="text-sm font-medium text-[#1a3a52]">احجز موعدك</span>
          </div>
          <h2 className="heading-1 mb-4">حجز موعد استشارة</h2>
          <p className="body-large text-gray-600 max-w-2xl mx-auto">
            اختر الوقت المناسب لك وسنتواصل معك لتأكيد الموعد
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline ml-2" />
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="clinic-input"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline ml-2" />
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="clinic-input"
                  placeholder="06XX XX XX XX"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline ml-2" />
                  البريد الإلكتروني (اختياري)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="clinic-input"
                  placeholder="example@email.com"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الخدمة المطلوبة *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="clinic-input"
                  required
                >
                  <option value="">اختر الخدمة</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline ml-2" />
                    التاريخ *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="clinic-input"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline ml-2" />
                    الوقت *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="clinic-input"
                    required
                  >
                    <option value="">اختر الوقت</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline ml-2" />
                  ملاحظات إضافية
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="clinic-textarea"
                  placeholder="أخبرنا بأي تفاصيل إضافية..."
                  rows={3}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-clinic-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري الحجز...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    تأكيد الموعد
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-6">
            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#1a3a52] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-3">ساعات العمل</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">الاثنين - الخميس</span>
                  <span className="text-[#1a3a52] font-semibold">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">الجمعة</span>
                  <span className="text-[#1a3a52] font-semibold">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">السبت</span>
                  <span className="text-[#1a3a52] font-semibold">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">الأحد</span>
                  <span className="text-red-500 font-semibold">مغلق</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-[#1a3a52] to-[#2d5573] rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="heading-3 text-white">حالات الطوارئ</h3>
              </div>
              <p className="text-white/80 mb-4">
                للحالات الطارئة، يمكنك الاتصال بنا مباشرة:
              </p>
              <a 
                href="tel:0536339355"
                className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 rounded-xl py-3 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg font-bold">05 36 33 93 55</span>
              </a>
            </div>

            {/* Why Book Online */}
            <div className="bg-[#FFF9F2] rounded-2xl p-6">
              <h4 className="font-semibold text-[#1a3a52] mb-4">لماذا الحجز عبر الإنترنت؟</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>اختر الوقت المناسب لك</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>تأكيد فوري عبر الهاتف</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c8a882] mt-1">✓</span>
                  <span>تذكير بالموعد قبل الزيارة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
