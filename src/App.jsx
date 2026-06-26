import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useLayoutEffect } from "react";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
const Contact = lazy(() => import("./components/Contact/Contact"));
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MotionSystem() {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(
      '.hero, .about, .products, .gallery, .career-page, .contact, .footer'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('motion-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MotionSystem />
      <div className="app-shell">
        <Navbar />
        <Suspense
          fallback={
            <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
              <p>Memuat halaman...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;