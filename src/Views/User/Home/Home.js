import React from "react";
import Layout from "../../../Components/Layout/PostLogin/Layout";
import styles from "./Home.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import listicon from "../../../Assets/Images/homeim.png";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
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
    navigate("/user/home/hirelist");
  };
  return (
    <>
      <Layout>
        <section className={styles.home_service_list + " home_service_list"}>
          <div className="container">
            <div className={styles.home_service_text}>
              <h2>FIND THE BEST CUSTOMER SERVICE</h2>
              <p className={styles.description}>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                .{" "}
              </p>
            </div>
            <div className={styles.list_set + " list_set"}>
              {servicelist.map((itmes, index) => {
                return (
                  <Accordion
                    expanded={expanded === itmes.id}
                    onChange={handleChange(itmes.id)}
                    key={index}
                    className={
                      styles.main_list_accroding + " main_list_accroding"
                    }
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
                      <div
                        className={
                          styles.list_heading_set + " list_heading_set"
                        }
                      >
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
                              <Grid
                                onClick={handleclick}
                                item
                                xs={12}
                                sm={6}
                                key={index}
                              >
                                <div className={styles.sublist}>
                                  <p className={styles.sublist_name}>
                                    {subitems.name}
                                  </p>
                                  <span>
                                    <FiChevronRight
                                      className={styles.right_arrow}
                                    />
                                  </span>
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
