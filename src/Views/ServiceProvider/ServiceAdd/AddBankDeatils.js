import React from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Service.module.scss";
import { useNavigate } from "react-router-dom";
const AddBankDeatils = () => {
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
              <h2>Add Your Details</h2>
              <div>
              <form>
                <div className="form_control">
                  <input type="text" placeholder="Bank name" />
                </div>
                <div className="form_control">
                  <input type="text" placeholder="Routing Number" />
                </div>
                <div className="form_control">
                  <input type="text" placeholder="Account Number" />
                </div>
                <div className="submit_btn">
                    <button onClick={handleclick}>Save</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AddBankDeatils;
