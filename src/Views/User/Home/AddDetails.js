import React, { useState } from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import "../../../Assets/Styles/Styles.scss";
import styles from "./Home.module.scss";
import { RiDeleteBin6Fill } from "react-icons/ri";
import uploadimg from "../../../Assets/Images/upload_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
const AddDetails = () => {
  const [images, setImages] = useState([]);
  const[data,setDate]=useState("text");
  const dateChange=()=>{
    setDate("datetime-local")
  }
  const navigate = useNavigate();
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => prevImages.concat(images));
  };
  const handleclick = (e,id) => {
    e.preventDefault()
    setImages(images.filter((items,index) => index !== id));
  };
  const handlesave = () => {
    navigate("/user/booking");
  };
  return (
    <>
      <Layout>
          <div className="container">
          <div className="breadcrumb">
              <ul className="ul_list">
                <li className="d-flex align-items-center"><AiFillHome className="home_icon"/><Link to="/user/home">Home</Link><FiChevronRight className="right_icon"/></li>
                <li className="d-flex align-items-center"><Link to="/user/home/hirelist">Hire List</Link><FiChevronRight className="right_icon"/></li>
                <li><Link to="">Add Details</Link></li>
              </ul>
            </div>
        <section className={styles.add_detail_section}>
      
          <h2 className={styles.heading}>Add Details</h2>
          <form>
            <div className={styles.input_frame}>
              <div className={styles.upload_file}>
                <input
                  type="file"
                  className={styles.input_file}
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleImageUpload}
                />
                <img src={uploadimg} alt="" />
              </div>
              <div className="row g-3">
                <div className={styles.upload_img_set}>
                  {images.map((items, index) => {
                    return (
                      <div key={index} className="col-6 col-lg-2">
                        <div key={index} className={styles.upload_img}>
                          <img src={items} alt="" />
                          <button
                            className={styles.remove_btn}
                            onClick={(e) => handleclick(e,index)}
                          >
                            <RiDeleteBin6Fill />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                className={styles.input_frame}
                placeholder="Location"
              />
            </div>
            <div>
              <input
                onChange={dateChange}
                type={data}
                className={styles.input_frame}
                placeholder="Time & date"
              />
            </div>
            <div>
              <textarea
                className={styles.input_frame}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="submit_btn">
              <button onClick={handlesave}>Save</button>
            </div>
          </form>
        </section>
          </div>
      </Layout>
    </>
  );
};

export default AddDetails;
