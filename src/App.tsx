import { theme } from './theme/theme';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './global.css';

// --- Pages ----
import HomePage from './pages/Home';
import QuizPage from './pages/Quiz';
import { PagesInfo } from './helpers/constants';
import TattooPage from './pages/Tattoo';
import SkincarePage from './pages/Skincare';
import TalleresPage from './pages/Talleres';
import SmoothScroll from './components/layout/SmoothScroll';
import FloatingActions from './components/common/FloatingActions';

// --------------------------------------------------------------

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <SmoothScroll />
          <Routes>
            <Route path={PagesInfo.HOME.path} element={<HomePage />} />
            <Route path={PagesInfo.TATTOO.path} element={<TattooPage />} />
            <Route path={PagesInfo.SKINCARE.path} element={<SkincarePage />} />
            <Route path={PagesInfo.TALLERES.path} element={<TalleresPage />} />
            <Route path={PagesInfo.QUIZ.path} element={<QuizPage />} />
          </Routes>
          <FloatingActions />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
