import React from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Home.module.scss";
import { Grid } from "@mui/material";
import Avatar from "react-avatar";
import user from "../../../Assets/Images/user1.png";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
const HireList = () => {
  const navigate = useNavigate();
  const splist = [
    {
      id: 1,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 2,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 3,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 4,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 5,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 6,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 7,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 8,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
    {
      id: 9,
      name: "Alan Walker",
      rating: 4.8,
      servicePrice: "$20/h",
    },
  ];
  const handleclick = () => {
    navigate("/user/home/adddetails");
  };
  return (
    <>
      <Layout>
        <div className="container">
          <div className="breadcrumb">
            <ul className="ul_list">
              <li className="d-flex align-items-center">
                <AiFillHome className="home_icon" />
                <Link to="/user/home">Home</Link>
                <FiChevronRight className="right_icon" />
              </li>
              <li>
                <Link to="">Hire List</Link>
              </li>
            </ul>
          </div>
          <section className={styles.home_service_list + " home_service_list"}>
            <div className={styles.home_service_text}>
              <h2>Hire the list of customer service</h2>
              <p className={styles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                .
              </p>
            </div>
            <div>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {splist.map((items, index) => {
                  return (
                    <Grid key={index} item xs={12}  sm={6} md={4}>
                      <div className={styles.servicelist_box}>
                        <div className={styles.dispaly_set}>
                          <Avatar
                            src={user}
                            className={styles.sp_img}
                            name="Alan Walker"
                            size={50}
                            round={true}
                          />
                          <div className={styles.name_set}>
                            <h4>Alan Walker</h4>
                            <p className={styles.total_review}>
                              <FaStar className={styles.review_icon} /> 4.8
                              Rating
                            </p>
                            <p className={styles.payout_rate}>
                              <b>$20</b>/h
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={handleclick}
                          className={styles.hire_btn}
                        >
                          Hire
                        </button>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HireList;
