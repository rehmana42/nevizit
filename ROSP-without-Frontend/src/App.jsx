import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllTourist from "./Tourist/AllTourist";
import Home from './HomePage/Home';
import ScrollToTop from './ScrollTop';
import MainTourist from './Tourist/MainTourist';
import NewsSection from './components/NewsSection';
import EventSection from './events comp/EventSection';
import EmergencySection from './Emergency comp/EmergencySection';
import EmergencyServices from './Emergency comp/EmergencySection';
import HotelRestaurant from './NearbyHotel/HotelRestaurant';
import AllHospital from './Hospital/AllHospital';
import AllRestaurant from './Restaurant/AllRestaurant';
import AllHotels from './Hotels/AllHotels';
import PreHome from './HomePage/PreHome';
import MainSignup from './HomePage/Authentication/MainSignup';
import MainLogin from './HomePage/Authentication/MainLogin';
import VerifyOTP from './HomePage/Authentication/VerifyOtp';
import Recommendation from './Recommendations/Recommendation';
import SearchAndRecommend from './Tourist/SearchAndRecommend'
export default function App() {
  return (
    <>
      <ScrollToTop/>
     <Routes>
        <Route path="/touristplaces" element={<AllTourist />} />
        <Route path="/hospitals" element={<AllHospital />} />
        <Route path="/restaurants" element={<AllRestaurant />} />
        <Route path="/hotels" element={<AllHotels />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<MainSignup />} />
        <Route path="/" element={<MainLogin />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/searchandrecommend" element={<SearchAndRecommend/>} />


        <Route path="/" element={<PreHome />} />
        <Route path="/MainTourist" element={<MainTourist/>} />
        <Route path="/events" element={<EventSection/>} />
        <Route path="/localnews" element={<NewsSection/>} />
        <Route path="/emergency" element={<EmergencyServices/>} />
        <Route path="/aroundyou" element={<HotelRestaurant/>} />
        <Route path='/recommend' element={<Recommendation/>} />

      </Routes>
      



 
      
    </>

  );
}
