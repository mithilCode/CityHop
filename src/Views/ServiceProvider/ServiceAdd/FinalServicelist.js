import React, { useState } from "react";
import styles from "./Service.module.scss";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import editicon from "../../../Assets/Images/edit_icon.png";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const FinalServicelist = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editlist, setEditlist] = useState("");
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
  }
  const serviceList = [
    {
      id: 1,
      name: "Home Improvement",
      services: [
        {
          name: "Home Cleaning",
          rate: "$20/h",
        },
        {
          name: "Painter",
          rate: "$20/h",
        },
      ],
    },
    {
      id: 2,
      name: "Wellness - Beautician",
      services: [
        {
          name: "Home Care",
          rate: "$20/h",
        },
        {
          name: "Home Cleaning",
          rate: "$20/h",
        },
        {
          name: "Home Cleaning",
          rate: "$20/h",
        },
      ],
    },
    {
      id: 3,
      name: "Events",
      services: [
        {
          name: "Event Model",
          rate: "$20/h",
        },
        {
          name: "Photographer",
          rate: "$20/h",
        },
      ],
    },
    {
      id: 4,
      name: "Lessons",
      services: [
        {
          name: "Cooking Class",
          rate: "$20/h",
        },
        {
          name: "Guitar Teachers",
          rate: "$20/h",
        },
        {
          name: "Swimming Classes",
          rate: "$20/h",
        },
      ],
    },
    {
      id: 5,
      name: "More - Automotive",
      services: [
        {
          name: "Travel",
          rate: "$20/h",
        },
      ],
    },
  ];
  const handelClick = (e, id) => {
    setIsOpen(true);
    setEditlist(id.name);
  };
  const handlenext=()=>{
    navigate('/service/serviceadd/addbank')
  }
  return (
    <>
      <Layout>
        <section className={styles.home_service_list + " home_service_list"}>
          <div className="container">
            <div className={styles.home_service_text}>
              <h2>FIND THE BEST SERVICE PROVIDER</h2>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
            <div className={styles.finalservice_list}>
              {serviceList.map((item, index) => {
                return (
                  <div key={index} className="row">
                    <h5 className="py-2">
                      <b>{item.name}</b>
                    </h5>
                    {item.services.map((items, index) => {
                      return (
                        <div key={index} className="col-6 col-lg-3">
                          <div className={styles.service_box}>
                            <div className={styles.service_name}>
                              <p>{items.name}</p>
                              <h5>{items.rate}</h5>
                            </div>
                            <div onClick={(e) => handelClick(e, items)}>
                              <img src={editicon} alt="" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className={styles.submit_btn + " submit_btn"}>
              <button onClick={handlenext}>Done</button>
            </div>
          </div>
        </section>
      </Layout>
      <Modal
        isOpen={modalIsOpen}
        className="comman_modal service_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2 className="py-3">Add Your Price</h2>
            <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
            <div className={styles.modal_content}>
              <p>{editlist}</p>
              <div className="form_control">
                <input type="text" placeholder="Add Price" />
              </div>
              <div className="submit_btn">
                <button>Done</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FinalServicelist;
