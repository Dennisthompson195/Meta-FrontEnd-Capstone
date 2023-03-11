import './App.css';
import AboutTwo from './AboutTwo';
import Home from './Home';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./index.css";
import { NoMatch } from './NoMatch';
import BookingPage from './BookingPage';

export default function HomeApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<AboutTwo />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path='/home' element={<Home />} />
      </Route>
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


