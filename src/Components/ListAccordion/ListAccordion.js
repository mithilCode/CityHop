import React from "react";
import styles from "./ListAccordion.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Grid } from "@mui/material";
const ListAccordion = (props) => {
  return (
      <Accordion
        expanded={props.expanded === props.id}
        onChange={props.handleChange}
        className={styles.main_list_accroding + " main_list_accroding"}
      >
        <AccordionSummary
          expandIcon={
            <FiChevronDown className={styles.expandIcon + " expandIcon"} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className={styles.list_heading_set + " list_heading_set"}>
            <span className={styles.list_name + " list_name"}>
              <h2>{props.heading}</h2>
            </span>
          </div>
        </AccordionSummary>
        <AccordionDetails >
            <Grid
              container
              rowSpacing={props.rowspacing}
              columnSpacing={props.columnspacing}
            >
              <Grid item xs={12} sm={6}>
                <div className={styles.sublist}>
                  <p className={styles.sublist_name}>{props.sublistName}</p>
                  <span>
                    <FiChevronRight className={styles.right_arrow} />
                  </span>
                </div>
              </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
  );
};

export default ListAccordion;
