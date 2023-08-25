import React from "react";
import styles from "./Service.module.scss";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import addbankimg from "../../../Assets/Images/bank_icon.png";
import { useNavigate } from "react-router-dom";
const AddBank = () => {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate("/service/serviceadd/banklinklist");
  }
  return (
    <Layout>
      <section className={styles.home_service_list + " home_service_list"}>
        <div className="container">
          <div className={styles.add_bank_section}>
            <h2>Add Bank</h2>
            <img src={addbankimg} alt="" />
            <div className="submit_btn">
                <button onClick={handleclick}>Add New Bank</button>
            </div>  
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddBank;
