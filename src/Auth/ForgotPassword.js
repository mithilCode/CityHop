import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/PreLogin/Layout";
import '../Assets/Styles/Auth.scss';
import { useForm } from "react-hook-form";
import { ForgotPasswordset } from "../Services/Services";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  sessionStorage.removeItem("phone");
  const { register, handleSubmit, } = useForm();
  const navigate=useNavigate()
  const onSubmit=async(data)=>{
    let formData = new FormData();
    formData.append("email", data.email);
    const apiResponse = await ForgotPasswordset(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      toast.success(apiResponse.ResponseMsg);
      sessionStorage.setItem("emailset",data.email);
      sessionStorage.removeItem("phone");
      navigate("/otpauth");
    }else{
      toast.error(apiResponse.ResponseMsg);
    }
  }
  return (
    <>
      <Layout>
        <section className="select_user">
            <div className="tab_content">
              <h2>Forgot Password</h2>
              <p>Please enter your email address to receive a verification code.</p>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_control">
                  <input
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                  />
                </div>
                <div className="submit_btn">
                  <button>Send</button>
                </div>
              </form>
              <div className="register_link">
                <p>
                You remember your password? <Link to={"/login"}>Sign In</Link>
                </p>
              </div>
            </div>
        </section>
      </Layout>
    </>
  );
};

export default ForgotPassword;
