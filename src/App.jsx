import './App.css'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-white sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700 cursor-pointer" onClick={() => scroll.scrollToTop({ smooth: true, duration: 600 })}>{t('brand')}</div>
          <nav className="space-x-6 flex items-center">
            <ScrollLink to="how-it-works" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.how')}</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.features')}</ScrollLink>
            <ScrollLink to="why" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.why')}</ScrollLink>
            <ScrollLink to="faq" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.faq')}</ScrollLink>
            <ScrollLink to="get-started" smooth={true} duration={600} offset={-80} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition cursor-pointer">{t('nav.getStarted')}</ScrollLink>
            {/* <div className="ml-4 inline-flex gap-1">
              <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-700 text-white' : 'text-blue-700 bg-white border'}`}>EN</button>
              <button onClick={() => changeLanguage('am')} className={`px-2 py-1 rounded ${i18n.language === 'am' ? 'bg-blue-700 text-white' : 'text-blue-700 bg-white border'}`}>AM</button>
            </div> */}
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" variants={fadeIn}>{t('hero.title')}</motion.h1>
        <motion.p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl" variants={fadeIn}>{t('hero.desc')}</motion.p>
        <motion.div className="space-x-4" variants={fadeIn}>
          <ScrollLink to="get-started" smooth={true} duration={600} offset={-80} className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition cursor-pointer">{t('hero.getStarted')}</ScrollLink>
          <ScrollLink to="how-it-works" smooth={true} duration={600} offset={-80} className="text-blue-700 font-semibold hover:underline cursor-pointer">{t('hero.how')}</ScrollLink>
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section id="how-it-works" className="max-w-5xl mx-auto py-16 px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('how.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon="🔵" title={t('how.step1')} desc={t('how.step1desc')} animate />
          <Feature icon="🟢" title={t('how.step2')} desc={t('how.step2desc')} animate delay={0.2} />
          <Feature icon="🟣" title={t('how.step3')} desc={t('how.step3desc')} animate delay={0.4} />
        </div>
      </motion.section>

      {/* Features */}
      <motion.section id="features" className="bg-blue-50 py-16 px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('features.title')}</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Feature icon="🔒" title={t('features.auth')} desc={t('features.authDesc')} animate />
          <Feature icon="🧳" title={t('features.travel')} desc={t('features.travelDesc')} animate delay={0.1} />
          <Feature icon="💬" title={t('features.chat')} desc={t('features.chatDesc')} animate delay={0.2} />
          <Feature icon="📦" title={t('features.package')} desc={t('features.packageDesc')} animate delay={0.3} />
          <Feature icon="🛡" title={t('features.verified')} desc={t('features.verifiedDesc')} animate delay={0.4} />
          <Feature icon="📊" title={t('features.admin')} desc={t('features.adminDesc')} animate delay={0.5} />
        </div>
      </motion.section>

      {/* Why Use */}
      <motion.section id="why" className="max-w-5xl mx-auto py-16 px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('why.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon="💸" title={t('why.save')} desc={t('why.saveDesc')} animate />
          <Feature icon="🌍" title={t('why.global')} desc={t('why.globalDesc')} animate delay={0.2} />
          <Feature icon="🤝" title={t('why.trust')} desc={t('why.trustDesc')} animate delay={0.4} />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section id="get-started" className="bg-blue-700 py-16 px-4 text-center text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="mb-8 text-lg">{t('cta.desc')}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition">{t('cta.ios')}</a>
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition">{t('cta.android')}</a>
          <a href="#" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">{t('cta.signup')}</a>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section id="faq" className="max-w-3xl mx-auto py-16 px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('faq.title')}</h2>
        <div className="space-y-6">
          <FAQItem q={t('faq.q1')} a={t('faq.a1')} />
          <FAQItem q={t('faq.q2')} a={t('faq.a2')} />
          <FAQItem q={t('faq.q3')} a={t('faq.a3')} />
        </div>
      </motion.section>

      {/* Fancy Footer */}
      <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-10 mt-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="text-3xl">🚀</span>
            <span className="font-bold text-xl">{t('brand')}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
            <span className="flex items-center gap-1"><span role="img" aria-label="mail">📧</span> support@p2pkilo.com</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="phone">📞</span> +251 900 000 000</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="location">📍</span> Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-300 transition" aria-label="Facebook"><span className="text-2xl">🌐</span></a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Twitter"><span className="text-2xl">🐦</span></a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Instagram"><span className="text-2xl">📸</span></a>
          </div>
        </div>
        <div className="text-center text-xs text-blue-100 mt-6 relative z-10">
          {t('footer.copyright')} | <span>Made with <span className="text-pink-400">♥</span> by the P2P Kilo Team</span>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc, animate, delay }) {
  if (animate) {
    return (
      <motion.div
        className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6 h-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay || 0 }}
      >
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </motion.div>
    )
  }
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-6 h-full">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}

function FAQItem({ q, a }) {
  return (
    <motion.div className="bg-white rounded-lg shadow p-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="font-semibold text-gray-900 mb-2">{q}</div>
      <div className="text-gray-700">{a}</div>
    </motion.div>
  )
}

export default App
