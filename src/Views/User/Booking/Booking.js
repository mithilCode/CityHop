import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Rating from "react-rating";
import Avatar from "react-avatar";
import styles from "./Booking.module.scss";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import Layout from "../../../Components/Layout/PostLogin/Layout";

import { FaStar } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsClockFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdPayment } from "react-icons/md";

import profileimg from "../../../Assets/Images/user1.png";
import chaticon from "../../../Assets/Images/chat_icon.png";
import deleteicon from "../../../Assets/Images/delete_icon.png";
import rateicon from "../../../Assets/Images/rate_icon.png";
import bin from "../../../Assets/Images/bin.png";
import user2 from "../../../Assets/Images/user2.png";
import mapimg from "../../../Assets/Images/map.png";
const Booking = () => {
  const [advancedExampleOpen, setAdvancedExampleOpen] = useState(false);
  const pto = [
    {
      id: 0,
      src: "https://thumbs.dreamstime.com/b/beautiful-sunset-over-water-tree-silhouette-nature-landscape-amazing-orange-yellow-sky-night-scene-wallpaper-birds-flying-154424473.jpg",
    },
    {
      id: 1,
      src: "https://thumbs.dreamstime.com/b/trees-against-starry-sky-milky-way-long-exposure-photograph-grain-space-background-night-landscape-alone-mountain-141370648.jpg",
    },
    {
      id: 3,
      src: "https://funylife.in/wp-content/uploads/2023/01/15_Good-night-images-www.funylife.in_-1.jpg",
    },
  ];

  const navigate = useNavigate();
  const requestlist = [
    {
      id: 1,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
    {
      id: 2,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
    {
      id: 3,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
    {
      id: 4,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
    {
      id: 5,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
    {
      id: 6,
      name: "Alan Walker",
      rating: 4.8,
      service: "Home Cleaning",
      hourlyrate: "$21",
      date: "March 03, 2023",
      Time: "9:00 AM",
      description:
        "Lorem Ipsum is simply dummy text of the Eas printing and typesetting industry.",
    },
  ];
  const [modalIsOpen, setIsOpen] = useState();
  function openModal(modalName) {
    setIsOpen(modalName);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const redirectChat = () => {
    navigate("/user/booking/chat");
  };
  return (
    <>
      <div>
        <Lightbox
          open={advancedExampleOpen}
          close={() => setAdvancedExampleOpen(false)}
          slides={pto}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          carousel={{ preload: 1 }}
        />
      </div>
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
                  Request
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
                  Pending
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
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
                <div className="row g-4">
                  {requestlist.map((items, index) => {
                    return (
                      <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className={styles.request_list_box}>
                          <div className={styles.profile}>
                            <Avatar
                              className={styles.profile_img}
                              src={profileimg}
                              name="Alan Walker"
                              size={50}
                              round={true}
                            />
                            <div className={styles.sp_name}>
                              <h4>Alan Walker</h4>
                              <p>
                                <FaStar />
                                4.8 Rating
                              </p>
                            </div>
                          </div>
                          <div className={styles.map_set}>
                            <img src={mapimg} alt="" />
                          </div>
                          <div className={styles.service_description}>
                            <div className={styles.service_name}>
                              <h5>Home Cleaning</h5>
                              <p>
                                <b>$21/</b>h
                              </p>
                            </div>
                            <div className={styles.timing}>
                              <p>
                                <SlCalender /> March 03, 2023
                              </p>
                              <p>
                                <BsClockFill /> 9:00 AM
                              </p>
                            </div>
                            <div className={styles.uploaded_img}>
                              <button
                                onClick={() => setAdvancedExampleOpen(true)}
                              >
                                <AiFillEye />
                              </button>
                            </div>

                            <div className={styles.service_desc}>
                              Lorem Ipsum is simply dummy text of the Eas
                              printing and typesetting industry.
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div
                  className="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="row g-4">
                    {requestlist.map((items, index) => {
                      return (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                          <div className={styles.request_list_box}>
                            <div className="header_set">
                              <div className={styles.profile}>
                                <Avatar
                                  className={styles.profile_img}
                                  src={profileimg}
                                  name="Alan Walker"
                                  size={50}
                                  round={true}
                                />
                                <div className={styles.sp_name}>
                                  <h4>Alan Walker</h4>
                                  <p>
                                    <FaStar />
                                    4.8 Rating
                                  </p>
                                </div>
                              </div>
                              <div className={styles.user_action}>
                                <img
                                  onClick={redirectChat}
                                  src={chaticon}
                                  className={styles.messege_icon}
                                  alt=""
                                />
                                <img
                                  onClick={() => openModal("deleteModal")}
                                  src={deleteicon}
                                  className={styles.messege_icon}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.map_set}>
                              <img src={mapimg} alt="" />
                            </div>
                            <div className={styles.service_description}>
                              <div className={styles.service_name}>
                                <h5>Home Cleaning</h5>
                                <p>
                                  <b>$21/</b>h
                                </p>
                              </div>
                              <div className={styles.timing}>
                                <p>
                                  <SlCalender /> March 03, 2023
                                </p>
                                <p>
                                  <BsClockFill /> 9:00 AM
                                </p>
                              </div>
                              <div className={styles.uploaded_img}>
                                <button
                                  onClick={() => setAdvancedExampleOpen(true)}
                                >
                                  <AiFillEye />
                                </button>
                              </div>
                              <div className={styles.service_desc}>
                                Lorem Ipsum is simply dummy text of the Eas
                                printing and typesetting industry.
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <div className="row g-4">
                  {requestlist.map((items, index) => {
                    return (
                      <div key={index} className="col-12 col-md-6 col-lg-4">
                        <div className={styles.request_list_box}>
                          <div className="header_set">
                            <div className={styles.profile}>
                              <Avatar
                                className={styles.profile_img}
                                src={profileimg}
                                name="Alan Walker"
                                size={50}
                                round={true}
                              />
                              <div className={styles.sp_name}>
                                <h4>Alan Walker</h4>
                                <p>
                                  <FaStar />
                                  4.8 Rating
                                </p>
                              </div>
                            </div>
                            <div className={styles.user_action}>
                              <img
                                src={rateicon}
                                className={styles.messege_icon}
                                alt=""
                                onClick={() => openModal("watchreviewModal")}
                              />
                              <button  className={styles.payment_btn} onClick={() => openModal("paymentModal")}>Pay</button>
                            </div>
                          </div>
                          <div className={styles.map_set}>
                            <img src={mapimg} alt="" />
                          </div>
                          <div className={styles.service_description}>
                            <div className={styles.service_name}>
                              <h5>Home Cleaning</h5>
                              <p>
                                <b>$21/</b>h
                              </p>
                            </div>
                            <div className={styles.timing}>
                              <p className="d-flex align-items-center">
                                <SlCalender />March 03, 2023
                              </p>
                              <p className="d-flex align-items-center"> 
                                <BsClockFill />9:00 AM
                              </p>
                            </div>
                            <div className={styles.uploaded_img}>
                              <button
                                onClick={() => setAdvancedExampleOpen(true)}
                              >
                                <AiFillEye />
                              </button>
                            </div>
                            <div className={styles.service_desc}>
                              Lorem Ipsum is simply dummy text of the Eas
                              printing and typesetting industry.
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>

      <Modal
        isOpen={modalIsOpen === "deleteModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2>Delete Request</h2>
            <p>Are you sure you want to cancel your request? You have to pay $5 as a cancellation charge.</p>
            <div className="submit_btn">
              <button onClick={() => openModal("paymentModal")}>Next</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "paymentModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2>Job completed</h2>
            <p>Your service provider has completed their job, Compensate them with correct amount.</p>
            <div className={styles.amount_show}>
              <p>Home Cleaning</p>
              <p>$41</p>
            </div>
            <div className="submit_btn">
              <button onClick={() => openModal("addcardModal")}>Next</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "addcardModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2>Add Card</h2>
            <form>
              <div className="form_control">
                <input type="text" placeholder="Card holder’s name" />
              </div>
              <div className="form_control">
                <input type="text" placeholder="Card number" />
              </div>
              <div className="form_control d-flex">
                <input
                  type="number"
                  className="me-2"
                  placeholder="Expiry date"
                />
                <input type="number" placeholder="CVV code" />
              </div>
            </form>
            <div className="submit_btn">
              <button onClick={() => openModal("cardDetails")}>Save</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "cardDetails"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2 className="py-4">Credit / Debit Card</h2>
            <div className="row g-3">
              <div className="col-6">
                <div className={styles.card_details}>
                  <div className="d-flex align-itmes-start">
                    <input type="radio" name="selectCard" />
                    <div>
                      <h5>Detif Yathaway </h5>
                      <p>**** **** **** 5236</p>
                    </div>
                  </div>
                  <div className={styles.delete_data}>
                    <img src={bin} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={styles.card_details}>
                  <div className="d-flex align-itmes-start">
                    <input type="radio" name="selectCard" />
                    <div>
                      <h5>Detif Yathaway </h5>
                      <p>**** **** **** 5236</p>
                    </div>
                  </div>
                  <div className={styles.delete_data}>
                    <img src={bin} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.addnew_card}>
              <p onClick={() => openModal("addcardModal")}> +Add New</p>
            </div>
            <div className="submit_btn">
              <button onClick={() => openModal("successModal")}>Next</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "successModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2>Payment Successful!</h2>
            <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
            <div className="submit_btn">
              <button onClick={() => openModal("reviewModal")}>Done</button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "reviewModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2 className="py-4">Write a Review</h2>
            <div className={styles.profile_view}>
              <img src={user2} alt="" />
              <div className={styles.rating_style}>
                <p>Alan Athaway</p>
                <Rating
                  initialRating={3}
                  emptySymbol={<AiOutlineStar className={styles.blank_rate} />}
                  fullSymbol={<AiFillStar className={styles.fill_rate} />}
                />
              </div>
            </div>
            <textarea
              name=""
              id=""
              className={styles.write_review}
              placeholder="Write your experience feedback"
            ></textarea>
            <div className="submit_btn">
              <button onClick={() => openModal("paymentModal")}>
                Subit Review
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen === "watchreviewModal"}
        className="comman_modal delete_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div className={styles.profile_view + " py-4"}>
            <img src={user2} alt="" />
            <div className={styles.rating_style}>
              <p>Alan Athaway</p>
              <Rating
                initialRating={3}
                readonly
                emptySymbol={<AiOutlineStar className={styles.blank_rate} />}
                fullSymbol={<AiFillStar className={styles.fill_rate} />}
              />
            </div>
          </div>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ea
            aliquid, alias animi quis libero rem dolorum iure nobis. Placeat
            doloribus ipsum quaerat aliquam quia, amet et consequatur tenetur
            maiores?
          </p>
          <div className="submit_btn"></div>
        </div>
      </Modal>
    </>
  );
};

export default Booking;
