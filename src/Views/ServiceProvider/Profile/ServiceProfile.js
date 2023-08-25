import React from "react";
import { useState } from "react";
import ImgUpload from "../../../Components/ImgUpload/ImgUpload";
import ProfileLayout from "./ProfileLayout";
import styles from "../../../Assets/Styles/Profile.module.scss";
import ChangePassword from "../../../Components/ChangePassword/ChangePassword";
const ServiceProfile = () => {
  const [fileone, setFileone] = useState("");
  return (
    <>
      <ProfileLayout>
        <div className={styles.service_profile}>
          <form>
            <div className={styles.profile_set}>
              <div className={styles.profile_img}>
              <ImgUpload setFileone={setFileone} />
              </div>
              <div className={styles.profile_detail}>
                <h3>Andrea Piacquadio</h3>
                <p>andreapiacquadio10@gmail.com</p>
              </div>
            </div>
            <div className="form_control">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form_control">
              <input type="text" placeholder="Eamil" />
            </div>
            <div className="form_control">
              <input type="text" placeholder="Phone number" />
            </div>
            <div className="form_control">
              <textarea placeholder="Address " />
            </div>
            <div className={styles.change_password}>
              <ChangePassword
                mainname={"Changes Password"}
                value={""}
                Modalname={"Changes Password"}
              />
            </div>
            <div className="submit_btn">
              <button>Save</button>
            </div>
          </form>
        </div>
      </ProfileLayout>
    </>
  );
};

export default ServiceProfile;
