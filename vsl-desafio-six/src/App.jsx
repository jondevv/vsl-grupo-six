import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VSLPage from './pages/VSLPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSLPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}