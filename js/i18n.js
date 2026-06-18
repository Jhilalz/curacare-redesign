/* ============================================================
   CuraCare — Bilingual content layer (DE default / EN toggle)
   Every string is keyed; data-i18n attributes in index.html
   pull from here. Language persists in localStorage.
   ============================================================ */

const I18N = {
  de: {
    "meta.title": "CuraCare — Ambulanter Pflegedienst in Viersen & Kaarst",
    "nav.services": "Leistungen",
    "nav.about": "Über uns",
    "nav.locations": "Standorte",
    "nav.careers": "Karriere",
    "nav.contact": "Kontakt",
    "nav.cta": "Pflege anfragen",

    "hero.kicker": "Ambulanter Pflegedienst · Viersen & Kaarst",
    "hero.title.1": "Rundum.",
    "hero.title.2": "Bestens.",
    "hero.title.3": "Versorgt.",
    "hero.lead": "Ihr ambulanter Pflegedienst, der neue Wege geht — mit Herz, Vertrauen und Zeit für das, was wirklich zählt: den Menschen.",
    "hero.cta.primary": "Kostenlos beraten lassen",
    "hero.cta.secondary": "Unsere Leistungen",
    "hero.stat1.num": "24/7",
    "hero.stat1.label": "Erreichbarkeit im Notfall",
    "hero.stat2.num": "2",
    "hero.stat2.label": "Standorte für Sie da",
    "hero.stat3.num": "100%",
    "hero.stat3.label": "Pflege mit Herz",
    "hero.scroll": "Entdecken",

    "marquee.1": "Grundpflege",
    "marquee.2": "Behandlungspflege",
    "marquee.3": "Verhinderungspflege",
    "marquee.4": "Beratung nach §37.3",
    "marquee.5": "Hauswirtschaft",
    "marquee.6": "Betreuungsleistungen",

    "trust.kicker": "Warum CuraCare",
    "trust.title": "Pflege beginnt mit Vertrauen.",
    "trust.lead": "Wir glauben, dass gute Pflege mehr ist als ein Beruf. Sie ist eine Beziehung — aufgebaut auf Verlässlichkeit, Würde und echter Zuwendung.",
    "trust.card1.title": "Persönliche Bezugspflege",
    "trust.card1.text": "Feste Ansprechpartner, die Sie und Ihre Bedürfnisse wirklich kennen. Kein wechselndes Gesicht an Ihrer Tür.",
    "trust.card2.title": "Flexibel & zuverlässig",
    "trust.card2.text": "Wir passen uns Ihrem Leben an — nicht umgekehrt. Pflege, die sich nach Ihrem Tag richtet.",
    "trust.card3.title": "Höchste Qualität",
    "trust.card3.text": "Examinierte Fachkräfte, moderne Standards und kontinuierliche Weiterbildung für Ihre Sicherheit.",
    "trust.card4.title": "Zuhause statt Heim",
    "trust.card4.text": "Damit Sie in Ihrer vertrauten Umgebung bleiben können — dort, wo Sie sich am wohlsten fühlen.",

    "services.kicker": "Unsere Leistungen",
    "services.title": "Pflege, die zu Ihrem Leben passt.",
    "services.lead": "Von der medizinischen Behandlungspflege bis zur liebevollen Alltagsbegleitung — ganz nach Ihrem individuellen Bedarf.",
    "services.1.title": "Grundpflege",
    "services.1.text": "Unterstützung bei Körperpflege, Ernährung und Mobilität — einfühlsam und mit Respekt für Ihre Selbstständigkeit.",
    "services.2.title": "Behandlungspflege",
    "services.2.text": "Medizinische Versorgung nach ärztlicher Verordnung: Medikamentengabe, Wundversorgung, Injektionen und mehr.",
    "services.3.title": "Verhinderungspflege",
    "services.3.text": "Wenn pflegende Angehörige eine Auszeit brauchen, sind wir verlässlich für Sie da — stunden- oder tageweise.",
    "services.4.title": "Betreuung & Alltag",
    "services.4.text": "Gesellschaft, Spaziergänge, Begleitung zu Terminen und Hilfe im Haushalt — für mehr Lebensqualität.",
    "services.5.title": "Pflegeberatung §37.3",
    "services.5.text": "Verpflichtende Beratungsbesuche für Pflegegeldempfänger — kompetent, verständlich und auf Augenhöhe.",
    "services.6.title": "24h-Notfallbereitschaft",
    "services.6.text": "Rund um die Uhr erreichbar. Im Notfall sind wir nur einen Anruf entfernt — Tag und Nacht.",
    "services.more": "Mehr erfahren",

    "process.kicker": "So einfach geht's",
    "process.title": "Ihr Weg zu uns",
    "process.1.title": "Erstgespräch",
    "process.1.text": "Wir hören zu und lernen Ihre Situation in einem kostenlosen, unverbindlichen Gespräch kennen.",
    "process.2.title": "Pflegeplan",
    "process.2.text": "Gemeinsam erstellen wir einen Plan, der genau zu Ihren Bedürfnissen und Wünschen passt.",
    "process.3.title": "Kennenlernen",
    "process.3.text": "Sie lernen Ihr festes Pflegeteam kennen — Vertrauen entsteht von der ersten Begegnung an.",
    "process.4.title": "Versorgung",
    "process.4.text": "Wir sind für Sie da — zuverlässig, einfühlsam und genau dann, wenn Sie uns brauchen.",

    "stats.title": "Pflege in Zahlen",
    "stats.1.num": "24",
    "stats.1.suffix": "/7",
    "stats.1.label": "Stunden erreichbar",
    "stats.2.num": "2",
    "stats.2.suffix": "",
    "stats.2.label": "Standorte in der Region",
    "stats.3.num": "12",
    "stats.3.suffix": "+",
    "stats.3.label": "Pflegeleistungen",
    "stats.4.num": "100",
    "stats.4.suffix": "%",
    "stats.4.label": "Engagement für Sie",

    "quote.text": "„Wir behandeln jeden Menschen so, wie wir möchten, dass unsere eigene Familie behandelt wird — mit Würde, Geduld und echter Wärme.“",
    "quote.author": "Das CuraCare Team",

    "locations.kicker": "Standorte",
    "locations.title": "In Ihrer Nähe.",
    "locations.lead": "Zwei Standorte, ein Versprechen: Pflege, die für Sie da ist — wann und wo Sie sie brauchen.",
    "locations.1.city": "Viersen",
    "locations.1.address": "Kränkelsweg 34, 41748 Viersen",
    "locations.1.tag": "Hauptsitz",
    "locations.2.city": "Kaarst",
    "locations.2.address": "Dreeskamp 5, 41564 Kaarst",
    "locations.2.tag": "Zweigstelle",
    "locations.phone": "Telefon",
    "locations.directions": "Route planen",

    "careers.kicker": "Karriere",
    "careers.title": "Werden Sie Teil eines Teams, das anders pflegt.",
    "careers.lead": "Bei CuraCare zählt nicht nur, was Sie tun — sondern wie wir miteinander umgehen. Faire Bedingungen, echte Wertschätzung und ein Team, das zusammenhält.",
    "careers.perk1": "Faire Vergütung & Zuschläge",
    "careers.perk2": "Flexible Dienstpläne",
    "careers.perk3": "Fort- & Weiterbildung",
    "careers.perk4": "Modernes Equipment",
    "careers.perk5": "Wertschätzendes Miteinander",
    "careers.perk6": "Unbefristete Verträge",
    "careers.cta": "Jetzt bewerben",

    "cta.title": "Lassen Sie uns über Pflege sprechen.",
    "cta.lead": "Unverbindlich, kostenlos und auf Augenhöhe. Erzählen Sie uns von Ihrer Situation — wir finden gemeinsam den richtigen Weg.",
    "cta.button": "Beratung anfragen",
    "cta.emergency": "Notfall-Hotline (24/7)",

    "contact.kicker": "Kontakt",
    "contact.title": "Wir sind für Sie da.",
    "contact.name": "Ihr Name",
    "contact.phone": "Telefonnummer",
    "contact.email": "E-Mail-Adresse",
    "contact.message": "Wie können wir helfen?",
    "contact.submit": "Nachricht senden",
    "contact.or": "oder rufen Sie uns direkt an",
    "contact.success": "Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.",

    "footer.tagline": "Rundum. Bestens. Versorgt.",
    "footer.desc": "Ihr ambulanter Pflegedienst in Viersen und Kaarst, der neue Wege geht.",
    "footer.nav": "Navigation",
    "footer.legal": "Rechtliches",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.contact": "Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.emergency": "24/7 Notfall"
  },

  en: {
    "meta.title": "CuraCare — Outpatient Care Service in Viersen & Kaarst",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.locations": "Locations",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "nav.cta": "Request care",

    "hero.kicker": "Outpatient Care Service · Viersen & Kaarst",
    "hero.title.1": "Wholly.",
    "hero.title.2": "Truly.",
    "hero.title.3": "Cared for.",
    "hero.lead": "Your outpatient care service taking new paths — with heart, trust and time for what truly matters: the person.",
    "hero.cta.primary": "Get a free consultation",
    "hero.cta.secondary": "Our services",
    "hero.stat1.num": "24/7",
    "hero.stat1.label": "Emergency availability",
    "hero.stat2.num": "2",
    "hero.stat2.label": "Locations near you",
    "hero.stat3.num": "100%",
    "hero.stat3.label": "Care with heart",
    "hero.scroll": "Discover",

    "marquee.1": "Basic care",
    "marquee.2": "Medical care",
    "marquee.3": "Respite care",
    "marquee.4": "Care counselling §37.3",
    "marquee.5": "Household help",
    "marquee.6": "Companionship",

    "trust.kicker": "Why CuraCare",
    "trust.title": "Care begins with trust.",
    "trust.lead": "We believe great care is more than a job. It's a relationship — built on reliability, dignity and genuine devotion.",
    "trust.card1.title": "Personal primary care",
    "trust.card1.text": "Consistent contacts who truly know you and your needs. No changing face at your door.",
    "trust.card2.title": "Flexible & reliable",
    "trust.card2.text": "We adapt to your life — not the other way around. Care that fits around your day.",
    "trust.card3.title": "Highest quality",
    "trust.card3.text": "Qualified professionals, modern standards and continuous training for your safety.",
    "trust.card4.title": "Home, not a home",
    "trust.card4.text": "So you can stay in your familiar surroundings — where you feel most at ease.",

    "services.kicker": "Our services",
    "services.title": "Care that fits your life.",
    "services.lead": "From medical treatment to loving everyday support — tailored entirely to your individual needs.",
    "services.1.title": "Basic care",
    "services.1.text": "Support with personal hygiene, nutrition and mobility — sensitive and respectful of your independence.",
    "services.2.title": "Medical care",
    "services.2.text": "Medical treatment as prescribed: medication, wound care, injections and more.",
    "services.3.title": "Respite care",
    "services.3.text": "When family caregivers need a break, we're reliably here for you — by the hour or by the day.",
    "services.4.title": "Companionship & daily life",
    "services.4.text": "Company, walks, accompaniment to appointments and help around the house — for more quality of life.",
    "services.5.title": "Care counselling §37.3",
    "services.5.text": "Mandatory advisory visits for care allowance recipients — competent, clear and at eye level.",
    "services.6.title": "24h emergency standby",
    "services.6.text": "Available around the clock. In an emergency we're just one call away — day and night.",
    "services.more": "Learn more",

    "process.kicker": "How it works",
    "process.title": "Your path to us",
    "process.1.title": "First conversation",
    "process.1.text": "We listen and get to know your situation in a free, no-obligation conversation.",
    "process.2.title": "Care plan",
    "process.2.text": "Together we build a plan that fits your needs and wishes exactly.",
    "process.3.title": "Getting to know",
    "process.3.text": "You meet your dedicated care team — trust grows from the very first encounter.",
    "process.4.title": "Care",
    "process.4.text": "We're here for you — reliable, compassionate and exactly when you need us.",

    "stats.title": "Care in numbers",
    "stats.1.num": "24",
    "stats.1.suffix": "/7",
    "stats.1.label": "Hours reachable",
    "stats.2.num": "2",
    "stats.2.suffix": "",
    "stats.2.label": "Locations in the region",
    "stats.3.num": "12",
    "stats.3.suffix": "+",
    "stats.3.label": "Care services",
    "stats.4.num": "100",
    "stats.4.suffix": "%",
    "stats.4.label": "Commitment to you",

    "quote.text": "“We treat every person the way we'd want our own family to be treated — with dignity, patience and genuine warmth.”",
    "quote.author": "The CuraCare Team",

    "locations.kicker": "Locations",
    "locations.title": "Close to you.",
    "locations.lead": "Two locations, one promise: care that's here for you — whenever and wherever you need it.",
    "locations.1.city": "Viersen",
    "locations.1.address": "Kränkelsweg 34, 41748 Viersen",
    "locations.1.tag": "Headquarters",
    "locations.2.city": "Kaarst",
    "locations.2.address": "Dreeskamp 5, 41564 Kaarst",
    "locations.2.tag": "Branch office",
    "locations.phone": "Phone",
    "locations.directions": "Get directions",

    "careers.kicker": "Careers",
    "careers.title": "Join a team that cares differently.",
    "careers.lead": "At CuraCare what matters isn't only what you do — but how we treat each other. Fair conditions, real appreciation and a team that sticks together.",
    "careers.perk1": "Fair pay & bonuses",
    "careers.perk2": "Flexible schedules",
    "careers.perk3": "Training & development",
    "careers.perk4": "Modern equipment",
    "careers.perk5": "A respectful team",
    "careers.perk6": "Permanent contracts",
    "careers.cta": "Apply now",

    "cta.title": "Let's talk about care.",
    "cta.lead": "Free, no obligation and at eye level. Tell us about your situation — together we'll find the right path.",
    "cta.button": "Request a consultation",
    "cta.emergency": "Emergency hotline (24/7)",

    "contact.kicker": "Contact",
    "contact.title": "We're here for you.",
    "contact.name": "Your name",
    "contact.phone": "Phone number",
    "contact.email": "Email address",
    "contact.message": "How can we help?",
    "contact.submit": "Send message",
    "contact.or": "or call us directly",
    "contact.success": "Thank you! We'll get back to you as soon as possible.",

    "footer.tagline": "Wholly. Truly. Cared for.",
    "footer.desc": "Your outpatient care service in Viersen and Kaarst, taking new paths.",
    "footer.nav": "Navigation",
    "footer.legal": "Legal",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.emergency": "24/7 Emergency"
  }
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.de;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
  document.querySelectorAll("[data-lang-btn]").forEach((b) => {
    b.classList.toggle("is-active", b.getAttribute("data-lang-btn") === lang);
  });
  try { localStorage.setItem("curacare-lang", lang); } catch (e) {}
}

function initI18n() {
  let lang = "de";
  try { lang = localStorage.getItem("curacare-lang") || "de"; } catch (e) {}
  applyLanguage(lang);
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.getAttribute("data-lang-btn")));
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
