import React, { useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../Assets/Images/logo.png";
import Avatar from "react-avatar";
import { Link, NavLink } from "react-router-dom";
import user from "../../Assets/Images/user.png";
import { CgProfile } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import { FaBell } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Tokendata from "../../Common/Tokendata";
const Header = () => {
  let userid = Tokendata.UserData;
  return <>{userid.user_type && userid.user_type === "Customer" ? <UserHeader /> : <ServiceHeader />}
  </>;
};
const UserHeader = () => {
  const [menu, setMenu] = useState(false);
  const menuOpen = () => {
    setMenu(true);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_profile + " container"}>
        <div className={styles.logo}>
          <img src={logo} alt="CityHop" />
        </div>
        <div className="d-flex align-items-center">
          <div className={styles.notification_set}>
            <p
              className={styles.notification_icon}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              {" "}
              <FaBell />{" "}
            </p>
            <span className={styles.active}></span>
          </div>
          <div
            className={styles.notification_tab + " offcanvas offcanvas-end"}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className={styles.offcanvas_header}>
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Notifications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={styles.offcanvas_body}>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>Your request has been accepted by Alan wlaker lorem</p>
                  <span>12 min ago</span>
                </div>
              </div>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>Your request has been accepted by Alan wlaker lorem</p>
                  <span>12 min ago</span>
                </div>
              </div>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>
                    Your request has been accepted by Alan wlaker Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quo enim
                    consectetur hic ratione atque. Quisquam vitae ex neque nam
                    deserunt doloremque vero iure sed eligendi et, dolore esse
                    molestias magni.
                  </p>
                  <span>12 min ago</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setMenu(false);
              }}
            >
              <div className={styles.profile_set}>
                <div className={styles.nameset}>
                  <h5>Alan Walker</h5>
                  <p>Welcome Back!</p>
                </div>

                <div className={styles.profile_open}>
                  <Avatar
                    onClick={menuOpen}
                    src={user}
                    className={styles.profile_img}
                    name="Alan Walker"
                    size={50}
                    round={true}
                  />
                  {menu && (
                    <div className={styles.open_menu}>
                      <Link to="/user/profile/editprofile">
                        <CgProfile /> Profile
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <nav className="header_navbar">
        <ul>
          <li>
            <NavLink to="/user/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/user/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/user/review">Review</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const ServiceHeader = () => {
  const [menu, setMenu] = useState(false);

  const menuOpen = () => {
    setMenu(true);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_profile + " container"}>
        <div className={styles.logo}>
          <img src={logo} alt="CityHop" />
        </div>
        <div className="d-flex align-items-center">
          <div className={styles.notification_set}>
            <p
              className={styles.notification_icon}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <FaBell />
            </p>
            <span className={styles.active}></span>
          </div>
          <div
            className={styles.notification_tab + " offcanvas offcanvas-end"}
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className={styles.offcanvas_header}>
              <h5 className="offcanvas-title" id="offcanvasRightLabel">
                Notifications
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={styles.offcanvas_body}>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>Your request has been accepted by Alan wlaker lorem</p>
                  <span>12 min ago</span>
                </div>
              </div>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>Your request has been accepted by Alan wlaker lorem</p>
                  <span>12 min ago</span>
                </div>
              </div>
              <div className={styles.notification_section}>
                <p>
                  <TiTick className={styles.tick_icon} />
                </p>
                <div>
                  <h5>Request Accepted</h5>
                  <p>
                    Your request has been accepted by Alan wlaker Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Quo enim
                    consectetur hic ratione atque. Quisquam vitae ex neque nam
                    deserunt doloremque vero iure sed eligendi et, dolore esse
                    molestias magni.
                  </p>
                  <span>12 min ago</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setMenu(false);
              }}
            >
              <div className={styles.profile_set}>
                <div className={styles.nameset}>
                  <h5>Andrea Piacquadio</h5>
                  <p>Welcome Back!</p>
                </div>
                <div className={styles.profile_open}>
                  <Avatar
                    onClick={menuOpen}
                    src={user}
                    className={styles.profile_img}
                    name="Alan Walker"
                    size={50}
                    round={true}
                  />
                  {menu && (
                    <div className={styles.open_menu}>
                      <Link to="/service/profile/editprofile">
                        <CgProfile /> Profile
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </div>
      </div>
      <nav className="header_navbar">
        <ul>
          <li>
            <NavLink to="/service/servicehome">Home</NavLink>
          </li>
          <li>
            <NavLink to="/service/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/service/review">Review</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
