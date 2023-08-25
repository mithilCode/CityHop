import React from "react";
import styles from "./RequestBox.module.scss";
import Avatar from "react-avatar";
import user from "../../Assets/Images/user1.png";
import chatIcon from "../../Assets/Images/chat_icon.png";
import { SlCalender } from "react-icons/sl";
import { BsClockFill } from "react-icons/bs";
import { IoIosEye } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import mapset from '../../Assets/Images/map.png'

const RequestBox = (props) => {
  return (
    <div className={styles.requestbox}>
      <div className={styles.box_header_set}>
        <div className="d-flex align-items-center">
          <Avatar
            src={user}
            className={styles.profile_img}
            name="Alan Walker"
            size={50}
            round={true}
          ></Avatar>
          <div>
            <p className={styles.user_name}>Alan Walker</p>
            <div>{props.rate}</div>
          </div>
        </div>
        <div onClick={()=>props.handelclick()}>{props.iconset}</div>
      </div>
      <div className={styles.map_set}>
            <img src={mapset} alt="" />
      </div>
      <div className={styles.description}>
        <h5>Home Cleaning</h5>
        <p>
          <b>$21/</b>h
        </p>
      </div>
      <div className={styles.timing}>
        <div className={styles.set_timing}>
          <p>
            <SlCalender />
          </p>
          <p>&nbsp;March 03, 2023</p>
        </div>
        <div className={styles.set_timing}>
          <p>
            <BsClockFill />
          </p>
          <p>&nbsp;9:00 AM</p>
        </div>
      </div>
      <div className={styles.img_view}>
        <button>
          <IoIosEye />
        </button>
      </div>
      <div className={styles.description_text}>
        <p>
          Lorem Ipsum is simply dummy text of the Eas printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default RequestBox;
