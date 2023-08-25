import React from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Home.module.scss";
import RequestBox from "../../../Components/RequestBox/RequestBox";
import { AiFillStar } from "react-icons/ai";
import chatIcon from "../../../Assets/Images/chat_icon.png";
const ServiceHome = () => {
  return (
    <>
      <Layout>
        <section className={styles.home_section}>
          <div className="container">
            <div className="pb-5">
              <h2>Request List service Provider</h2>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                .
              </p>
            </div>
            <div className="row g-3">
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="list_box">
                  <RequestBox
                  />
                  <div className="action_btn">
                    <button className="accept_btn">Accept</button>
                    <button className="decline_btn">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServiceHome;
