import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Cookies from "./pages/Cookies";
import LGPD from "./pages/LGPD";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosUso />} />
        <Route path="/politica-de-cookies" element={<Cookies />} />
        <Route path="/lgpd" element={<LGPD />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppFloat />
      <CookieBanner />
      <Toaster position="top-center" richColors />
    </>
  );
}
