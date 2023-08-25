import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "../../../Assets/Styles/Profile.module.scss";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const ProfileLayout = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handellogout=()=>{
    localStorage.removeItem("userdata")
    sessionStorage.removeItem("productLogin");
    navigate("/");
  }
  return (
    <>
      <Layout>
        <section className={styles.profile_section + " profile_section"}>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-3">
              <div className={styles.profile_list + " profile_list"}>
                <ul>
                  <li>
                    <NavLink to="/service/profile/editprofile">
                      Edit Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/editservices">
                      Edit Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/alltransactions">
                    All Transactions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/bank">
                    Your Bank
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/privacypolicy">
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/termsconditions">
                      Terms & Conditions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service/profile/deleteaccount">
                      Delete Account
                    </NavLink>
                  </li>
                  <li>
                    <Link onClick={openModal}>Log Out</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className={styles.profile_menu_content}>
                {props.children}
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            className="comman_modal changepass_modal"
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <div className="comman_modal_bg">
              <button onClick={closeModal} className="close_modal">
                <IoClose />
              </button>
              <div className={styles.logout_btn}>
                <h2>Are You Sure?</h2>
                <p>Are you sure that you want to logout?</p>
                <div className={styles.log_btn + " submit_btn"}>
                  <button onClick={() =>handellogout()}>Exit</button>
                </div>
              </div>
            </div>
          </Modal>
        </section>
      </Layout>
    </>
  );
};

export default ProfileLayout;
