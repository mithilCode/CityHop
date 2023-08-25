import React, { useState } from "react";
import styles from "../../../Assets/Styles/Profile.module.scss";
import ProfileLayout from "./ProfileLayout";
import listicon from "../../../Assets/Images/homeim.png";
import Modal from "react-modal";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import edit from "../../../Assets/Images/edit.png";
import { FiChevronDown } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const EditServices = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [priceshow, setPriceshow] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const servicelist = [
    {
      id: 1,
      name: "Home Improvement",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
    {
      id: 2,
      name: "Wellness Beautician",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
    {
      id: 3,
      name: "Event",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
    {
      id: 4,
      name: "Lessons",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
    {
      id: 5,
      name: "Neighborhood Services  ",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
    {
      id: 6,
      name: "More Automotive",
      img: listicon,
      sublist: [
        {
          id: 1,
          name: "Contractor / Handyman",
        },
        {
          id: 2,
          name: "Curtain, Blinds & Railing",
        },
        {
          id: 3,
          name: "Electrician",
        },
        {
          id: 4,
          name: "Painter",
        },
        {
          id: 5,
          name: "Home Cleaning",
        },
        {
          id: 6,
          name: "Interior Designer",
        },
        {
          id: 7,
          name: "Mover (Local < 100Km)",
        },
        {
          id: 8,
          name: "Plumber",
        },
      ],
    },
  ];
  const handleclick = () => {
    setIsOpen(true);
  };
  const handleChack = (e, index) => {
    if (e.target.checked === true) {
      setPriceshow(true);
    } else {
      setPriceshow(false);
    }
  };
  return (
    <>
      <ProfileLayout>
        <div className={styles.edit_services}>
          {servicelist.map((itmes, index) => {
            return (
              <Accordion
                expanded={expanded === itmes.id}
                onChange={handleChange(itmes.id)}
                key={index}
                className={styles.accordion_styles}
              >
                <AccordionSummary
                  expandIcon={
                    <FiChevronDown
                      className={styles.expandIcon + " expandIcon"}
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <div className={styles.heading_set}>
                    <img src={itmes.img} alt="" />
                    <span className={styles.list_name + " list_name"}>
                      {itmes.name}
                    </span>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      {itmes.sublist.map((subitems, index) => {
                        return (
                          <Grid item xs={12} key={index}>
                            <div className={styles.sublist}>
                              <div className={styles.sublist_header}>
                                <p className={styles.sublist_name}>
                                  {subitems.name}
                                </p>
                                <div className={styles.checkbox_set}>
                                  <input
                                    type="checkbox"
                                    onChange={(e) => handleChack(e, index)}
                                  />
                                </div>
                              </div>
                              {priceshow && (
                                <div className="price_set">
                                  <p>$20/h</p>
                                  <img
                                    src={edit}
                                    onClick={handleclick}
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          })}
          <div className="submit_btn">
            <button>Submit</button>
          </div>
        </div>
      </ProfileLayout>
      <Modal
        isOpen={modalIsOpen}
        className="comman_modal service_modal"
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="comman_modal_bg">
          <button onClick={closeModal} className="close_modal">
            <IoClose />
          </button>
          <div>
            <h2 className="py-3">Add Your Price</h2>
            <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
            <div className={styles.modal_content}>
              <p>Home Cleaning</p>
              <div className="form_control">
                <input type="text" placeholder="Add Price" />
              </div>
              <div className="submit_btn">
                <button>Done</button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditServices;
