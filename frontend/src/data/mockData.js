// Mock data for dental clinic website

export const clinicInfo = {
  name: "Cabinet Dentaire",
  nameAr: "عيادة طب الأسنان",
  doctor: "Dr El Boukhrissi Manal",
  doctorAr: "الدكتورة البوخريصي منال",
  phone: "05 36 33 93 55",
  email: "drmanaleiboukhrissi@gmail.com",
  address: "Bd Barsouvie N17, Hay souk, Zaio, 1ère étage",
  addressAr: "شارع بارسوفيه رقم 17 حي السوق زايو، الطابق الأول",
  city: "Zaio",
  cityAr: "زايو",
  hours: {
    weekdays: "09:00 - 18:00", // الاثنين - الخميس
    friday: "09:00 - 17:00",
    saturday: "09:00 - 13:00",
    sunday: "مغلق"
  }
};

export const services = [
  {
    id: 1,
    titleFr: "Orthodontie",
    titleAr: "تقويم الأسنان",
    descriptionAr: "تصحيح وضع الأسنان والفكين للحصول على ابتسامة مثالية ووظيفة مضغ صحيحة",
    icon: "Smile"
  },
  {
    id: 2,
    titleFr: "Soins Dentaire",
    titleAr: "علاج الأسنان",
    descriptionAr: "علاج التسوس والحشوات وجميع مشاكل الأسنان بتقنيات حديثة ومواد عالية الجودة",
    icon: "Activity"
  },
  {
    id: 3,
    titleFr: "Implantologie",
    titleAr: "زراعة الأسنان",
    descriptionAr: "زراعة الأسنان المفقودة بتقنيات حديثة لاستعادة الوظيفة والجمال الطبيعي",
    icon: "Plus"
  },
  {
    id: 4,
    titleFr: "Dentisterie Esthétique",
    titleAr: "طب الأسنان التجميلي",
    descriptionAr: "تحسين مظهر الأسنان من خلال التبييض والقشور والتجميل الشامل",
    icon: "Star"
  },
  {
    id: 5,
    titleFr: "Dentisterie Numérique",
    titleAr: "طب الأسنان الرقمي",
    descriptionAr: "استخدام أحدث التقنيات الرقمية للتشخيص والعلاج الدقيق",
    icon: "Monitor"
  },
  {
    id: 6,
    titleFr: "Parodontologie",
    titleAr: "جراحة الأسنان واللثة",
    descriptionAr: "علاج أمراض اللثة والأنسجة المحيطة بالأسنان للحفاظ على صحة الفم",
    icon: "Heart"
  },
  {
    id: 7,
    titleFr: "Pédodontie",
    titleAr: "طب الأسنان للأطفال",
    descriptionAr: "رعاية خاصة لأسنان الأطفال في بيئة مريحة وودودة",
    icon: "Users"
  },
  {
    id: 8,
    titleFr: "Radiologie",
    titleAr: "الأشعة",
    descriptionAr: "تصوير شعاعي متطور للتشخيص الدقيق والتخطيط العلاجي الأمثل",
    icon: "Camera"
  },
  {
    id: 9,
    titleFr: "Blanchiment",
    titleAr: "تبييض الأسنان",
    descriptionAr: "تبييض احترافي للأسنان لابتسامة مشرقة وثقة أكبر",
    icon: "Sparkles"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "أحمد العلوي",
    rating: 5,
    comment: "خدمة ممتازة والطبيبة محترفة جداً. العيادة نظيفة وحديثة.",
    service: "زراعة الأسنان"
  },
  {
    id: 2,
    name: "فاطمة الزهراء",
    rating: 5,
    comment: "تعامل راقي ونتائج رائعة. أنصح بها بشدة لكل من يبحث عن عيادة موثوقة.",
    service: "تقويم الأسنان"
  },
  {
    id: 3,
    name: "محمد السعيدي",
    rating: 5,
    comment: "الدكتورة منال رائعة مع الأطفال. ابني لم يعد يخاف من طبيب الأسنان.",
    service: "طب الأسنان للأطفال"
  }
];

export const images = {
  heroDentist: "https://images.pexels.com/photos/35438278/pexels-photo-35438278.jpeg",
  dentalOffice: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
  dentalChair: "https://images.unsplash.com/photo-1643660526741-094639fbe53a",
  dentalTools: "https://images.unsplash.com/photo-1619988252418-a1e6ee10b122",
  smile: "https://images.unsplash.com/photo-1573294705900-9623cfc746b7",
  happyFamily: "https://images.unsplash.com/photo-1588979355313-6711a095465f"
};
