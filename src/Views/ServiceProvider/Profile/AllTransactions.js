import React from "react";
import ProfileLayout from "./ProfileLayout";
import styles from "../../../Assets/Styles/Profile.module.scss";
import user from "../../../Assets/Images/user1.png";
const AllTransactions = () => {
  const list = [
    {
      id: 1,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 2,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 3,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 4,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 5,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 6,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 7,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 8,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 9,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
    {
      id: 10,
      img: user,
      name: "Olive Yew",
      date: "05 March 2023",
      earnnig: "$18",
    },
  ];
  return (
    <>
      <ProfileLayout>
        <div className={styles.all_transaction}>
          <h2>Total Earned : $141</h2>
          <div className={styles.transaction_list}>
            <div className="row g-3 justify-content-center">
              {list.map((items, index) => {
                return (
                  <div key={index} className="col-12 col-lg-6">
                    <div className={styles.transaction_box}>
                      <div className="d-flex align-items-center">
                        <img src={user} alt="" />
                        <div className={styles.name_set}>
                          <h5>Olive Yew</h5>
                          <p>05 March 2023</p>
                        </div>
                      </div>
                      <div className={styles.earning_show}>
                        <p>$18</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ProfileLayout>
    </>
  );
};

export default AllTransactions;
