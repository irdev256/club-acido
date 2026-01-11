import { theme } from './theme/theme';
import { HelmetProvider } from 'react-helmet-async';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import MusicButton from './components/common/MusicButton';
import WhatsAppButton from './components/common/WhatsAppButton';

import './global.css';

// --- Pages ----
import HomePage from './pages/Home';
import ContactoPage from './pages/Contacto';
import { PagesInfo } from './helpers/constants';
// import SobreMi from './pages/SobreMi';
// import Lorem1 from './pages/Lorem1';
// import Lorem2 from './pages/Lorem2';
// import Lorem3 from './pages/Lorem3';

// --------------------------------------------------------------

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={PagesInfo.HOME.path} element={<HomePage />} />
            <Route path={PagesInfo.CONTACTO.path} element={<ContactoPage />} />
            {/* <Route path="/lorem1" element={<Lorem1 />} /> */}
            {/* <Route path="/lorem2" element={<Lorem2 />} /> */}
            {/* <Route path="/lorem3" element={<Lorem3 />} /> */}
            {/* <Route path="/sobre-mi" element={<SobreMi />} /> */}
          </Routes>
          <Footer />
          <MusicButton />
          <WhatsAppButton />
          <ScrollToTop />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
