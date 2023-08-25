import React from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Service.module.scss";
import deleteicon from "../../../Assets/Images/bin.png";
import { Link, useNavigate } from "react-router-dom";
const BankLinkList = () => {
  const navigate=useNavigate()
  const handleclick=()=>{
      navigate("/service/servicehome")
  }
  return (
    <>
      <Layout>
        <section className={styles.home_service_list + " home_service_list"}>
          <div className="container">
            <div className={styles.add_bank_section}>
              <h2>Your Bank</h2>
              <div className="row g-3">
                <div className="col-6">
                  <div className={styles.bank_list}>
                    <div className="d-flex align-itmes-start">
                      <input type="radio" name="active" />
                      <div className={styles.bank_detail}>
                        <h5>**** **** **** 2356</h5>
                        <p>Axis Bank</p>
                      </div>
                    </div>
                    <div className={styles.delete_data}>
                      <img src={deleteicon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.bank_list}>
                    <div className="d-flex align-itmes-start">
                      <input type="radio" name="active" />
                      <div className={styles.bank_detail}>
                        <h5>**** **** **** 2356</h5>
                        <p>Axis Bank</p>
                      </div>
                    </div>
                    <div className={styles.delete_data}>
                      <img src={deleteicon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addnew_bank}>
                <Link to={'/service/serviceadd/addbankdeatils'}>+Add New Bank</Link>
              </div>
              <div className="submit_btn">
                <button onClick={handleclick}>Done</button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BankLinkList;
