import './App.css'
import { useTranslation } from 'react-i18next'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-parallax'
import { useEffect, useRef, useState } from 'react'

// Simple particles component
function ParticlesBG({ className }) {
  // Just a few animated dots for subtle effect
  return (
    <svg className={className} width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {[...Array(18)].map((_, i) => (
        <motion.circle
          key={i}
          cx={Math.random() * 100 + '%'}
          cy={Math.random() * 100 + '%'}
          r={Math.random() * 2 + 1}
          fill="#fff"
          initial={{ opacity: 0.2, cy: `${Math.random() * 100}%` }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            cy: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
          }}
          transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
        />
      ))}
    </svg>
  )
}

function App() {
  const { t } = useTranslation()
  const [typed, setTyped] = useState(false)
  const [displayed, setDisplayed] = useState('')
  const fullText = t('hero.title')
  const heroEmoji = '📦✈️🤝'
  const [menuOpen, setMenuOpen] = useState(false)

  // Typing effect for hero title (slower)
  useEffect(() => {
    if (typed) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i === fullText.length) {
        clearInterval(interval)
        setTyped(true)
      }
    }, 220) // even slower typing
    return () => clearInterval(interval)
  }, [fullText, typed])

  // Mouse parallax for hero blobs
  const heroRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
    const node = heroRef.current
    if (node) node.addEventListener('mousemove', handleMouseMove)
    return () => node && node.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Animated gradient for hero
  const gradientAnim = {
    background: [
      'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
      'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
      'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
    ],
    transition: { duration: 10, repeat: Infinity, ease: 'linear' },
  }

  // Animated blob SVGs for background, with mouse parallax
  const AnimatedBlob = ({ className, style, color, duration = 8, delay = 0, parallax = [0, 0] }) => {
    const x = useTransform(mouseX, v => v * parallax[0])
    const y = useTransform(mouseY, v => v * parallax[1])
    return (
      <motion.svg
        className={className}
        style={{ ...style, x, y }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ duration, repeat: Infinity, delay }}
      >
        <path
          fill={color}
          d="M44.8,-75.2C57.7,-66.2,67.7,-57.2,75.2,-45.2C82.7,-33.2,87.7,-18.1,87.2,-3.1C86.7,11.9,80.7,23.8,73.2,34.8C65.7,45.8,56.7,55.8,45.2,62.7C33.7,69.6,19.8,73.4,5.7,70.7C-8.4,68,-16.8,58.8,-28.2,53.1C-39.6,47.4,-54,45.2,-62.2,37.2C-70.4,29.2,-72.4,15.4,-74.2,1.1C-76,-13.2,-77.6,-27.3,-71.7,-37.7C-65.8,-48.1,-52.4,-54.8,-39.2,-62.2C-26,-69.6,-13,-77.8,0.7,-78.8C14.4,-79.8,28.8,-73.7,44.8,-75.2Z"
          transform="translate(100 100)"
          opacity="0.5"
        />
      </motion.svg>
    )
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
      {/* Responsive Header with Hamburger */}
      <header className="bg-white sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700 cursor-pointer" onClick={() => scroll.scrollToTop({ smooth: true, duration: 600 })}>{t('brand')}</div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            <ScrollLink to="how-it-works" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.how')}</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.features')}</ScrollLink>
            <ScrollLink to="why" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.why')}</ScrollLink>
            <ScrollLink to="faq" smooth={true} duration={600} offset={-80} className="text-gray-700 hover:text-blue-700 cursor-pointer">{t('nav.faq')}</ScrollLink>
            <ScrollLink to="get-started" smooth={true} duration={600} offset={-80} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition cursor-pointer">{t('nav.getStarted')}</ScrollLink>
          </nav>
          {/* Hamburger Icon */}
          <button className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <span className="sr-only">Open menu</span>
            <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-white shadow-lg overflow-hidden ${menuOpen ? 'border-b border-blue-100' : ''}`}
        >
          <div className="flex flex-col items-center gap-2 py-2">
            <ScrollLink to="how-it-works" smooth={true} duration={600} offset={-80} className="block w-full text-center py-2 text-gray-700 hover:text-blue-700 cursor-pointer" onClick={() => setMenuOpen(false)}>{t('nav.how')}</ScrollLink>
            <ScrollLink to="features" smooth={true} duration={600} offset={-80} className="block w-full text-center py-2 text-gray-700 hover:text-blue-700 cursor-pointer" onClick={() => setMenuOpen(false)}>{t('nav.features')}</ScrollLink>
            <ScrollLink to="why" smooth={true} duration={600} offset={-80} className="block w-full text-center py-2 text-gray-700 hover:text-blue-700 cursor-pointer" onClick={() => setMenuOpen(false)}>{t('nav.why')}</ScrollLink>
            <ScrollLink to="faq" smooth={true} duration={600} offset={-80} className="block w-full text-center py-2 text-gray-700 hover:text-blue-700 cursor-pointer" onClick={() => setMenuOpen(false)}>{t('nav.faq')}</ScrollLink>
            <ScrollLink to="get-started" smooth={true} duration={600} offset={-80} className="block w-full text-center py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition cursor-pointer" onClick={() => setMenuOpen(false)}>{t('nav.getStarted')}</ScrollLink>
          </div>
        </motion.div>
      </header>

      <div className="relative" ref={heroRef} style={{ minHeight: 320 }}>
        {/* Animated Blobs in Hero with mouse parallax */}
        <AnimatedBlob className="absolute left-[-40px] top-[-40px] w-32 h-32 md:w-60 md:h-60 z-0" color="#3b82f6" duration={10} parallax={[0.02, 0.01]} />
        <AnimatedBlob className="absolute right-[-30px] top-10 w-20 h-20 md:w-40 md:h-40 z-0" color="#6366f1" duration={12} delay={2} parallax={[-0.01, 0.02]} />
        <AnimatedBlob className="absolute left-1/2 bottom-[-50px] w-36 h-36 md:w-72 md:h-72 z-0" color="#60a5fa" duration={14} delay={4} parallax={[0.01, -0.01]} />
        <ParticlesBG className="w-full h-full" />
        <Parallax
          bgImage={null}
          strength={300}
          className="z-10"
          bgClassName=""
        >
          <motion.section
            className="flex-1 flex flex-col items-center justify-center text-center py-16 md:py-32 px-2 md:px-4 bg-gradient-to-b from-blue-50 to-white relative z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            style={{ minHeight: 200 }}
          >
            <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg min-h-[2.5em] flex items-center justify-center gap-2" variants={fadeIn}>
              {typed ? <>{fullText} <span className="ml-2 text-2xl sm:text-3xl md:text-4xl">{heroEmoji}</span></> : displayed}
              {!typed && <span className="border-r-2 border-blue-700 animate-pulse ml-1" />}
            </motion.h1>
            <motion.p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl md:max-w-2xl drop-shadow mx-auto" variants={fadeIn}>{t('hero.desc')}</motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 items-center justify-center" variants={fadeIn}>
              <ScrollLink to="get-started" smooth={true} duration={600} offset={-80} className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition cursor-pointer backdrop-blur-md bg-opacity-80 w-full sm:w-auto text-center">{t('hero.getStarted')}</ScrollLink>
              <ScrollLink to="how-it-works" smooth={true} duration={600} offset={-80} className="text-blue-700 font-semibold hover:underline cursor-pointer w-full sm:w-auto text-center">{t('hero.how')}</ScrollLink>
            </motion.div>
          </motion.section>
        </Parallax>
      </div>

      {/* How It Works */}
      <motion.section id="how-it-works" className="max-w-5xl mx-auto py-10 md:py-16 px-2 md:px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{t('how.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Feature icon="🔵" title={t('how.step1')} desc={t('how.step1desc')} animate glass />
          <Feature icon="🟢" title={t('how.step2')} desc={t('how.step2desc')} animate delay={0.2} glass />
          <Feature icon="🟣" title={t('how.step3')} desc={t('how.step3desc')} animate delay={0.4} glass />
        </div>
      </motion.section>

      {/* Features */}
      <motion.section id="features" className="bg-blue-50 py-10 md:py-16 px-2 md:px-4 relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        {/* Animated background shape */}
        <AnimatedBlob className="absolute right-[-50px] top-[-40px] w-40 h-40 md:w-80 md:h-80 z-0" color="#a5b4fc" duration={16} delay={1} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center relative z-10">{t('features.title')}</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <Feature icon="🔒" title={t('features.auth')} desc={t('features.authDesc')} animate glass />
          <Feature icon="🧳" title={t('features.travel')} desc={t('features.travelDesc')} animate delay={0.1} glass />
          <Feature icon="💬" title={t('features.chat')} desc={t('features.chatDesc')} animate delay={0.2} glass />
          <Feature icon="📦" title={t('features.package')} desc={t('features.packageDesc')} animate delay={0.3} glass />
          <Feature icon="🛡" title={t('features.verified')} desc={t('features.verifiedDesc')} animate delay={0.4} glass />
          <Feature icon="📊" title={t('features.admin')} desc={t('features.adminDesc')} animate delay={0.5} glass />
        </div>
      </motion.section>

      {/* Why Use */}
      <motion.section id="why" className="max-w-5xl mx-auto py-10 md:py-16 px-2 md:px-4 relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        {/* Animated background shape */}
        <AnimatedBlob className="absolute left-[-60px] bottom-[-40px] w-48 h-48 md:w-96 md:h-96 z-0" color="#f472b6" duration={18} delay={2} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center relative z-10">{t('why.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <Feature icon="💸" title={t('why.save')} desc={t('why.saveDesc')} animate glass />
          <Feature icon="🌍" title={t('why.global')} desc={t('why.globalDesc')} animate delay={0.2} glass />
          <Feature icon="🤝" title={t('why.trust')} desc={t('why.trustDesc')} animate delay={0.4} glass />
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section id="get-started" className="bg-blue-700 py-10 md:py-16 px-2 md:px-4 text-center text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="mb-8 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto">{t('cta.desc')}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition backdrop-blur-md bg-opacity-80 w-full md:w-auto text-center">{t('cta.ios')}</a>
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition backdrop-blur-md bg-opacity-80 w-full md:w-auto text-center">{t('cta.android')}</a>
          <a href="#" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition backdrop-blur-md bg-opacity-80 w-full md:w-auto text-center">{t('cta.signup')}</a>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section id="faq" className="max-w-3xl mx-auto py-10 md:py-16 px-2 md:px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">{t('faq.title')}</h2>
        <div className="space-y-6">
          <FAQItem q={t('faq.q1')} a={t('faq.a1')} glass />
          <FAQItem q={t('faq.q2')} a={t('faq.a2')} glass />
          <FAQItem q={t('faq.q3')} a={t('faq.a3')} glass />
        </div>
      </motion.section>

      {/* Fancy Footer with Particles */}
      <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-8 md:py-10 mt-8 relative overflow-hidden text-xs sm:text-sm md:text-base">
        <ParticlesBG className="w-full h-full" />
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="0.3" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col md:flex-row justify-between items-center relative z-10 gap-4 md:gap-0">
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <span className="text-2xl md:text-3xl">🚀</span>
            <span className="font-bold text-lg md:text-xl">{t('brand')}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center text-xs md:text-sm">
            <span className="flex items-center gap-1"><span role="img" aria-label="mail">📧</span> support@p2pkilo.com</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="phone">📞</span> +251 900 000 000</span>
            <span className="flex items-center gap-1"><span role="img" aria-label="location">📍</span> Addis Ababa, Ethiopia</span>
          </div>
          <div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-300 transition" aria-label="Facebook"><span className="text-xl md:text-2xl">🌐</span></a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Twitter"><span className="text-xl md:text-2xl">🐦</span></a>
            <a href="#" className="hover:text-blue-300 transition" aria-label="Instagram"><span className="text-xl md:text-2xl">📸</span></a>
          </div>
        </div>
        <div className="text-center text-[10px] sm:text-xs md:text-sm text-blue-100 mt-4 md:mt-6 relative z-10">
          {t('footer.copyright')} | <span>Made with <span className="text-pink-400">♥</span> by the P2P Kilo Team</span>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc, animate, delay, glass }) {
  const glassClass = glass ? 'backdrop-blur-md bg-white/60 border border-white/30 shadow-lg' : ''
  if (animate) {
    return (
      <motion.div
        className={`flex flex-col items-center text-center rounded-2xl p-6 h-full ${glassClass}`}
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
    <div className={`flex flex-col items-center text-center rounded-2xl p-6 h-full ${glassClass}`}>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  )
}

function FAQItem({ q, a, glass }) {
  const glassClass = glass ? 'backdrop-blur-md bg-white/60 border border-white/30 shadow-lg' : ''
  return (
    <motion.div className={`rounded-2xl p-4 ${glassClass}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="font-semibold text-gray-900 mb-2">{q}</div>
      <div className="text-gray-700">{a}</div>
    </motion.div>
  )
}

export default App
