import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout/PreLogin/Layout";
import "../Assets/Styles/Auth.scss";
import { useForm } from "react-hook-form";
import { UpdatePassword } from "../Services/Services";
import { toast } from "react-hot-toast";
const ResetPassword = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, } = useForm();
  const[passerror,setPasserror]=useState();
  const email= sessionStorage.getItem("emailset");
  const onSubmit = async(data) => {
    if(data.Newpassword===data.Confirmpassword){
      let formData = new FormData();
      formData.append("email", email);
      formData.append("new_pass", data.Confirmpassword);
      const apiResponse = await UpdatePassword(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        toast.success(apiResponse.ResponseMsg);
        navigate('/login')
      }else{
        toast.error(apiResponse.ResponseMsg);
      }
    }else{
      setPasserror("* Password does not match")
    }
  };
  return (
    <>
      <Layout>
        <section className="select_user">
          <div className="tab_content">
            <h2>Reset Password</h2>
            <p>
              Your new password must be different from previously used password.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form_control">
                <input
                  {...register("Newpassword")}
                  type="password"
                  placeholder="New password"
                />
              </div>
              <div className="form_control">
                <input
                  {...register("Confirmpassword")}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="error_set">
               
                <p>{passerror}</p>
              </div>
              <div className="submit_btn">
                <button>Save</button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ResetPassword;
