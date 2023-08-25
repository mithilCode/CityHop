import React from "react";
import styles from "./Review.module.scss";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ReviewBox = (props) => {
  return (
    <div className={styles.review_box}>
      <div className="d-flex align-items-center">
        <img src={props.user} alt="" />
        <div>
          <p>{props.username}</p>
          <Rating readonly initialRating={props.rating} emptySymbol={<AiOutlineStar className={styles.blank_rate} />} fullSymbol={<AiFillStar className={styles.fill_rate} />} />
        </div>
      </div>
      <div className={styles.review_desc}>
        <p>{props.review}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
