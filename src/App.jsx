import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">{t('brand')}</div>
          <nav className="space-x-6 flex items-center">
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-700">{t('nav.how')}</a>
            <a href="#features" className="text-gray-700 hover:text-blue-700">{t('nav.features')}</a>
            <a href="#why" className="text-gray-700 hover:text-blue-700">{t('nav.why')}</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-700">{t('nav.faq')}</a>
            <a href="#get-started" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition">{t('nav.getStarted')}</a>
            {/* <div className="ml-4 inline-flex gap-1">
              <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-blue-700 text-white' : 'text-blue-700 bg-white border'}`}>EN</button>
              <button onClick={() => changeLanguage('am')} className={`px-2 py-1 rounded ${i18n.language === 'am' ? 'bg-blue-700 text-white' : 'text-blue-700 bg-white border'}`}>AM</button>
            </div> */}
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">{t('hero.desc')}</p>
        <div className="space-x-4">
          <a href="#get-started" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">{t('hero.getStarted')}</a>
          <a href="#how-it-works" className="text-blue-700 font-semibold hover:underline">{t('hero.how')}</a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('how.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-2 font-bold text-blue-700">1</div>
            <h3 className="font-semibold text-lg mb-2">{t('how.step1')}</h3>
            <p className="text-gray-600 text-center">{t('how.step1desc')}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-2 font-bold text-blue-700">2</div>
            <h3 className="font-semibold text-lg mb-2">{t('how.step2')}</h3>
            <p className="text-gray-600 text-center">{t('how.step2desc')}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-4xl mb-2 font-bold text-blue-700">3</div>
            <h3 className="font-semibold text-lg mb-2">{t('how.step3')}</h3>
            <p className="text-gray-600 text-center">{t('how.step3desc')}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('features.title')}</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Feature icon="🔒" title={t('features.auth')} desc={t('features.authDesc')} />
          <Feature icon="🧳" title={t('features.travel')} desc={t('features.travelDesc')} />
          <Feature icon="💬" title={t('features.chat')} desc={t('features.chatDesc')} />
          <Feature icon="📦" title={t('features.package')} desc={t('features.packageDesc')} />
          <Feature icon="🛡" title={t('features.verified')} desc={t('features.verifiedDesc')} />
          <Feature icon="📊" title={t('features.admin')} desc={t('features.adminDesc')} />
        </div>
      </section>

      {/* Why Use */}
      <section id="why" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('why.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon="💸" title={t('why.save')} desc={t('why.saveDesc')} />
          <Feature icon="🌍" title={t('why.global')} desc={t('why.globalDesc')} />
          <Feature icon="🤝" title={t('why.trust')} desc={t('why.trustDesc')} />
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-started" className="bg-blue-700 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
        <p className="mb-8 text-lg">{t('cta.desc')}</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition">{t('cta.ios')}</a>
          <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-100 transition">{t('cta.android')}</a>
          <a href="#" className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition">{t('cta.signup')}</a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('faq.title')}</h2>
        <div className="space-y-6">
          <FAQItem q={t('faq.q1')} a={t('faq.a1')} />
          <FAQItem q={t('faq.q2')} a={t('faq.a2')} />
          <FAQItem q={t('faq.q3')} a={t('faq.a3')} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="font-bold text-blue-700 text-lg mb-2 md:mb-0">{t('brand')}</div>
          <div>{t('footer.copyright')}</div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }) {
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
    <div className="bg-white rounded-lg shadow p-4">
      <div className="font-semibold text-gray-900 mb-2">{q}</div>
      <div className="text-gray-700">{a}</div>
    </div>
  )
}

export default App
