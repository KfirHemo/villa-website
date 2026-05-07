import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Villa from './pages/Villa';
import Island from './pages/Island';
import GuestReviews from './pages/GuestReviews';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/villa" element={<Villa />} />
        <Route path="/island" element={<Island />} />
        <Route path="/guest-reviews" element={<GuestReviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
