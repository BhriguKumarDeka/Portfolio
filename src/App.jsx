import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import RootLayout from './components/Layout/RootLayout';
import LoadingScreen from './components/LoadingScreen';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Playground = lazy(() => import('./pages/Playground'));
const ProjectsPage = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds splash screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Loading Screen Overlay - Absolute position handled by fixed inset-0 in component */}
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {/* Main App Content - Always mounted to load in background */}
      <RootLayout>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </RootLayout>
    </BrowserRouter>
  );
}
