import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';

import './styles/tailwind.css';
import Blog1 from './components/blogs/Blog1';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import ComingSoon from './components/ComingSoon';
import ProductSlider from './components/ProductSlider';
import ServicesSection from './components/ServicesSection';
import ConsultationForm from './components/ConsultationForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ContactPage from './components/ContactPage';
import TimelineSection from './components/TimelineSection';
import FloatingCallButton from './components/FloatingCallButton';
import Layout from './components/Layout';
import PricePage from './components/PricePage';
import ShutterServices from './components/shutter/ShutterServices';
import CameraPage from './components/CameraPage';
import ScrollToTop from './components/ScrollToTop';
import AutomaticDoorPage from './components/AutomaticDoorPage';
import CanopyPage from './components/CanopyPage';
import ParkingJack from './components/ParkingJack';
import ProductsPage from './components/ProductsPage';
import ConsultBoxAdvanced from './components/ConsultBoxAdvanced';
import AboutUs from './components/AboutUs';
import BlogListPage from './components/BlogListPage';

// lazy loaded components
const PortfolioGallery = lazy(() => import('./components/PortfolioGallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const BlogSection = lazy(() => import('./components/BlogSection'));

const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  if (loading) return <Loader />;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* صفحه اصلی */}
        <Route
          path='/'
          element={
            <>
              <div className='relative overflow-hidden'>
                <img
                  src='/images/bg-5.webp'
                  alt='هوشمندسازی ساختمان با مهر سازه'
                  className='absolute inset-0 z-[-1] h-full w-full object-cover'
                  fetchPriority='high'
                />
                <div className='absolute inset-0 bg-black/30'></div>
                <div className='relative z-10'>
                  <Header />
                  <Hero />
                </div>
              </div>

              <ProductSlider />
              <ServicesSection />
              <ConsultationForm />
              <FAQSection />
              <TimelineSection />
              <ConsultBoxAdvanced />

              <Suspense fallback={null}>
                <PortfolioGallery />
              </Suspense>

              <Suspense fallback={null}>
                <Testimonials />
              </Suspense>

              <div className='relative h-20 w-full bg-gradient-to-b from-white to-gray-100' />

              <Suspense fallback={null}>
                <BlogSection />
              </Suspense>

              <Footer />
            </>
          }
        />

        {/* سایر صفحات */}
        <Route
          path='/قیمت-کرکره-برقی'
          element={
            <Layout>
              <PricePage />
            </Layout>
          }
        />
        <Route
          path='/بلاگ/blog-1'
          element={
            <Layout>
              <Blog1 />
            </Layout>
          }
        />
        <Route
          path='/بلاگ'
          element={
            <Layout>
              <BlogListPage />
            </Layout>
          }
        />
        <Route
          path='/خدمات-کرکره-برقی'
          element={
            <Layout>
              <ShutterServices />
            </Layout>
          }
        />
        <Route
          path='/دوربین-مداربسته'
          element={
            <Layout>
              <CameraPage />
            </Layout>
          }
        />
        <Route
          path=':id'
          element={
            <Layout>
              <ProductDetail />
            </Layout>
          }
        />
        <Route
          path='/نمونه-کارها'
          element={
            <Layout>
              <ComingSoon />
            </Layout>
          }
        />
        <Route
          path='/تماس-با-ما'
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path='/درخواست-مشاوره'
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path='درب-اتوماتیک'
          element={
            <Layout>
              <AutomaticDoorPage />
            </Layout>
          }
        />
        <Route
          path='سایبان-برقی'
          element={
            <Layout>
              <CanopyPage />
            </Layout>
          }
        />
        <Route
          path='جک-پارکینگی'
          element={
            <Layout>
              <ParkingJack />
            </Layout>
          }
        />
        <Route
          path='/محصولات'
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path='/درباره-ما'
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
      </Routes>

      <FloatingCallButton />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
