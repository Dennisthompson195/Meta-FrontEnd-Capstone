import './styles/App.css';
import AboutPage from './routes/AboutPage';
import Home from './routes/Home';
import { Routes, Route, Outlet} from "react-router-dom";
import "./styles/index.css";
import { NoMatch } from './routes/NoMatch';
import BookingPage from './routes/BookingPage';
import MobileMenu from './routes/MobileMenu';

export default function HomeApp() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Home />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/MobileMenu' element={<MobileMenu />} />
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}


