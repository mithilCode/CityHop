import React, { useState } from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Booking.module.scss";
import Modal from "react-modal";
import RequestBox from "../../../Components/RequestBox/RequestBox";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import chatIcon from "../../../Assets/Images/chat_icon.png";
import user from "../../../Assets/Images/user1.png";
import raticon from "../../../Assets/Images/rate_icon.png";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Rating from "react-rating";
const ServiceBooking = () => {
  
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState();
  function openModal(modalName) {
    setIsOpen(modalName);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleclick = () => {
    navigate("/service/booking/chat");
  };
  return (
    <>
      <Layout>
        <section className={styles.booking_list + " booking_list"}>
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Pending
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Completed
                </button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="row g-3">
                  <div className="col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={handleclick}
                        iconset={<img src={chatIcon} alt="" />}
                        btnsuccess={"Arrive"}
                        btnend={"Leave"}
                      />
                      <div className={styles.action_btn}>
                        <button className={styles.accept_btn}>Arrive</button>
                        <button className={styles.decline_btn}>Leave</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="row g-3">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                      
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                      
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                      
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                      
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="list_box">
                      <RequestBox
                        handelclick={() => openModal("reviewModal")}
                        rate={
                          <>
                            <p className={styles.rating}>
                              <span>
                                <AiFillStar />
                              </span>
                              <b>4.8 Rating</b>
                            </p>
                          </>
                        }
                      
                        iconset={<img src={raticon} alt="" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Modal
        isOpen={modalIsOpen === "reviewModal"}
        className="comman_modal review_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <div className={styles.profile_view}>
              <img src={user} alt="" />
              <div className={styles.rating_style}>
                <p>Alan Athaway</p>
                <Rating
                  initialRating={3}
                  readonly
                  emptySymbol={
                    <AiOutlineStar className={styles.content_text} />
                  }
                  fullSymbol={<AiFillStar className={styles.fill_rate} />}
                />
              </div>
            </div>
            <div className={styles.review}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ServiceBooking;
