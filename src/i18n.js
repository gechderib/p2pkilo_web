import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        how: 'How It Works',
        features: 'Features',
        why: 'Why Us',
        faq: 'FAQ',
        getStarted: 'Get Started',
      },
      hero: {
        title: 'P2P Kilo Sales',
        desc: 'Connecting travelers with package senders. Save money, travel lighter, and send packages easily with our secure, peer-to-peer platform.',
        getStarted: 'Get Started',
        how: 'How It Works',
      },
      how: {
        title: 'How It Works',
        step1: 'List Your Trip',
        step1desc: 'Travelers add their upcoming trips and available space.',
        step2: 'Request a Delivery',
        step2desc: 'Senders find a matching trip and request to send their package.',
        step3: 'Connect & Deliver',
        step3desc: 'Users connect, chat, and complete the delivery securely.',
      },
      features: {
        title: 'Features',
        auth: 'Secure Authentication',
        authDesc: 'Sign up with Email, Google, Apple, or Phone. OTP and identity verification included.',
        travel: 'Travel Listings',
        travelDesc: 'Travelers can list trips and available space for packages.',
        chat: 'Messaging System',
        chatDesc: 'Chat securely with other users to coordinate deliveries.',
        package: 'Package Requests',
        packageDesc: 'Senders can request to send packages with matching travelers.',
        verified: 'Verified Profiles',
        verifiedDesc: 'Identity and phone verification for trust and safety.',
        admin: 'Admin Dashboard',
        adminDesc: 'Platform management tools for admins.',
      },
      why: {
        title: 'Why Use P2P Kilo Sales?',
        save: 'Save Money',
        saveDesc: 'Travelers earn extra cash, senders save on shipping costs.',
        global: 'Global Reach',
        globalDesc: 'Connect with users worldwide for more delivery options.',
        trust: 'Community Trust',
        trustDesc: 'Verified users and secure messaging for peace of mind.',
      },
      cta: {
        title: 'Get Started Today',
        desc: 'Download our mobile app or sign up to start sending and delivering packages!',
        ios: 'Download for iOS',
        android: 'Download for Android',
        signup: 'Sign Up',
      },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'Is it safe to use P2P Kilo Sales?',
        a1: 'Yes! We use identity and phone verification, secure messaging, and admin oversight to keep the platform safe for everyone.',
        q2: 'How do I get started?',
        a2: 'Simply sign up, verify your profile, and start listing trips or requesting deliveries.',
        q3: 'Are there any fees?',
        a3: 'We charge a small service fee for completed deliveries to support the platform.',
      },
      footer: {
        copyright: '© 2025 P2P Kilo Sales. All rights reserved.',
      },
      brand: 'P2P',
    },
  },
  am: {
    translation: {
      nav: {
        how: 'እንዴት እንደሚሰራ',
        features: 'ባህሪያት',
        why: 'ለምን እኛ',
        faq: 'ጥያቄዎች',
        getStarted: 'ጀምር',
      },
      hero: {
        title: 'ፒ2ፒ ኪሎ ሽያጭ',
        desc: 'ተጓዦችን ከጥቅል ላኪዎች ጋር እንዲገናኙ እና በደህና ፣ በቀላሉ ጥቅሎችን ለመላክ የሚያስችል የተስፋፋ መድረክ።',
        getStarted: 'ጀምር',
        how: 'እንዴት እንደሚሰራ',
      },
      how: {
        title: 'እንዴት እንደሚሰራ',
        step1: 'ጉዞዎን ይዘምኑ',
        step1desc: 'ተጓዦች የሚመጡትን ጉዞዎቻቸውን እና ያለውን ቦታ ይጨምራሉ።',
        step2: 'ጥቅል ይጠይቁ',
        step2desc: 'ላኪዎች ተመሳሳይ ጉዞ ይፈልጋሉ እና ጥቅል ለመላክ ይጠይቃሉ።',
        step3: 'ይገናኙ እና ይላኩ',
        step3desc: 'ተጠቃሚዎች ይገናኛሉ፣ ይወያያሉ እና ጥቅሉን በደህና ያስተላልፋሉ።',
      },
      features: {
        title: 'ባህሪያት',
        auth: 'ደህንነታዊ ማረጋገጫ',
        authDesc: 'በኢሜይል፣ በጉግል፣ በአፕል ወይም በስልክ ይመዝገቡ። ኦቲፒ እና መታወቂያ ማረጋገጫ ይገናኛል።',
        travel: 'የጉዞ ዝርዝሮች',
        travelDesc: 'ተጓዦች ጉዞዎቻቸውን እና ያለውን ቦታ ለጥቅል ማስተናገድ ይችላሉ።',
        chat: 'መልእክት ስርዓት',
        chatDesc: 'በደህና ከሌሎች ተጠቃሚዎች ጋር ይወያዩ።',
        package: 'የጥቅል ጥያቄዎች',
        packageDesc: 'ላኪዎች ከተመሳሳይ ተጓዦች ጋር ጥቅል ለመላክ ይችላሉ።',
        verified: 'የተረጋገጡ መገለጫዎች',
        verifiedDesc: 'ለእምነት እና ደህንነት መታወቂያ እና ስልክ ማረጋገጫ።',
        admin: 'የአስተዳዳሪ ፓነል',
        adminDesc: 'ለአስተዳዳሪዎች የመድረክ መስክ መሳሪያዎች።',
      },
      why: {
        title: 'ለምን ፒ2ፒ ኪሎ ሽያጭ?',
        save: 'ገንዘብ ያከማቹ',
        saveDesc: 'ተጓዦች ተጨማሪ ገንዘብ ያገኛሉ፣ ላኪዎች የመላኪያ ወጪ ያከማቻሉ።',
        global: 'ዓለም አቀፍ ድርድር',
        globalDesc: 'ከዓለም አቀፍ ተጠቃሚዎች ጋር ይገናኙ።',
        trust: 'የማህበረሰብ እምነት',
        trustDesc: 'የተረጋገጡ ተጠቃሚዎች እና ደህንነታዊ መልእክት ስርዓት።',
      },
      cta: {
        title: 'ዛሬ ይጀምሩ',
        desc: 'የሞባይል መተግበሪያችንን ይውሰዱ ወይም ይመዝገቡ እና ጥቅሎችን ይላኩ!',
        ios: 'ለ iOS ይውሰዱ',
        android: 'ለ Android ይውሰዱ',
        signup: 'ይመዝገቡ',
      },
      faq: {
        title: 'ተደጋጋሚ ጥያቄዎች',
        q1: 'ፒ2ፒ ኪሎ ሽያጭ መጠቀም ደህና ነው?',
        a1: 'አዎን! መታወቂያ እና ስልክ ማረጋገጫ፣ ደህንነታዊ መልእክት ስርዓት እና የአስተዳዳሪ እይታ እንጠቀማለን።',
        q2: 'እንዴት ማስጀመር እችላለሁ?',
        a2: 'ቀላል ማስጀመር፣ ይመዝገቡ፣ መገለጫዎን ያረጋግጡ እና ጉዞዎችን ይዘምኑ ወይም ጥቅሎችን ይጠይቁ።',
        q3: 'ክፍያ አለ?',
        a3: 'የተጠናቀቁ ጥቅል ላክ ላይ ትንሽ አገልግሎት ክፍያ እንጠያቀማለን።',
      },
      footer: {
        copyright: '© 2025 ፒ2ፒ ኪሎ ሽያጭ። መብት የተጠበቀ።',
      },
      brand: 'ፒ2ፒ',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 