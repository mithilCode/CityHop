import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-modal";
import styles from "./ChangePassword.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const ChangePassword = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handlechage=(e,items)=>{
    setShow(!show)
      if(items.id){
      }else{
      }
  }
  const formData = [
    {
      id: 1,
      placeholder: "Current Password",
      default: "text",
    },
    {
      id: 2,
      placeholder: "New Password",
      default: "password",
    },
    {
      id: 3,
      placeholder: "Confirm New Password",
      default: "text",
    },
  ];
  return (
    <>
      <div onClick={openModal}>{props.mainname}</div>

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
          <div className={styles.modal_name}>
            <h2 className="py-3">{props.Modalname}</h2>
          </div>
          <form>
            {formData.map((items, index) => {
              return (
                <div key={index} className={styles.password_icon + " form_control"}>
                  <input type={show ? items.default : "password"} name={props.name} placeholder={items.placeholder} />
                  <span onClick={(e)=>handlechage(e,items)}> {show ? <AiFillEye /> : <AiFillEyeInvisible />} </span>
                </div>
              );
            })}
            <div className="submit_btn">
              <button>Update</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ChangePassword;
