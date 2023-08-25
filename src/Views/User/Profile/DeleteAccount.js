import React, { useState } from "react";
import ProfileLayout from "./ProfileLayout";
import styles from "../../../Assets/Styles/Profile.module.scss";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
const DeleteAccount = () => {
  const [show, setHide] = useState(false);
  const [check, setChack] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const DeleteReson = [
    {
      id: 1,
      reson: "Costs to much",
    },
    {
      id: 2,
      reson: "Not sure why",
    },
    {
      id: 3,
      reson: "Problem not solved",
    },
    {
      id: 4,
      reson: "Bug issues",
    },
    {
      id: 5,
      reson: "Other",
    },
  ];
  const handleChange = (e, reson, id) => {
    setChack(id);
    if (reson === "Other") {
      setHide(true);
    } else {
      setHide(false);
    }
  };
  return (
    <>
      <ProfileLayout>
        <div className={styles.delete_account}>
          <h2 className="py-3">Delete Account</h2>
          <ul>
            {DeleteReson.map((items) => {
              return (
                <li
                  className={check === items.id ? styles.active : ""}
                  key={items.id}
                >
                  <p>{items.reson}</p>
                  <input
                    name="delete_reason"
                    checked={check === items.id}
                    value={items.id}
                    onChange={(e) => handleChange(e, items.reson, items.id)}
                    type="radio"
                  />
                </li>
              );
            })}
          </ul>
          <div className="form_control">
            {show && <textarea placeholder="Type Reason"></textarea>}
          </div>
          <div className="submit_btn">
            <button onClick={openModal}>Delete My Account</button>
          </div>
        </div>
      </ProfileLayout>
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
          <div className={styles.delete_acc}>
            <h2>Are You Sure?</h2>
            <p>Are you sure that you want to Delete ?</p>
            <div className={styles.delete_btn + " submit_btn"}>
              <button>Delete My Account</button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteAccount;
