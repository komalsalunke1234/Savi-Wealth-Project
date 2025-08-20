import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ProductBasket from './pages/ProductBasket';
import ClientServices from './pages/ClientServices';
import MFReturnsCalculatorPage from './pages/MFReturnsCalculatorPage';
import Tools from './pages/Tools';
import Interviews from './pages/Interviews';
import FundManagerDetail from './pages/FundManagerDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import FloatingChatbot from './components/ui/FloatingChatbot';
import NewsletterPopup from './components/ui/NewsletterPopup';
import CookieConsent from './components/ui/CookieConsent';
import MutualFunds from './pages/MutualFunds';
import PMS from './pages/PMS';
import Insurance from './pages/Insurance';
import FixedIncome from './pages/FixedIncome';
import CapitalMarket from './pages/CapitalMarket';
import RealEstate from './pages/RealEstate';
import Resources from './pages/Resources';
import ResourcesArticles from './pages/ResourcesArticles';
import ResourcesInterviews from './pages/ResourcesInterviews';
import ResourcesAudioVideoClips from './pages/ResourcesAudioVideoClips';
import ResourcesImageGallery from './pages/ResourcesImageGallery';
import ResourcesEvents from './pages/ResourcesEvents';
import ResourcesImportantLinks from './pages/ResourcesImportantLinks';
import InterviewDetail from './pages/InterviewDetail';

// Placeholder components for utility pages
const Privacy: React.FC = () => (
  <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
        Privacy Policy
      </h1>
      <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
    </div>
  </div>
);

const Terms: React.FC = () => (
  <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
        Terms & Conditions
      </h1>
      <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
    </div>
  </div>
);

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product-basket" element={<ProductBasket />} />
              <Route path="/client-services" element={<ClientServices />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/mf-returns" element={<MFReturnsCalculatorPage />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/fund-managers/:slug" element={<FundManagerDetail />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/articles/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/mutual-funds" element={<MutualFunds />} />
              <Route path="/pms" element={<PMS />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/fixed-income" element={<FixedIncome />} />
              <Route path="/capital-market" element={<CapitalMarket />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/articles" element={<ResourcesArticles />} />
              <Route path="/resources/articles/:slug" element={<ArticleDetail />} />
              <Route path="/resources/interviews" element={<ResourcesInterviews />} />
              <Route path="/resources/interviews/:slug" element={<InterviewDetail />} />
              <Route path="/resources/audio-video-clips" element={<ResourcesAudioVideoClips />} />
              <Route path="/resources/image-gallery" element={<ResourcesImageGallery />} />
              <Route path="/resources/events" element={<ResourcesEvents />} />
              <Route path="/resources/important-links" element={<ResourcesImportantLinks />} />
              <Route path="/product-basket" element={<ProductBasket />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <FloatingChatbot />
          <NewsletterPopup />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;