import React from "react";
import ProfileLayout from "./ProfileLayout";
import styles from "../../../Assets/Styles/Profile.module.scss";
import { GetTermCondition } from "../../Policy/TermsCondition";
const ServiceTermsConditions = () => {
  return (
    <>
      <ProfileLayout>
        <div className={styles.privacypolicy}>
            <GetTermCondition/>
        </div>
      </ProfileLayout>
    </>
  );
};

export default ServiceTermsConditions;
