import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "./About";
import BookingPage from "./BookingPage";
import Orders from "../routes/Orders";
import Login from "../routes/Login";
import Confirmation from "./Confirmation";

export default function Routing() {
    return (
      <>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<App /> } />
  
        <Route path="/about" element={<About />} />
  
        <Route path="/reservations" element={<BookingPage />} />
  
        <Route path="/order" element={<Orders />} />
        <Route path="/login" element={<Login />} />
  
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      </>
    );
  }