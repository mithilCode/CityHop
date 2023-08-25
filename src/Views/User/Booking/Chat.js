import React, { useCallback, useEffect, useRef } from "react";
import Textarea from "react-expanding-textarea";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Booking.module.scss";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import user from "../../../Assets/Images/user1.png";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = () => {
  const textareaRef = useRef(null);
  const navigate=useNavigate()
  const handleChange = useCallback((e) => {
  }, []);
  const handleclick=()=>{
    navigate("/user/booking")
  }
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  return (
    <>
      <Layout>
        <section className={styles.chat_section}>
          <div className={styles.chat_window}>
            <div className={styles.chat_header}>
              <HiOutlineChevronLeft onClick={handleclick} className={styles.back_icon} />
              <Avatar src={user} size={50} round={true}/>
              <h5>Alan Athaway</h5>
            </div>
            <ScrollToBottom className={styles.user_chat}>
              <div className={styles.receive_chat}>
                <img src={user} alt="" />
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, inventore sapiente. Enim non similique atque eos temporibus amet corporis sapiente odit repudiandae eligendi eius deserunt praesentium, quod facilis! Totam, ratione? </p>
              </div>
              <div className={styles.send_chat}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eligendi numquam ab porro harum nisi vel impedit tempore, reiciendis dignissimos ex. Veniam nostrum dolorem dolor iste! Odit voluptates aspernatur eveniet? </p>
                <img src={user} alt="" />
              </div>
              <div className={styles.receive_chat}>
                <img src={user} alt="" />
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, inventore sapiente. Enim non similique atque eos temporibus amet corporis sapiente odit repudiandae eligendi eius deserunt praesentium, quod facilis! Totam, ratione? </p>
              </div>
              <div className={styles.send_chat}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eligendi numquam ab porro harum nisi vel impedit tempore, reiciendis dignissimos ex. Veniam nostrum dolorem dolor iste! Odit voluptates aspernatur eveniet? </p>
                <img src={user} alt="" />
              </div>
              <div className={styles.receive_chat}>
                <img src={user} alt="" />
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, inventore sapiente. Enim non similique atque eos temporibus amet corporis sapiente odit repudiandae eligendi eius deserunt praesentium, quod facilis! Totam, ratione? </p>
              </div>
              <div className={styles.send_chat}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eligendi numquam ab porro harum nisi vel impedit tempore, reiciendis dignissimos ex. Veniam nostrum dolorem dolor iste! Odit voluptates aspernatur eveniet? </p>
                <img src={user} alt="" />
              </div>
              <div className={styles.receive_chat}>
                <img src={user} alt="" />
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, inventore sapiente. Enim non similique atque eos temporibus amet corporis sapiente odit repudiandae eligendi eius deserunt praesentium, quod facilis! Totam, ratione? </p>
              </div>
              <div className={styles.send_chat}>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eligendi numquam ab porro harum nisi vel impedit tempore, reiciendis dignissimos ex. Veniam nostrum dolorem dolor iste! Odit voluptates aspernatur eveniet? </p>
                <img src={user} alt="" />
              </div>
            </ScrollToBottom>
            <div className={styles.text_area}>
              <Textarea
                className={styles.text_area_box}
                id="my-textarea"
                maxheight="300px"
                name="pet[notes]"
                onChange={handleChange}
                placeholder="Enter additional notes..."
                ref={textareaRef}
              />
              <p className={styles.send_btn}><MdSend/></p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Chat;
