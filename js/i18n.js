/* ============================================================
   CultureMed — Mehrsprachiger Content-Layer
   Sprachen: DE (Standard), EN, AR (RTL), TR, FR, RU
   - Flache UI-Keys (data-i18n)
   - SERVICE_DATA: Leistungs-Akkordeon (Titel, Beschreibung, Liste)
   - NEWS_DATA: Aktuelles
   Sprache wird in localStorage gespeichert. Arabisch -> dir="rtl".
   ============================================================ */

const RTL_LANGS = ["ar"];

const LANG_NAMES = {
  de: "Deutsch", en: "English", ar: "العربية",
  tr: "Türkçe", fr: "Français", ru: "Русский"
};

/* ---------- Statische UI-Texte ---------- */
const I18N = {
  de: {
    "meta.title": "CultureMed — Ambulanter Pflegedienst in Viersen & Kaarst",
    "nav.about": "Über uns", "nav.leitbild": "Leitbild", "nav.news": "Aktuelles",
    "nav.services": "Leistungen", "nav.contact": "Kontakt", "nav.careers": "Karriere",
    "nav.cta": "Pflege anfragen", "lang.label": "Sprache",
    "hero.kicker": "Ambulanter Pflegedienst · Viersen & Kaarst",
    "hero.title.1": "Rundum.", "hero.title.2": "Bestens.", "hero.title.3": "Versorgt.",
    "hero.lead": "Ihr ambulanter Pflegedienst, der neue Wege geht — mit Herz, Vertrauen und Zeit für das, was wirklich zählt: den Menschen.",
    "hero.cta.primary": "Kostenlos beraten lassen", "hero.cta.secondary": "Unsere Leistungen",
    "hero.scroll": "Entdecken",
    "hero.card1.t": "24/7", "hero.card1.d": "Erreichbar im Notfall",
    "hero.card2.t": "2 Standorte", "hero.card2.d": "Viersen & Kaarst",
    "hero.card3.t": "Mit Herz", "hero.card3.d": "Persönliche Bezugspflege",
    "services.kicker": "Unsere Leistungen",
    "services.title": "Pflege, die zu Ihrem Leben passt.",
    "services.lead": "Wählen Sie einen Bereich aus, um Erklärung und Leistungen zu sehen.",
    "services.cta": "Beratung anfragen",
    "about.kicker": "Über uns",
    "about.title": "Ein Pflegedienst, der den Menschen sieht.",
    "about.p1": "CultureMed ist Ihr ambulanter Pflegedienst in Viersen und Kaarst. Wir unterstützen Menschen dabei, in ihrer vertrauten Umgebung zu bleiben — selbstbestimmt, würdevoll und sicher.",
    "about.p2": "Unser Team aus examinierten Fachkräften begleitet Sie und Ihre Angehörigen verlässlich im Alltag. Pflege ist für uns Beziehung: Wir nehmen uns Zeit, hören zu und sind da, wenn Sie uns brauchen.",
    "about.stat1.n": "24/7", "about.stat1.l": "Erreichbarkeit",
    "about.stat2.n": "2", "about.stat2.l": "Standorte",
    "about.stat3.n": "100%", "about.stat3.l": "Engagement",
    "leitbild.kicker": "Leitbild",
    "leitbild.title": "Wofür wir stehen.",
    "leitbild.quote": "„Wir behandeln jeden Menschen so, wie wir möchten, dass unsere eigene Familie behandelt wird — mit Würde, Geduld und echter Wärme.“",
    "leitbild.author": "Das CultureMed Team",
    "leitbild.v1.t": "Würde", "leitbild.v1.d": "Jeder Mensch wird respektvoll und auf Augenhöhe behandelt.",
    "leitbild.v2.t": "Vertrauen", "leitbild.v2.d": "Feste Ansprechpartner, die Sie und Ihre Bedürfnisse kennen.",
    "leitbild.v3.t": "Qualität", "leitbild.v3.d": "Examinierte Fachkräfte und moderne Pflegestandards.",
    "leitbild.v4.t": "Verlässlichkeit", "leitbild.v4.d": "Wir sind da — pünktlich, flexibel und rund um die Uhr im Notfall.",
    "news.kicker": "Aktuelles", "news.title": "Neues von CultureMed",
    "news.lead": "Informationen, Hinweise und Neuigkeiten aus unserem Pflegedienst.",
    "careers.kicker": "Karriere",
    "careers.title": "Werden Sie Teil eines Teams, das anders pflegt.",
    "careers.lead": "Bei CultureMed zählt nicht nur, was Sie tun — sondern wie wir miteinander umgehen. Faire Bedingungen, echte Wertschätzung und ein Team, das zusammenhält.",
    "careers.perk1": "Faire Vergütung & Zuschläge", "careers.perk2": "Flexible Dienstpläne",
    "careers.perk3": "Fort- & Weiterbildung", "careers.perk4": "Modernes Equipment",
    "careers.perk5": "Wertschätzendes Miteinander", "careers.perk6": "Unbefristete Verträge",
    "careers.cta": "Jetzt bewerben",
    "contact.kicker": "Kontakt", "contact.title": "Wir sind für Sie da.",
    "contact.name": "Ihr Name", "contact.phone": "Telefonnummer",
    "contact.email": "E-Mail-Adresse", "contact.message": "Wie können wir helfen?",
    "contact.submit": "Nachricht senden", "contact.or": "oder rufen Sie uns direkt an",
    "contact.success": "Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.",
    "contact.locations": "Unsere Standorte",
    "loc.tag1": "Hauptsitz", "loc.tag2": "Zweigstelle",
    "loc.directions": "Route planen", "loc.phone": "Telefon",
    "footer.tagline": "Rundum. Bestens. Versorgt.",
    "footer.desc": "Ihr ambulanter Pflegedienst in Viersen und Kaarst, der neue Wege geht.",
    "footer.nav": "Navigation", "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum", "footer.privacy": "Datenschutz",
    "footer.contact": "Kontakt", "footer.rights": "Alle Rechte vorbehalten.",
    "footer.emergency": "24/7 Notfall"
  },

  en: {
    "meta.title": "CultureMed — Outpatient Care Service in Viersen & Kaarst",
    "nav.about": "About us", "nav.leitbild": "Our mission", "nav.news": "News",
    "nav.services": "Services", "nav.contact": "Contact", "nav.careers": "Careers",
    "nav.cta": "Request care", "lang.label": "Language",
    "hero.kicker": "Outpatient Care Service · Viersen & Kaarst",
    "hero.title.1": "Wholly.", "hero.title.2": "Truly.", "hero.title.3": "Cared for.",
    "hero.lead": "Your outpatient care service taking new paths — with heart, trust and time for what truly matters: the person.",
    "hero.cta.primary": "Get a free consultation", "hero.cta.secondary": "Our services",
    "hero.scroll": "Discover",
    "hero.card1.t": "24/7", "hero.card1.d": "Reachable in emergencies",
    "hero.card2.t": "2 locations", "hero.card2.d": "Viersen & Kaarst",
    "hero.card3.t": "With heart", "hero.card3.d": "Personal primary care",
    "services.kicker": "Our services",
    "services.title": "Care that fits your life.",
    "services.lead": "Select an area to see the explanation and services.",
    "services.cta": "Request a consultation",
    "about.kicker": "About us",
    "about.title": "A care service that sees the person.",
    "about.p1": "CultureMed is your outpatient care service in Viersen and Kaarst. We help people stay in their familiar surroundings — self-determined, dignified and safe.",
    "about.p2": "Our team of qualified professionals supports you and your relatives reliably in everyday life. For us, care is a relationship: we take our time, listen and are there when you need us.",
    "about.stat1.n": "24/7", "about.stat1.l": "Availability",
    "about.stat2.n": "2", "about.stat2.l": "Locations",
    "about.stat3.n": "100%", "about.stat3.l": "Commitment",
    "leitbild.kicker": "Our mission",
    "leitbild.title": "What we stand for.",
    "leitbild.quote": "“We treat every person the way we'd want our own family to be treated — with dignity, patience and genuine warmth.”",
    "leitbild.author": "The CultureMed Team",
    "leitbild.v1.t": "Dignity", "leitbild.v1.d": "Every person is treated with respect and as an equal.",
    "leitbild.v2.t": "Trust", "leitbild.v2.d": "Consistent contacts who know you and your needs.",
    "leitbild.v3.t": "Quality", "leitbild.v3.d": "Qualified professionals and modern care standards.",
    "leitbild.v4.t": "Reliability", "leitbild.v4.d": "We're there — punctual, flexible and around the clock in emergencies.",
    "news.kicker": "News", "news.title": "Latest from CultureMed",
    "news.lead": "Information, notes and news from our care service.",
    "careers.kicker": "Careers",
    "careers.title": "Join a team that cares differently.",
    "careers.lead": "At CultureMed what matters isn't only what you do — but how we treat each other. Fair conditions, real appreciation and a team that sticks together.",
    "careers.perk1": "Fair pay & bonuses", "careers.perk2": "Flexible schedules",
    "careers.perk3": "Training & development", "careers.perk4": "Modern equipment",
    "careers.perk5": "A respectful team", "careers.perk6": "Permanent contracts",
    "careers.cta": "Apply now",
    "contact.kicker": "Contact", "contact.title": "We're here for you.",
    "contact.name": "Your name", "contact.phone": "Phone number",
    "contact.email": "Email address", "contact.message": "How can we help?",
    "contact.submit": "Send message", "contact.or": "or call us directly",
    "contact.success": "Thank you! We'll get back to you as soon as possible.",
    "contact.locations": "Our locations",
    "loc.tag1": "Headquarters", "loc.tag2": "Branch office",
    "loc.directions": "Get directions", "loc.phone": "Phone",
    "footer.tagline": "Wholly. Truly. Cared for.",
    "footer.desc": "Your outpatient care service in Viersen and Kaarst, taking new paths.",
    "footer.nav": "Navigation", "footer.legal": "Legal",
    "footer.imprint": "Imprint", "footer.privacy": "Privacy",
    "footer.contact": "Contact", "footer.rights": "All rights reserved.",
    "footer.emergency": "24/7 Emergency"
  },

  ar: {
    "meta.title": "كالتشر ميد — خدمة رعاية منزلية في فيرزن وكارست",
    "nav.about": "من نحن", "nav.leitbild": "رؤيتنا", "nav.news": "آخر الأخبار",
    "nav.services": "خدماتنا", "nav.contact": "اتصل بنا", "nav.careers": "وظائف",
    "nav.cta": "اطلب الرعاية", "lang.label": "اللغة",
    "hero.kicker": "خدمة رعاية منزلية · فيرزن وكارست",
    "hero.title.1": "رعاية", "hero.title.2": "شاملة", "hero.title.3": "ومتميّزة.",
    "hero.lead": "خدمة الرعاية المنزلية التي تسلك طرقاً جديدة — بقلبٍ وثقةٍ ووقتٍ لما يهم حقاً: الإنسان.",
    "hero.cta.primary": "احصل على استشارة مجانية", "hero.cta.secondary": "خدماتنا",
    "hero.scroll": "اكتشف",
    "hero.card1.t": "٢٤/٧", "hero.card1.d": "متاحون في الحالات الطارئة",
    "hero.card2.t": "موقعان", "hero.card2.d": "فيرزن وكارست",
    "hero.card3.t": "بقلب", "hero.card3.d": "رعاية شخصية ثابتة",
    "services.kicker": "خدماتنا",
    "services.title": "رعاية تناسب حياتك.",
    "services.lead": "اختر مجالاً لعرض الشرح والخدمات.",
    "services.cta": "اطلب استشارة",
    "about.kicker": "من نحن",
    "about.title": "خدمة رعاية ترى الإنسان.",
    "about.p1": "كالتشر ميد هي خدمة الرعاية المنزلية الخاصة بك في فيرزن وكارست. نساعد الناس على البقاء في محيطهم المألوف — باستقلالية وكرامة وأمان.",
    "about.p2": "يرافقك فريقنا من المتخصصين المؤهلين أنت وأقاربك بشكل موثوق في الحياة اليومية. الرعاية بالنسبة لنا علاقة: نمنحك الوقت، ونستمع، ونكون حاضرين عند الحاجة.",
    "about.stat1.n": "٢٤/٧", "about.stat1.l": "التوفّر",
    "about.stat2.n": "٢", "about.stat2.l": "مواقع",
    "about.stat3.n": "١٠٠٪", "about.stat3.l": "التزام",
    "leitbild.kicker": "رؤيتنا",
    "leitbild.title": "ما نؤمن به.",
    "leitbild.quote": "«نعامل كل إنسان كما نتمنى أن تُعامَل عائلتنا — بالكرامة والصبر والدفء الحقيقي.»",
    "leitbild.author": "فريق كالتشر ميد",
    "leitbild.v1.t": "الكرامة", "leitbild.v1.d": "يُعامل كل شخص باحترام وعلى قدم المساواة.",
    "leitbild.v2.t": "الثقة", "leitbild.v2.d": "جهات اتصال ثابتة تعرفك وتعرف احتياجاتك.",
    "leitbild.v3.t": "الجودة", "leitbild.v3.d": "متخصصون مؤهلون ومعايير رعاية حديثة.",
    "leitbild.v4.t": "الموثوقية", "leitbild.v4.d": "نحن حاضرون — في الوقت المحدد وبمرونة وعلى مدار الساعة في الطوارئ.",
    "news.kicker": "آخر الأخبار", "news.title": "جديد كالتشر ميد",
    "news.lead": "معلومات وملاحظات وأخبار من خدمة الرعاية لدينا.",
    "careers.kicker": "وظائف",
    "careers.title": "كن جزءاً من فريق يقدّم رعاية مختلفة.",
    "careers.lead": "في كالتشر ميد لا يهم فقط ما تفعله — بل كيف نتعامل مع بعضنا. شروط عادلة وتقدير حقيقي وفريق متماسك.",
    "careers.perk1": "أجر عادل وبدلات", "careers.perk2": "جداول عمل مرنة",
    "careers.perk3": "تدريب وتطوير", "careers.perk4": "معدات حديثة",
    "careers.perk5": "بيئة عمل محترمة", "careers.perk6": "عقود دائمة",
    "careers.cta": "قدّم الآن",
    "contact.kicker": "اتصل بنا", "contact.title": "نحن هنا من أجلك.",
    "contact.name": "اسمك", "contact.phone": "رقم الهاتف",
    "contact.email": "البريد الإلكتروني", "contact.message": "كيف يمكننا المساعدة؟",
    "contact.submit": "إرسال الرسالة", "contact.or": "أو اتصل بنا مباشرة",
    "contact.success": "شكراً لك! سنتواصل معك في أقرب وقت ممكن.",
    "contact.locations": "مواقعنا",
    "loc.tag1": "المقر الرئيسي", "loc.tag2": "فرع",
    "loc.directions": "احصل على الاتجاهات", "loc.phone": "الهاتف",
    "footer.tagline": "رعاية شاملة ومتميّزة.",
    "footer.desc": "خدمة الرعاية المنزلية الخاصة بك في فيرزن وكارست، تسلك طرقاً جديدة.",
    "footer.nav": "التنقل", "footer.legal": "قانوني",
    "footer.imprint": "بيانات الناشر", "footer.privacy": "الخصوصية",
    "footer.contact": "اتصل بنا", "footer.rights": "جميع الحقوق محفوظة.",
    "footer.emergency": "طوارئ ٢٤/٧"
  },

  tr: {
    "meta.title": "CultureMed — Viersen & Kaarst'ta Evde Bakım Hizmeti",
    "nav.about": "Hakkımızda", "nav.leitbild": "Misyonumuz", "nav.news": "Güncel",
    "nav.services": "Hizmetler", "nav.contact": "İletişim", "nav.careers": "Kariyer",
    "nav.cta": "Bakım talep et", "lang.label": "Dil",
    "hero.kicker": "Evde Bakım Hizmeti · Viersen & Kaarst",
    "hero.title.1": "Bütünüyle.", "hero.title.2": "En iyi.", "hero.title.3": "Bakım.",
    "hero.lead": "Yeni yollar açan evde bakım hizmetiniz — gerçekten önemli olan için kalp, güven ve zamanla: insan için.",
    "hero.cta.primary": "Ücretsiz danışma alın", "hero.cta.secondary": "Hizmetlerimiz",
    "hero.scroll": "Keşfet",
    "hero.card1.t": "7/24", "hero.card1.d": "Acil durumda ulaşılabilir",
    "hero.card2.t": "2 lokasyon", "hero.card2.d": "Viersen & Kaarst",
    "hero.card3.t": "Kalpten", "hero.card3.d": "Kişisel sabit bakım",
    "services.kicker": "Hizmetlerimiz",
    "services.title": "Hayatınıza uyan bakım.",
    "services.lead": "Açıklamayı ve hizmetleri görmek için bir alan seçin.",
    "services.cta": "Danışma talep et",
    "about.kicker": "Hakkımızda",
    "about.title": "İnsanı gören bir bakım hizmeti.",
    "about.p1": "CultureMed, Viersen ve Kaarst'taki evde bakım hizmetinizdir. İnsanların alışık oldukları ortamda kalmalarına yardımcı oluyoruz — bağımsız, onurlu ve güvenli bir şekilde.",
    "about.p2": "Nitelikli uzmanlardan oluşan ekibimiz, günlük yaşamda size ve yakınlarınıza güvenle eşlik eder. Bakım bizim için bir ilişkidir: zaman ayırır, dinler ve ihtiyaç duyduğunuzda yanınızda oluruz.",
    "about.stat1.n": "7/24", "about.stat1.l": "Ulaşılabilirlik",
    "about.stat2.n": "2", "about.stat2.l": "Lokasyon",
    "about.stat3.n": "%100", "about.stat3.l": "Bağlılık",
    "leitbild.kicker": "Misyonumuz",
    "leitbild.title": "Neyi savunuyoruz.",
    "leitbild.quote": "“Her insana, kendi ailemize davranılmasını istediğimiz gibi davranırız — onur, sabır ve gerçek sıcaklıkla.”",
    "leitbild.author": "CultureMed Ekibi",
    "leitbild.v1.t": "Onur", "leitbild.v1.d": "Her insan saygıyla ve eşit olarak ele alınır.",
    "leitbild.v2.t": "Güven", "leitbild.v2.d": "Sizi ve ihtiyaçlarınızı tanıyan sabit irtibat kişileri.",
    "leitbild.v3.t": "Kalite", "leitbild.v3.d": "Nitelikli uzmanlar ve modern bakım standartları.",
    "leitbild.v4.t": "Güvenilirlik", "leitbild.v4.d": "Yanınızdayız — dakik, esnek ve acil durumda 7/24.",
    "news.kicker": "Güncel", "news.title": "CultureMed'den haberler",
    "news.lead": "Bakım hizmetimizden bilgiler, notlar ve haberler.",
    "careers.kicker": "Kariyer",
    "careers.title": "Farklı bakan bir ekibin parçası olun.",
    "careers.lead": "CultureMed'de yalnızca ne yaptığınız değil — birbirimize nasıl davrandığımız da önemlidir. Adil koşullar, gerçek takdir ve birbirine kenetlenen bir ekip.",
    "careers.perk1": "Adil ücret & ek ödemeler", "careers.perk2": "Esnek vardiyalar",
    "careers.perk3": "Eğitim & gelişim", "careers.perk4": "Modern ekipman",
    "careers.perk5": "Saygılı bir ekip", "careers.perk6": "Süresiz sözleşmeler",
    "careers.cta": "Hemen başvur",
    "contact.kicker": "İletişim", "contact.title": "Sizin için buradayız.",
    "contact.name": "Adınız", "contact.phone": "Telefon numarası",
    "contact.email": "E-posta adresi", "contact.message": "Nasıl yardımcı olabiliriz?",
    "contact.submit": "Mesaj gönder", "contact.or": "veya doğrudan bizi arayın",
    "contact.success": "Teşekkürler! En kısa sürede size geri döneceğiz.",
    "contact.locations": "Lokasyonlarımız",
    "loc.tag1": "Merkez", "loc.tag2": "Şube",
    "loc.directions": "Yol tarifi al", "loc.phone": "Telefon",
    "footer.tagline": "Bütünüyle. En iyi. Bakım.",
    "footer.desc": "Viersen ve Kaarst'taki evde bakım hizmetiniz, yeni yollar açıyor.",
    "footer.nav": "Gezinme", "footer.legal": "Yasal",
    "footer.imprint": "Künye", "footer.privacy": "Gizlilik",
    "footer.contact": "İletişim", "footer.rights": "Tüm hakları saklıdır.",
    "footer.emergency": "7/24 Acil"
  },

  fr: {
    "meta.title": "CultureMed — Service de soins à domicile à Viersen & Kaarst",
    "nav.about": "À propos", "nav.leitbild": "Notre vision", "nav.news": "Actualités",
    "nav.services": "Prestations", "nav.contact": "Contact", "nav.careers": "Carrières",
    "nav.cta": "Demander des soins", "lang.label": "Langue",
    "hero.kicker": "Service de soins à domicile · Viersen & Kaarst",
    "hero.title.1": "Pleinement.", "hero.title.2": "Vraiment.", "hero.title.3": "Pris en soin.",
    "hero.lead": "Votre service de soins à domicile qui ouvre de nouvelles voies — avec cœur, confiance et du temps pour l'essentiel : la personne.",
    "hero.cta.primary": "Demander un conseil gratuit", "hero.cta.secondary": "Nos prestations",
    "hero.scroll": "Découvrir",
    "hero.card1.t": "24/7", "hero.card1.d": "Joignable en cas d'urgence",
    "hero.card2.t": "2 sites", "hero.card2.d": "Viersen & Kaarst",
    "hero.card3.t": "Avec cœur", "hero.card3.d": "Soins personnels attitrés",
    "services.kicker": "Nos prestations",
    "services.title": "Des soins adaptés à votre vie.",
    "services.lead": "Sélectionnez un domaine pour voir l'explication et les prestations.",
    "services.cta": "Demander un conseil",
    "about.kicker": "À propos",
    "about.title": "Un service de soins qui voit la personne.",
    "about.p1": "CultureMed est votre service de soins à domicile à Viersen et Kaarst. Nous aidons les personnes à rester dans leur environnement familier — de façon autonome, digne et sûre.",
    "about.p2": "Notre équipe de professionnels qualifiés vous accompagne, vous et vos proches, de manière fiable au quotidien. Pour nous, le soin est une relation : nous prenons le temps, écoutons et sommes là quand vous avez besoin de nous.",
    "about.stat1.n": "24/7", "about.stat1.l": "Disponibilité",
    "about.stat2.n": "2", "about.stat2.l": "Sites",
    "about.stat3.n": "100%", "about.stat3.l": "Engagement",
    "leitbild.kicker": "Notre vision",
    "leitbild.title": "Ce que nous défendons.",
    "leitbild.quote": "« Nous traitons chaque personne comme nous voudrions que notre propre famille soit traitée — avec dignité, patience et une véritable chaleur. »",
    "leitbild.author": "L'équipe CultureMed",
    "leitbild.v1.t": "Dignité", "leitbild.v1.d": "Chaque personne est traitée avec respect et sur un pied d'égalité.",
    "leitbild.v2.t": "Confiance", "leitbild.v2.d": "Des interlocuteurs attitrés qui vous connaissent, vous et vos besoins.",
    "leitbild.v3.t": "Qualité", "leitbild.v3.d": "Des professionnels qualifiés et des standards de soins modernes.",
    "leitbild.v4.t": "Fiabilité", "leitbild.v4.d": "Nous sommes là — ponctuels, flexibles et 24h/24 en cas d'urgence.",
    "news.kicker": "Actualités", "news.title": "Les nouvelles de CultureMed",
    "news.lead": "Informations, remarques et nouveautés de notre service de soins.",
    "careers.kicker": "Carrières",
    "careers.title": "Rejoignez une équipe qui soigne autrement.",
    "careers.lead": "Chez CultureMed, ce qui compte n'est pas seulement ce que vous faites — mais la façon dont nous nous traitons. Conditions équitables, reconnaissance réelle et une équipe soudée.",
    "careers.perk1": "Rémunération équitable & primes", "careers.perk2": "Horaires flexibles",
    "careers.perk3": "Formation & développement", "careers.perk4": "Équipement moderne",
    "careers.perk5": "Une équipe respectueuse", "careers.perk6": "Contrats à durée indéterminée",
    "careers.cta": "Postuler maintenant",
    "contact.kicker": "Contact", "contact.title": "Nous sommes là pour vous.",
    "contact.name": "Votre nom", "contact.phone": "Numéro de téléphone",
    "contact.email": "Adresse e-mail", "contact.message": "Comment pouvons-nous aider ?",
    "contact.submit": "Envoyer le message", "contact.or": "ou appelez-nous directement",
    "contact.success": "Merci ! Nous vous répondrons dans les plus brefs délais.",
    "contact.locations": "Nos sites",
    "loc.tag1": "Siège", "loc.tag2": "Agence",
    "loc.directions": "Itinéraire", "loc.phone": "Téléphone",
    "footer.tagline": "Pleinement. Vraiment. Pris en soin.",
    "footer.desc": "Votre service de soins à domicile à Viersen et Kaarst, qui ouvre de nouvelles voies.",
    "footer.nav": "Navigation", "footer.legal": "Mentions légales",
    "footer.imprint": "Mentions légales", "footer.privacy": "Confidentialité",
    "footer.contact": "Contact", "footer.rights": "Tous droits réservés.",
    "footer.emergency": "Urgence 24/7"
  },

  ru: {
    "meta.title": "CultureMed — Служба амбулаторного ухода в Фирзене и Кaaрсте",
    "nav.about": "О нас", "nav.leitbild": "Наша миссия", "nav.news": "Новости",
    "nav.services": "Услуги", "nav.contact": "Контакты", "nav.careers": "Карьера",
    "nav.cta": "Запросить уход", "lang.label": "Язык",
    "hero.kicker": "Служба амбулаторного ухода · Фирзен и Каарст",
    "hero.title.1": "Полная.", "hero.title.2": "Лучшая.", "hero.title.3": "Забота.",
    "hero.lead": "Ваша служба амбулаторного ухода, идущая новыми путями — с сердцем, доверием и временем для главного: для человека.",
    "hero.cta.primary": "Бесплатная консультация", "hero.cta.secondary": "Наши услуги",
    "hero.scroll": "Узнать больше",
    "hero.card1.t": "24/7", "hero.card1.d": "На связи в экстренных случаях",
    "hero.card2.t": "2 филиала", "hero.card2.d": "Фирзен и Каарст",
    "hero.card3.t": "С сердцем", "hero.card3.d": "Личный постоянный уход",
    "services.kicker": "Наши услуги",
    "services.title": "Уход, подходящий вашей жизни.",
    "services.lead": "Выберите раздел, чтобы увидеть описание и услуги.",
    "services.cta": "Запросить консультацию",
    "about.kicker": "О нас",
    "about.title": "Служба ухода, которая видит человека.",
    "about.p1": "CultureMed — ваша служба амбулаторного ухода в Фирзене и Каарсте. Мы помогаем людям оставаться в привычной обстановке — самостоятельно, достойно и безопасно.",
    "about.p2": "Наша команда квалифицированных специалистов надёжно сопровождает вас и ваших близких в повседневной жизни. Для нас уход — это отношения: мы уделяем время, слушаем и рядом, когда мы нужны.",
    "about.stat1.n": "24/7", "about.stat1.l": "Доступность",
    "about.stat2.n": "2", "about.stat2.l": "Филиала",
    "about.stat3.n": "100%", "about.stat3.l": "Преданность делу",
    "leitbild.kicker": "Наша миссия",
    "leitbild.title": "За что мы выступаем.",
    "leitbild.quote": "«Мы относимся к каждому человеку так, как хотели бы, чтобы относились к нашей собственной семье — с достоинством, терпением и настоящим теплом.»",
    "leitbild.author": "Команда CultureMed",
    "leitbild.v1.t": "Достоинство", "leitbild.v1.d": "К каждому относятся с уважением и на равных.",
    "leitbild.v2.t": "Доверие", "leitbild.v2.d": "Постоянные контактные лица, знающие вас и ваши потребности.",
    "leitbild.v3.t": "Качество", "leitbild.v3.d": "Квалифицированные специалисты и современные стандарты ухода.",
    "leitbild.v4.t": "Надёжность", "leitbild.v4.d": "Мы рядом — пунктуально, гибко и круглосуточно в экстренных случаях.",
    "news.kicker": "Новости", "news.title": "Новости CultureMed",
    "news.lead": "Информация, заметки и новости нашей службы ухода.",
    "careers.kicker": "Карьера",
    "careers.title": "Станьте частью команды, которая заботится иначе.",
    "careers.lead": "В CultureMed важно не только то, что вы делаете, но и то, как мы относимся друг к другу. Честные условия, настоящее признание и сплочённая команда.",
    "careers.perk1": "Честная оплата и надбавки", "careers.perk2": "Гибкий график",
    "careers.perk3": "Обучение и развитие", "careers.perk4": "Современное оборудование",
    "careers.perk5": "Уважительный коллектив", "careers.perk6": "Бессрочные договоры",
    "careers.cta": "Откликнуться",
    "contact.kicker": "Контакты", "contact.title": "Мы здесь для вас.",
    "contact.name": "Ваше имя", "contact.phone": "Номер телефона",
    "contact.email": "Электронная почта", "contact.message": "Чем мы можем помочь?",
    "contact.submit": "Отправить сообщение", "contact.or": "или позвоните нам напрямую",
    "contact.success": "Спасибо! Мы свяжемся с вами в ближайшее время.",
    "contact.locations": "Наши филиалы",
    "loc.tag1": "Головной офис", "loc.tag2": "Филиал",
    "loc.directions": "Построить маршрут", "loc.phone": "Телефон",
    "footer.tagline": "Полная. Лучшая. Забота.",
    "footer.desc": "Ваша служба амбулаторного ухода в Фирзене и Каарсте, идущая новыми путями.",
    "footer.nav": "Навигация", "footer.legal": "Правовая информация",
    "footer.imprint": "Выходные данные", "footer.privacy": "Конфиденциальность",
    "footer.contact": "Контакты", "footer.rights": "Все права защищены.",
    "footer.emergency": "Экстренная 24/7"
  }
};

/* ---------- Leistungs-Daten (Akkordeon) ----------
   icon: Schlüssel aus dem ICONS-Map (siehe main render)
   badge: rechtlicher Verweis (sprachübergreifend)        */
const SERVICE_DATA = {
  de: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "Behandlungspflege",
      desc: "Medizinische Pflege auf ärztliche Verordnung — fachgerecht, sicher und nach modernen Standards.",
      items: ["Medikamentengabe & Stellen von Medikamenten", "Injektionen (s. c. / i. m.)", "Blutdruck- & Blutzuckerkontrolle", "Moderne Wundversorgung & Verbandwechsel", "An- & Ausziehen von Kompressionsstrümpfen", "Katheter-, Stoma- & Portversorgung"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "Grundpflege",
      desc: "Einfühlsame Unterstützung im Alltag — mit Respekt für Ihre Selbstständigkeit und Würde.",
      items: ["Körperpflege, Waschen, Duschen & Baden", "An- & Auskleiden", "Unterstützung bei der Nahrungsaufnahme", "Mobilisation, Lagerung & Transfer", "Hilfe bei Toilettengang & Inkontinenzversorgung", "Prophylaxen (z. B. Dekubitus)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "Betreuungsleistungen",
      desc: "Zeit, Begleitung und Gesellschaft — für mehr Lebensqualität und Entlastung der Angehörigen.",
      items: ["Begleitung zu Arztbesuchen & Terminen", "Spaziergänge & gemeinsame Aktivitäten", "Gesellschaft, Gespräche & Vorlesen", "Unterstützung bei Hobbys & im Alltag", "Förderung sozialer Kontakte", "Entlastung pflegender Angehöriger"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "Verhinderungspflege",
      desc: "Verlässliche Vertretung, wenn pflegende Angehörige eine Auszeit brauchen — stunden- oder tageweise.",
      items: ["Vertretung bei Urlaub oder Krankheit der Pflegeperson", "Stunden- oder tageweise Versorgung", "Bis zu sechs Wochen pro Kalenderjahr", "Erhalt der gewohnten Pflegequalität", "Flexible & kurzfristige Organisation", "Beratung zur Kostenübernahme"] },
    { id: "privat", icon: "star", badge: "Selbstzahler", title: "Privatleistungen",
      desc: "Individuelle Leistungen ganz nach Ihren Wünschen — ohne ärztliche Verordnung und flexibel buchbar.",
      items: ["Individuelle Leistungen ohne Verordnung", "Hauswirtschaftliche Versorgung & Einkäufe", "Begleit- & Fahrdienste", "Zusätzliche Betreuungsstunden", "Beratung & Organisation rund um die Pflege", "Flexible Pakete nach Ihren Wünschen"] }
  ],
  en: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "Medical care",
      desc: "Medical care as prescribed by a doctor — professional, safe and to modern standards.",
      items: ["Medication administration & preparation", "Injections (s.c. / i.m.)", "Blood pressure & blood sugar monitoring", "Modern wound care & dressing changes", "Putting on & taking off compression stockings", "Catheter, stoma & port care"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "Basic care",
      desc: "Sensitive everyday support — respecting your independence and dignity.",
      items: ["Personal hygiene, washing, showering & bathing", "Dressing & undressing", "Help with eating", "Mobilisation, positioning & transfer", "Help with toileting & incontinence care", "Prophylaxis (e.g. pressure sores)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "Companionship services",
      desc: "Time, accompaniment and company — for more quality of life and relief for relatives.",
      items: ["Accompaniment to doctor's visits & appointments", "Walks & shared activities", "Company, conversation & reading aloud", "Support with hobbies & daily life", "Encouraging social contact", "Relief for family caregivers"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "Respite care",
      desc: "Reliable cover when family caregivers need a break — by the hour or by the day.",
      items: ["Cover during the caregiver's holiday or illness", "Care by the hour or by the day", "Up to six weeks per calendar year", "Maintaining the usual quality of care", "Flexible & short-notice arrangement", "Advice on cost coverage"] },
    { id: "privat", icon: "star", badge: "Private pay", title: "Private services",
      desc: "Individual services entirely to your wishes — without a prescription and flexibly bookable.",
      items: ["Individual services without a prescription", "Household help & shopping", "Accompaniment & transport services", "Additional hours of care", "Advice & organisation around care", "Flexible packages to your wishes"] }
  ],
  ar: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "الرعاية العلاجية",
      desc: "رعاية طبية بوصفة من الطبيب — باحترافية وأمان ووفق المعايير الحديثة.",
      items: ["إعطاء الأدوية وتحضيرها", "الحقن (تحت الجلد / في العضل)", "مراقبة ضغط الدم والسكر", "العناية الحديثة بالجروح وتغيير الضمادات", "ارتداء وخلع جوارب الضغط", "العناية بالقسطرة والفغرة والمنفذ الوريدي"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "الرعاية الأساسية",
      desc: "دعم يومي حسّاس — مع احترام استقلاليتك وكرامتك.",
      items: ["النظافة الشخصية والغسل والاستحمام", "ارتداء وخلع الملابس", "المساعدة في تناول الطعام", "التحريك وتغيير الوضعية والنقل", "المساعدة في دخول الحمام والعناية بالسلس", "الوقاية (مثل قرح الفراش)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "خدمات المرافقة",
      desc: "وقت ومرافقة ورفقة — لمزيد من جودة الحياة وتخفيف العبء عن الأقارب.",
      items: ["المرافقة إلى زيارات الطبيب والمواعيد", "النزهات والأنشطة المشتركة", "الرفقة والحديث والقراءة بصوت عالٍ", "الدعم في الهوايات والحياة اليومية", "تعزيز التواصل الاجتماعي", "تخفيف العبء عن الأقارب المقدّمين للرعاية"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "رعاية بديلة",
      desc: "بديل موثوق عندما يحتاج الأقارب إلى استراحة — بالساعة أو باليوم.",
      items: ["البديل أثناء إجازة مقدّم الرعاية أو مرضه", "رعاية بالساعة أو باليوم", "حتى ستة أسابيع في السنة التقويمية", "الحفاظ على جودة الرعاية المعتادة", "تنظيم مرن وسريع", "استشارة حول تغطية التكاليف"] },
    { id: "privat", icon: "star", badge: "دفع خاص", title: "خدمات خاصة",
      desc: "خدمات فردية وفق رغباتك تماماً — دون وصفة طبية وقابلة للحجز بمرونة.",
      items: ["خدمات فردية دون وصفة طبية", "المساعدة المنزلية والتسوّق", "خدمات المرافقة والنقل", "ساعات رعاية إضافية", "الاستشارة والتنظيم المتعلق بالرعاية", "باقات مرنة وفق رغباتك"] }
  ],
  tr: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "Tedavi bakımı",
      desc: "Doktor reçetesiyle tıbbi bakım — uzman, güvenli ve modern standartlarda.",
      items: ["İlaç verme & hazırlama", "Enjeksiyonlar (s.c. / i.m.)", "Tansiyon & kan şekeri kontrolü", "Modern yara bakımı & pansuman değişimi", "Varis çorabı giydirme & çıkarma", "Kateter, stoma & port bakımı"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "Temel bakım",
      desc: "Duyarlı günlük destek — bağımsızlığınıza ve onurunuza saygıyla.",
      items: ["Kişisel temizlik, yıkanma, duş & banyo", "Giydirme & soyma", "Yemek yemede yardım", "Hareket ettirme, konumlama & transfer", "Tuvalet & inkontinans bakımında yardım", "Profilaksi (örn. bası yarası)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "Refakat hizmetleri",
      desc: "Zaman, refakat ve arkadaşlık — daha iyi yaşam kalitesi ve yakınlara rahatlama için.",
      items: ["Doktor ziyaretlerine & randevulara refakat", "Yürüyüşler & ortak etkinlikler", "Arkadaşlık, sohbet & sesli okuma", "Hobilerde & günlük yaşamda destek", "Sosyal ilişkileri teşvik", "Bakım veren yakınlara rahatlama"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "Yerine bakım",
      desc: "Bakım veren yakınların molaya ihtiyacı olduğunda güvenilir vekâlet — saatlik veya günlük.",
      items: ["Bakıcının tatili veya hastalığında vekâlet", "Saatlik veya günlük bakım", "Takvim yılında altı haftaya kadar", "Alışılmış bakım kalitesinin korunması", "Esnek & kısa vadeli organizasyon", "Masraf karşılama danışmanlığı"] },
    { id: "privat", icon: "star", badge: "Özel ödeme", title: "Özel hizmetler",
      desc: "Tamamen isteklerinize göre bireysel hizmetler — reçetesiz ve esnek rezervasyon.",
      items: ["Reçetesiz bireysel hizmetler", "Ev işleri & alışveriş", "Refakat & ulaşım hizmetleri", "Ek bakım saatleri", "Bakımla ilgili danışmanlık & organizasyon", "İsteklerinize göre esnek paketler"] }
  ],
  fr: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "Soins médicaux",
      desc: "Soins médicaux sur prescription médicale — professionnels, sûrs et selon des standards modernes.",
      items: ["Administration & préparation des médicaments", "Injections (s.c. / i.m.)", "Contrôle de la tension & de la glycémie", "Soins de plaies modernes & changements de pansement", "Pose & retrait de bas de contention", "Soins de cathéter, stomie & port-à-cath"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "Soins de base",
      desc: "Un soutien quotidien attentionné — dans le respect de votre autonomie et de votre dignité.",
      items: ["Hygiène corporelle, toilette, douche & bain", "Habillage & déshabillage", "Aide à la prise des repas", "Mobilisation, positionnement & transfert", "Aide à la toilette & soins d'incontinence", "Prophylaxie (p. ex. escarres)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "Services d'accompagnement",
      desc: "Du temps, de l'accompagnement et de la compagnie — pour plus de qualité de vie et soulager les proches.",
      items: ["Accompagnement aux rendez-vous médicaux", "Promenades & activités partagées", "Compagnie, conversation & lecture à voix haute", "Soutien dans les loisirs & au quotidien", "Encouragement des contacts sociaux", "Soulagement des proches aidants"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "Soins de répit",
      desc: "Un relais fiable lorsque les proches aidants ont besoin d'une pause — à l'heure ou à la journée.",
      items: ["Relais en cas de congé ou de maladie de l'aidant", "Soins à l'heure ou à la journée", "Jusqu'à six semaines par année civile", "Maintien de la qualité de soins habituelle", "Organisation flexible & à court terme", "Conseil sur la prise en charge des coûts"] },
    { id: "privat", icon: "star", badge: "Paiement privé", title: "Prestations privées",
      desc: "Des prestations individuelles selon vos souhaits — sans prescription et réservables avec souplesse.",
      items: ["Prestations individuelles sans prescription", "Aide ménagère & courses", "Services d'accompagnement & de transport", "Heures de soins supplémentaires", "Conseil & organisation autour des soins", "Forfaits flexibles selon vos souhaits"] }
  ],
  ru: [
    { id: "behandlungspflege", icon: "cross", badge: "§ 37 SGB V", title: "Лечебный уход",
      desc: "Медицинский уход по назначению врача — профессионально, безопасно и по современным стандартам.",
      items: ["Выдача и подготовка лекарств", "Инъекции (п/к / в/м)", "Контроль давления и сахара в крови", "Современная обработка ран и смена повязок", "Надевание и снятие компрессионного трикотажа", "Уход за катетером, стомой и портом"] },
    { id: "grundpflege", icon: "drop", badge: "§ 36 SGB XI", title: "Базовый уход",
      desc: "Чуткая поддержка в быту — с уважением к вашей самостоятельности и достоинству.",
      items: ["Личная гигиена, умывание, душ и купание", "Одевание и раздевание", "Помощь в приёме пищи", "Мобилизация, позиционирование и перемещение", "Помощь в туалете и уход при недержании", "Профилактика (напр. пролежней)"] },
    { id: "betreuung", icon: "heart", badge: "§ 45b SGB XI", title: "Услуги сопровождения",
      desc: "Время, сопровождение и общество — для качества жизни и разгрузки близких.",
      items: ["Сопровождение к врачу и на приёмы", "Прогулки и совместные занятия", "Общество, беседы и чтение вслух", "Поддержка в хобби и быту", "Поощрение социальных контактов", "Разгрузка ухаживающих родственников"] },
    { id: "verhinderung", icon: "clock", badge: "§ 39 SGB XI", title: "Замещающий уход",
      desc: "Надёжная замена, когда ухаживающим близким нужен отдых — по часам или по дням.",
      items: ["Замена во время отпуска или болезни ухаживающего", "Уход по часам или по дням", "До шести недель в календарный год", "Сохранение привычного качества ухода", "Гибкая и оперативная организация", "Консультация по покрытию расходов"] },
    { id: "privat", icon: "star", badge: "Частная оплата", title: "Частные услуги",
      desc: "Индивидуальные услуги полностью по вашим пожеланиям — без назначения и с гибким бронированием.",
      items: ["Индивидуальные услуги без назначения", "Помощь по хозяйству и покупки", "Услуги сопровождения и перевозки", "Дополнительные часы ухода", "Консультация и организация ухода", "Гибкие пакеты по вашим пожеланиям"] }
  ]
};

/* ---------- Aktuelles ---------- */
const NEWS_DATA = {
  de: [
    { date: "Juni 2026", tag: "Team", title: "Wir suchen Verstärkung", text: "Examinierte Pflegefachkräfte (m/w/d) für Viersen und Kaarst gesucht — werden Sie Teil unseres Teams." },
    { date: "Mai 2026", tag: "Service", title: "Mehrsprachige Beratung", text: "Wir beraten Sie ab sofort auf Deutsch, Englisch, Arabisch, Türkisch, Französisch und Russisch." },
    { date: "April 2026", tag: "Standort", title: "Standort Kaarst erweitert", text: "Mehr Kapazitäten für die ambulante Versorgung in Kaarst und Umgebung." }
  ],
  en: [
    { date: "June 2026", tag: "Team", title: "We're hiring", text: "Looking for qualified nursing professionals for Viersen and Kaarst — join our team." },
    { date: "May 2026", tag: "Service", title: "Multilingual counselling", text: "We now advise you in German, English, Arabic, Turkish, French and Russian." },
    { date: "April 2026", tag: "Location", title: "Kaarst location expanded", text: "More capacity for outpatient care in Kaarst and the surrounding area." }
  ],
  ar: [
    { date: "يونيو ٢٠٢٦", tag: "الفريق", title: "نبحث عن تعزيزات", text: "نبحث عن أخصائيي تمريض مؤهلين لفيرزن وكارست — انضم إلى فريقنا." },
    { date: "مايو ٢٠٢٦", tag: "خدمة", title: "استشارة متعددة اللغات", text: "نقدّم لك الاستشارة الآن بالألمانية والإنجليزية والعربية والتركية والفرنسية والروسية." },
    { date: "أبريل ٢٠٢٦", tag: "الموقع", title: "توسيع موقع كارست", text: "قدرات أكبر للرعاية المنزلية في كارست والمناطق المحيطة." }
  ],
  tr: [
    { date: "Haziran 2026", tag: "Ekip", title: "Takviye arıyoruz", text: "Viersen ve Kaarst için nitelikli bakım uzmanları arıyoruz — ekibimize katılın." },
    { date: "Mayıs 2026", tag: "Hizmet", title: "Çok dilli danışmanlık", text: "Artık size Almanca, İngilizce, Arapça, Türkçe, Fransızca ve Rusça danışmanlık veriyoruz." },
    { date: "Nisan 2026", tag: "Lokasyon", title: "Kaarst lokasyonu genişledi", text: "Kaarst ve çevresinde evde bakım için daha fazla kapasite." }
  ],
  fr: [
    { date: "Juin 2026", tag: "Équipe", title: "Nous recrutons", text: "Nous recherchons des professionnels de soins qualifiés pour Viersen et Kaarst — rejoignez notre équipe." },
    { date: "Mai 2026", tag: "Service", title: "Conseil multilingue", text: "Nous vous conseillons désormais en allemand, anglais, arabe, turc, français et russe." },
    { date: "Avril 2026", tag: "Site", title: "Site de Kaarst agrandi", text: "Plus de capacités pour les soins à domicile à Kaarst et ses environs." }
  ],
  ru: [
    { date: "Июнь 2026", tag: "Команда", title: "Мы ищем сотрудников", text: "Ищем квалифицированных специалистов по уходу для Фирзена и Каарста — присоединяйтесь к команде." },
    { date: "Май 2026", tag: "Сервис", title: "Консультации на нескольких языках", text: "Теперь мы консультируем на немецком, английском, арабском, турецком, французском и русском." },
    { date: "Апрель 2026", tag: "Филиал", title: "Расширен филиал в Каарсте", text: "Больше возможностей для амбулаторного ухода в Каарсте и окрестностях." }
  ]
};

/* ---------- Anwenden ---------- */
function getDict(lang) { return I18N[lang] || I18N.de; }

function applyLanguage(lang) {
  const dict = getDict(lang);
  const rtl = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.body && document.body.classList.toggle("is-rtl", rtl);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];

  renderServices(lang);
  renderNews(lang);
  updateLangSwitcher(lang);

  try { localStorage.setItem("curacare-lang", lang); } catch (e) {}
  if (window.ScrollTrigger) setTimeout(() => window.ScrollTrigger.refresh(), 80);
  document.dispatchEvent(new CustomEvent("curacare:langchange", { detail: { lang } }));
}

/* ---------- Icons ---------- */
const ICONS = {
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20S4 14.5 4 9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 5.5-8 11-8 11Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17.9 6.8 19.6l1-5.8L3.5 9.7l5.9-.9L12 3.5Z"/></svg>'
};

/* ---------- Leistungs-Akkordeon rendern ---------- */
function renderServices(lang) {
  const host = document.querySelector("[data-services]");
  if (!host) return;
  const data = SERVICE_DATA[lang] || SERVICE_DATA.de;
  const openIds = new Set([...host.querySelectorAll(".acc.is-open")].map(n => n.dataset.acc));
  host.innerHTML = data.map((s, i) => {
    const open = openIds.has(s.id) || (openIds.size === 0 && i === 0);
    return `
    <article class="acc${open ? " is-open" : ""}" data-acc="${s.id}" data-reveal>
      <button class="acc__head" type="button" aria-expanded="${open}">
        <span class="acc__icon">${ICONS[s.icon] || ICONS.star}</span>
        <span class="acc__titles">
          <span class="acc__title">${s.title}</span>
          <span class="acc__badge">${s.badge}</span>
        </span>
        <span class="acc__chev" aria-hidden="true"></span>
      </button>
      <div class="acc__panel">
        <div class="acc__panelInner">
          <p class="acc__desc">${s.desc}</p>
          <ul class="acc__list">
            ${s.items.map(it => `<li>${it}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>`;
  }).join("");
  // set panel heights for open ones
  host.querySelectorAll(".acc.is-open .acc__panel").forEach(p => { p.style.height = p.firstElementChild.offsetHeight + "px"; });
}

/* ---------- Aktuelles rendern ---------- */
function renderNews(lang) {
  const host = document.querySelector("[data-news]");
  if (!host) return;
  const data = NEWS_DATA[lang] || NEWS_DATA.de;
  host.innerHTML = data.map(n => `
    <article class="ncard" data-reveal>
      <div class="ncard__top"><span class="ncard__tag">${n.tag}</span><time>${n.date}</time></div>
      <h3>${n.title}</h3>
      <p>${n.text}</p>
    </article>`).join("");
}

/* ---------- Sprach-Umschalter ---------- */
function updateLangSwitcher(lang) {
  const cur = document.querySelector("[data-lang-current]");
  if (cur) cur.textContent = (lang || "de").toUpperCase();
  document.querySelectorAll("[data-lang-opt]").forEach(o =>
    o.classList.toggle("is-active", o.getAttribute("data-lang-opt") === lang));
}

function initI18n() {
  let lang = "de";
  try { lang = localStorage.getItem("curacare-lang") || "de"; } catch (e) {}
  if (!I18N[lang]) lang = "de";

  // Dropdown verkabeln
  const toggle = document.querySelector("[data-lang-toggle]");
  const menu = document.querySelector("[data-lang-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", (e) => { e.stopPropagation(); menu.classList.toggle("is-open"); });
    document.addEventListener("click", () => menu.classList.remove("is-open"));
    menu.querySelectorAll("[data-lang-opt]").forEach(opt =>
      opt.addEventListener("click", () => { applyLanguage(opt.getAttribute("data-lang-opt")); menu.classList.remove("is-open"); }));
  }
  applyLanguage(lang);
}

document.addEventListener("DOMContentLoaded", initI18n);
