// Mock data for dental clinic website

export const clinicInfo = {
  name: "Cabinet Dentaire",
  nameAr: "عيادة طب الأسنان",
  doctor: "Dr El Boukhrissi Manal",
  doctorAr: "الدكتورة البوخريصي منال",
  phone: "05 36 33 93 55",
  email: "drmanalelboukhrissi@gmail.com",
  address: "Bd Barsouvie N17, Hay souk, Zaio, 1ère étage",
  addressAr: "شارع بارسوفيه رقم 17 حي السوق زايو، الطابق الأول",
  city: "Zaio",
  cityAr: "زايو",
  hours: {
    weekdays: "08:30 - 13:00 | 14:30 - 18:00", // الاثنين - الجمعة
    weekdaysMorning: "08:30 - 13:00",
    weekdaysEvening: "14:30 - 18:00",
    saturday: "09:00 - 14:00",
    sunday: "مغلق"
  }
};

export const services = [
  {
    id: 1,
    titleFr: "Orthodontie",
    titleAr: "تقويم الأسنان",
    descriptionAr: "تصحيح وضع الأسنان والفكين باستخدام أحدث تقنيات التقويم الشفاف والمعدني للحصول على ابتسامة متناسقة وصحية",
    icon: "Smile"
  },
  {
    id: 2,
    titleFr: "Soins Dentaire",
    titleAr: "علاج الأسنان",
    descriptionAr: "رعاية شاملة لصحة الأسنان تشمل علاج التسوس، الحشوات التجميلية، وعلاج الجذور بأحدث المعدات والتقنيات المتطورة",
    icon: "Activity"
  },
  {
    id: 3,
    titleFr: "Implantologie",
    titleAr: "زراعة الأسنان",
    descriptionAr: "حلول متقدمة لاستبدال الأسنان المفقودة بزرعات عالية الجودة لاستعادة الوظيفة الكاملة والمظهر الطبيعي الجميل",
    icon: "Plus"
  },
  {
    id: 4,
    titleFr: "Dentisterie Esthétique",
    titleAr: "طب الأسنان التجميلي",
    descriptionAr: "تحسين شامل لجمال ابتسامتك من خلال التبييض المتقدم، القشور الخزفية، والعدسات اللاصقة للحصول على ابتسامة هوليوود",
    icon: "Star"
  },
  {
    id: 5,
    titleFr: "Dentisterie Numérique",
    titleAr: "طب الأسنان الرقمي",
    descriptionAr: "تقنيات رقمية متطورة تشمل التصوير ثلاثي الأبعاد والتصميم بالكمبيوتر لتشخيص دقيق وخطة علاج مخصصة لكل مريض",
    icon: "Monitor"
  },
  {
    id: 6,
    titleFr: "Parodontologie",
    titleAr: "علاج اللثة والأنسجة المحيطة",
    descriptionAr: "علاج متخصص لأمراض اللثة والأنسجة الداعمة للأسنان باستخدام تقنيات حديثة للحفاظ على صحة الفم على المدى الطويل",
    icon: "Heart"
  },
  {
    id: 7,
    titleFr: "Pédodontie",
    titleAr: "طب أسنان الأطفال",
    descriptionAr: "رعاية طبية مخصصة للأطفال في بيئة ودودة ومريحة مع فريق متخصص في التعامل مع الصغار وبناء تجربة إيجابية",
    icon: "Users"
  },
  {
    id: 8,
    titleFr: "Radiologie Dentaire",
    titleAr: "الأشعة التشخيصية",
    descriptionAr: "أحدث أجهزة التصوير الشعاعي الرقمي والبانورامي لتشخيص دقيق وآمن مع أقل جرعة إشعاعية ممكنة",
    icon: "Camera"
  },
  {
    id: 9,
    titleFr: "Blanchiment Professionnel",
    titleAr: "التبييض الاحترافي",
    descriptionAr: "تبييض آمن وفعال للأسنان بتقنيات احترافية متطورة لنتائج فورية وابتسامة أكثر إشراقاً وثقة",
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
  // Real clinic photos - Updated with new professional images
  heroDentist: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/tmwx0142_IMG-20260122-WA0013.jpg", // مكتب الاستقبال مع الشعار - صورة Hero الجديدة
  dentalOffice: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/s10i1ufd_IMG-20260122-WA0016.jpg", // منطقة الانتظار
  dentalChair: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/9sk5q4a9_IMG-20260122-WA0005.jpg", // غرفة العلاج
  dentalXray: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/ak79tzt9_IMG-20260122-WA0018.jpg", // غرفة الأشعة
  
  // Gallery images - Updated with new photos
  gallery: [
    {
      id: 1,
      url: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/tmwx0142_IMG-20260122-WA0013.jpg",
      title: "مكتب الاستقبال",
      description: "استقبال أنيق ومريح مع شعار العيادة"
    },
    {
      id: 2,
      url: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/s10i1ufd_IMG-20260122-WA0016.jpg",
      title: "منطقة الانتظار",
      description: "مساحة مريحة للمرضى"
    },
    {
      id: 3,
      url: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/9sk5q4a9_IMG-20260122-WA0005.jpg",
      title: "غرفة العلاج",
      description: "أحدث المعدات الطبية والتقنيات"
    },
    {
      id: 4,
      url: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/ak79tzt9_IMG-20260122-WA0018.jpg",
      title: "غرفة الأشعة",
      description: "تقنية تصوير متطورة للتشخيص الدقيق"
    },
    {
      id: 5,
      url: "https://customer-assets.emergentagent.com/job_premium-dentalclinic/artifacts/ldl54q2v_IMG-20260122-WA0020.jpg",
      title: "شعار العيادة",
      description: "DR ELBOUKHRISSI MANAL - Cabinet Dentaire"
    }
  ]
};
