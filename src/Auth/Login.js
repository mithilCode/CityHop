import React, { useEffect, useState } from "react";
import "../Assets/Styles/Auth.scss";
import "../Assets/Styles/Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/PreLogin/Layout";
import { useForm } from "react-hook-form";
import { Logindata, SendOtp } from "../Services/Services";
import toast from 'react-hot-toast';
const Login = () => {
  sessionStorage.removeItem("phone");
  sessionStorage.removeItem("emailset");
  var base64 = require("base-64");
  var utf8 = require("utf8");
  const { register, formState: { errors }, handleSubmit, } = useForm();
  const [usertype, setUsertype] = useState("Customer");
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (data.email) {
      let user;
      if (usertype === "Customer") {
        user = "Customer";
      } else {
        user = "Service Provider";
      }
      let formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("user_type", user);
      const apiResponse = await Logindata(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        sessionStorage.setItem("productLogin", true);
        let result = apiResponse.data;
        let userData = JSON.stringify(result);
        let bytes = utf8.encode(userData);
        let encodedUserData = base64.encode(bytes);
        localStorage.setItem("userdata", encodedUserData);
        toast.success(apiResponse.ResponseMsg);
        if (user === "Customer") {
          navigate("/user/home");
        } else if (user === "Service Provider") {
          navigate("/service/serviceadd");
        } else {
        }
      }else{
        toast.error(apiResponse.ResponseMsg);
      }
    } else {
      let user;
      if (usertype === "Customer") {
        user = "Customer";
      } else {
        user = "Service Provider";
      }
      sessionStorage.removeItem("emailset")
      let formData = new FormData();
      formData.append("phone", data.phone);
      formData.append("user_type", user);
      const apiResponse = await SendOtp(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        navigate("/otpauth");
        toast.success(apiResponse.ResponseMsg);
        sessionStorage.setItem("phone",apiResponse.data.phone)
        sessionStorage.setItem("user",user)
      }else{
        toast.error(apiResponse.ResponseMsg);
      }
    }
  };
  const selectuser = (e) => {
    setUsertype(e.target.value);
  };
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <section className="select_user">
          <ul className="tab_section" id="pills-tab" role="tablist">
            <li role="presentation">
              <button
                className="tab_btn_1 active"
                onClick={(e) => selectuser(e)}
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                value={"Customer"}
              >
                Customer
              </button>
            </li>
            <li role="presentation">
              <button
                className="tab_btn_2 nav-link"
                onClick={(e) => selectuser(e)}
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                value={"ServiceProvider"}
              >
                Service Provider
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            ></div>
            <div className="tab_content">
              <h2>Welcome Back</h2>
              <p>Enter your details below</p>
              <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form_control">
                  <input
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                    type="email"
                    autoComplete="username"
                    placeholder="Email"
                  />
                </div>
                <div className="form_control">
                  <input
                    {...register("password")}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                </div>
                <div className="forgot_link">
                  <Link to="/forgotpassword">Forgot password?</Link>
                </div>
                <div className="line_bar">
                  <span>Or</span>
                </div>
                <div className="form_control">
                  <input
                    {...register("phone")}
                    aria-invalid={errors.phone ? "true" : "false"}
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="submit_btn">
                  <button>Log In</button>
                </div>
              </form>
              <div className="register_link">
                <p>
                  Don't have an account?{" "}
                  <Link to={"/register"}>Register here</Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
