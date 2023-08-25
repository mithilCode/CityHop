import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import "../Assets/Styles/Auth.scss";
import Layout from "../Components/Layout/PreLogin/Layout";
import { SendOtp, SignUp, VerifyEmailOTP, VerifyOTP } from "../Services/Services";
import toast from "react-hot-toast";
const OtpAuth = () => {
  const navigate = useNavigate();
  var base64 = require("base-64");
  var utf8 = require("utf8");
  const [otp, setOtp] = useState();
  let phone = sessionStorage.getItem("phone");
  let email = sessionStorage.getItem("emailset");
  let registeremail =sessionStorage.getItem("registeremailset");
  const user = sessionStorage.getItem("user");
  let userid;
  if (email !== null) {
    userid = sessionStorage.getItem("phone");
    email="email";
  } else if (phone !== null) {
    userid = sessionStorage.getItem("emailset");
    phone="phone";
  } else if(registeremail !==null) {
    userid=sessionStorage.getItem("registeremailset");
    registeremail="registeremail"
  } else {
    console.log("Some Thing Went Wrong");
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    if (email === "email") {
      let formData = new FormData();
      formData.append("phone", phone);
      formData.append("otp", otp);
      const apiResponse = await VerifyOTP(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        let result = apiResponse.data;
        let userData = JSON.stringify(result);
        let bytes = utf8.encode(userData);
        let encodedUserData = base64.encode(bytes);
        localStorage.setItem("userdata", encodedUserData);
        sessionStorage.setItem("productLogin", true);
        toast.success(apiResponse.ResponseMsg);
        if (result.user_type === "Customer") {
          navigate("/user/home");
        } else if (result.user_type === "Service Provider") {
          navigate("/service/servicehome");
        } else {
          console.log("wrong");
        }
      }
    } else if (phone === "phone") {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp);
      const apiResponse = await VerifyEmailOTP(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        toast.success(apiResponse.ResponseMsg);
        navigate("/resetpass");
      } else {
        toast.error(apiResponse.ResponseMsg);
      }
    } else if (registeremail==="registeremail") {
      let formData = new FormData();
      const apiResponse = await SignUp(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        
      }
      console.log("object");
    } else {
      console.log("object");
    }
  };
  const ResendOtp = async () => {
    let formData = new FormData();
    if (email !== "email") {
      formData.append("email", email);
    } else if (phone !== "phone") {
      formData.append("phone", phone);
    }
    formData.append("user_type", user);
    const apiResponse = await SendOtp(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      navigate("/otpauth");
      sessionStorage.setItem("phone", apiResponse.data.phone);
      toast.success(apiResponse.ResponseMsg);
    } else {
      toast.error(apiResponse.ResponseMsg);
    }
  };
  return (
    <Layout>
      <section className="select_user">
        <div className="tab_content">
          <h2>OTP Authentication</h2>
          <p className="py-2">
            Please enter the 4 digit code sent to <br></br>
            <b>{userid}</b>
          </p>
          <form className="form" onSubmit={onsubmit}>
            <div className="otp_input">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                placeholder={"0000"}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div className="submit_btn">
              <button>Verify</button>
            </div>
          </form>
          <div className="register_link">
            <p>
              Didn't receive the code? <span onClick={ResendOtp}>Resend</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OtpAuth;
