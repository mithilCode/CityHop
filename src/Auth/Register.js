import React, { useRef, useState } from "react";
import "../Assets/Styles/Auth.scss";

import Layout from "../Components/Layout/PreLogin/Layout";
import ImgUpload from "../Components/ImgUpload/ImgUpload";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SendOtp, SignUp } from "../Services/Services";
import { toast } from "react-hot-toast";
import Loader from "../Components/Loader/Loader";

const Register = () => {
  sessionStorage.removeItem("emailset");
  const navigate = useNavigate();
  const [fileone, setFileone] = useState("");
  const [passerror, setPasserror] = useState();
  const [usertype, setUsertype] = useState("Customer");
  const [ischack, setisChack] = useState(false);
  const [loader, setLoader] = useState(false);
  const checkbox = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let user;
  if (usertype === "Customer") {
    user = "Customer";
  } else {
    user = "Service Provider";
  }
  const onSubmit = async (data, e) => {
    let pass = data.password;
    let confirmpass = data.confirmpassword;
    if (ischack === true) {
      setLoader(true);
      if (pass === confirmpass) {
        let formData = new FormData();
        formData.append("email", data.email);
        const apiResponse = await SendOtp(formData);
        if (
          apiResponse.ResponseCode === 1 ||
          apiResponse.ResponseCode === "1"
        ) {
          sessionStorage.setItem("registeremailset", data.email);
          toast.success(apiResponse.ResponseMsg);
          setLoader(false);
          navigate("/otpauth");
        }
      } else {
        setPasserror("* Password does not match");
        setLoader(false);
      }
    } else {
      toast.error("Accept Terms of Service & Privacy Policy");
    }
  };
  const selectuser = (e) => {
    setUsertype(e.target.value);
  };
  const userchack = () => {
    if (checkbox.current.checked === true) {
      setisChack(true);
    } else {
      setisChack(!ischack);
    }
  };
  // formData.append("name", data.name);
  // formData.append("profile",fileone);
  // formData.append("email", data.email);
  // formData.append("phone", data.phonenumber);
  // formData.append("location", "surat");
  // formData.append("password", data.password);
  // formData.append("lat", 101.20);
  // formData.append("lng", 102.30);
  // formData.append("user_type", usertype);
  return (
    <>
      {loader && <Loader />}
      <Layout>
        <section className="select_user">
          <ul className="tab_section" id="pills-tab" role="tablist">
            <li role="presentation">
              {" "}
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
                {" "}
                Customer{" "}
              </button>{" "}
            </li>
            <li role="presentation">
              {" "}
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
                {" "}
                Service Provider{" "}
              </button>{" "}
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
              <h2>Get Started Free</h2>
              <p>Enter your details below</p>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <ImgUpload setFileone={setFileone} />
                </div>
                <div className="form_control">
                  <input
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                  />
                  <div className="error_set">
                    {errors.name?.type === "required" && (
                      <p role="alert">* Name is required</p>
                    )}
                  </div>
                </div>
                <div className="form_control">
                  <input
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Eamil"
                  />
                  <div className="error_set">
                    {errors.email?.type === "required" && (
                      <p role="alert">* Email is required</p>
                    )}
                  </div>
                </div>
                <div className="form_control">
                  <input
                    aria-invalid={errors.phonenumber ? "true" : "false"}
                    {...register("phonenumber", { required: true })}
                    type="number"
                    placeholder="Phone Number"
                  />
                  <div className="error_set">
                    {errors.phonenumber?.type === "required" && (
                      <p role="alert">* Phone Number is required</p>
                    )}
                  </div>
                </div>
                <div className="form_control">
                  <input
                    aria-invalid={errors.location ? "true" : "false"}
                    {...register("location", { required: true })}
                    type="text"
                    placeholder="Location"
                  />
                  <div className="error_set">
                    {errors.location?.type === "required" && (
                      <p role="alert">* Location is required</p>
                    )}
                  </div>
                </div>

                <div className="form_control">
                  <input
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register("password", { required: true })}
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="error_set">
                    {errors.password?.type === "required" && (
                      <p role="alert">* Password is required</p>
                    )}
                  </div>
                </div>
                <div className="form_control">
                  <input
                    aria-invalid={errors.confirmpassword ? "true" : "false"}
                    {...register("confirmpassword", { required: true })}
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <div className="error_set">
                    {errors.confirmpassword?.type === "required" && (
                      <p role="alert">* Confirm Password is required</p>
                    )}
                  </div>
                </div>
                <div className="error_set">
                  <p>{passerror}</p>
                </div>
                <div className="confirm_policy">
                  <input
                    ref={checkbox}
                    onChange={(e) => userchack(e)}
                    type="checkbox"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox">
                    I've read and agree to the{" "}
                    <Link to="/termscondition"> Terms of Service</Link> and
                    <Link to="/privacypolicy"> Privacy Policy</Link>.
                  </label>
                </div>
                <div className="submit_btn">
                  <button>Sign Up</button>
                </div>
              </form>
              <div className="register_link">
                <p>
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Register;
