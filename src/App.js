import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import Login from "./Auth/Login";
import Landing from "./Components/Landing/Landing";
import ForgotPassword from "./Auth/ForgotPassword";
import OtpAuth from "./Auth/OtpAuth";
import ResetPassword from "./Auth/ResetPassword";
import Register from "./Auth/Register";
import Test from "./Test";
import { Toaster } from 'react-hot-toast';

import PrivacyPolicy from './Views/Policy/PrivacyPolicy'
import Home from "./Views/User/Home/Home";
import HireList from "./Views/User/Home/HireList";
import AddDetails from "./Views/User/Home/AddDetails";
import Booking from "./Views/User/Booking/Booking";
import Chat from "./Views/User/Booking/Chat";
import Aboutus from "./Views/Aboutus/Aboutus";
import Review from "./Views/User/Review/Review";
import ContactUs from "./Views/ContactUs/ContactUs";
import EditProfile from "./Views/User/Profile/EditProfile";
import DeleteAccount from "./Views/User/Profile/DeleteAccount";


import ServiceAdd from "./Views/ServiceProvider/ServiceAdd/ServiceAdd";
import FinalServicelist from "./Views/ServiceProvider/ServiceAdd/FinalServicelist";
import AddBank from "./Views/ServiceProvider/ServiceAdd/AddBank";
import BankLinkList from "./Views/ServiceProvider/ServiceAdd/BankLinkList";
import AddBankDeatils from "./Views/ServiceProvider/ServiceAdd/AddBankDeatils";
import ServiceHome from "./Views/ServiceProvider/Home/ServiceHome";
import ServiceBooking from "./Views/ServiceProvider/Booking/ServiceBooking";
import ServiceChat from "./Views/ServiceProvider/Booking/ServiceChat";
import ServiceReview from "./Views/ServiceProvider/Review/ServiceReview";
import ServiceProfile from "./Views/ServiceProvider/Profile/ServiceProfile";
import EditServices from "./Views/ServiceProvider/Profile/EditServices";
import AllTransactions from "./Views/ServiceProvider/Profile/AllTransactions";
import ServicePrivacyPolicy from "./Views/ServiceProvider/Profile/ServicePrivacyPolicy";
import ServiceTermsConditions from "./Views/ServiceProvider/Profile/ServiceTermsConditions";
import ServiceDeleteAccount from "./Views/ServiceProvider/Profile/ServiceDeleteAccount";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import YourBank from "./Views/ServiceProvider/Profile/Bank/YourBank";
import NewAddBank from "./Views/ServiceProvider/Profile/Bank/NewAddBank";
import TermsCondition from "./Views/Policy/TermsCondition";
import UserPrivacyPolicy from "./Views/User/Profile/UserPrivacyPolicy";
import UserTermsConditions from "./Views/User/Profile/UserTermsConditions";
import AutoScrolltop from "./Components/AutoScrolltop";
import Loader from "./Components/Loader/Loader";
import ErrorBountry from "./ErrorBountry";
import { Provider } from 'react-redux';
const App = () => {
  return (
    <ErrorBountry fallback={"Something Was an Error"}> 
     <Toaster position="top-center" toastOptions={{style: { padding: "10px 15px ",fontWeight:600,maxWidth:"600px"}, }} duration="4000" reverseOrder={true} />
        <Provider>
      <BrowserRouter basename="/CityHop">
        <AutoScrolltop/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otpauth" element={<OtpAuth />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termscondition" element={<TermsCondition />} />

          {/* -----user----- */}
          <Route element={<PrivateRouter />}>
          <Route path="/user/home" element={<Home />} />
          <Route path="/user/home/hirelist" element={<HireList />} />
          <Route path="/user/home/adddetails" element={<AddDetails />} />
          <Route path="/user/booking" element={<Booking />} />
          <Route path="/user/booking/chat" element={<Chat />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/user/review" element={<Review />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/user/profile/editprofile" element={<EditProfile />} />
          <Route path="/user/profile/privacypolicy" element={<UserPrivacyPolicy />} />
          <Route path="/user/profile/termsconditions" element={<UserTermsConditions />} />
          <Route path="/user/profile/deleteaccount" element={<DeleteAccount />} />
          {/* ------- Service Provider ------ */}
          <Route path="/service" element={<ServiceHome />} />
          <Route path="/service/servicehome" element={<ServiceHome />} />
          <Route path="/service/booking" element={<ServiceBooking />} />
          <Route path="/service/booking/chat" element={<ServiceChat />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/service/review" element={<ServiceReview />} />
          <Route path="/service/profile/editprofile" element={<ServiceProfile />} />
          <Route path="/service/profile/editservices" element={<EditServices />} />
          <Route path="/service/profile/alltransactions" element={<AllTransactions />} />
          <Route path="/service/profile/privacypolicy" element={<ServicePrivacyPolicy />} />
          <Route path="/service/profile/termsconditions" element={<ServiceTermsConditions />} />
          <Route path="/service/profile/deleteaccount" element={<ServiceDeleteAccount />} />
          <Route path="/service/profile/bank" element={<YourBank />} />
          <Route path="/service/profile/bank/addbank" element={<NewAddBank />} />
          <Route path="/service/serviceadd" element={<ServiceAdd />} />
          <Route path="/service/serviceadd/finalservice" element={<FinalServicelist />} />
          <Route path="/service/serviceadd/addbank" element={<AddBank />} />
          <Route path="/service/serviceadd/banklinklist" element={<BankLinkList />} />
          <Route path="/service/serviceadd/addbankdeatils" element={<AddBankDeatils />} />
          <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </ErrorBountry>
  );
};

export default App;
