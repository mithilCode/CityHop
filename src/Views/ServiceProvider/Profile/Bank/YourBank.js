import React from 'react'
import ProfileLayout from '../ProfileLayout'
import styles from '../../ServiceAdd/Service.module.scss'
import deleteicon from '../../../../Assets/Images/delete_icon.png'
import { Link } from 'react-router-dom'
const YourBank = () => {
  return (
    <><ProfileLayout>
        <div className={styles.home_service_list + " home_service_list"}>
          <div className="container">
            <div className={styles.add_bank_section}>
              <h2>Select Your Bank</h2>
              <div className="row g-3">
                <div className="col-6">
                  <div className={styles.bank_list}>
                    <div className="d-flex align-itmes-start">
                      <input type="radio" name="active" />
                      <div className={styles.bank_detail}>
                        <h5>**** **** **** 2356</h5>
                        <p>Axis Bank</p>
                      </div>
                    </div>
                    <div className={styles.delete_data}>
                      <img src={deleteicon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.bank_list}>
                    <div className="d-flex align-itmes-start">
                      <input type="radio" name="active" />
                      <div className={styles.bank_detail}>
                        <h5>**** **** **** 2356</h5>
                        <p>Axis Bank</p>
                      </div>
                    </div>
                    <div className={styles.delete_data}>
                      <img src={deleteicon} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.addnew_bank}>
                <Link to={'/service/profile/bank/addbank'}>+Add New Bank</Link>
              </div>
              <div className="submit_btn">
                <button>Done</button>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout></>
  )
}

export default YourBank