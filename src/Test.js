import React from "react";
import ListAccordion from "./Components/ListAccordion/ListAccordion";
import listicon from "./Assets/Images/homeim.png";
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

const Test = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="container">
      {servicelist.map((items, index) => {
        console.log(items);
        console.log("{servicelist.map  items:", items.sublist.name);
        return (
       
            <ListAccordion heading={items.name} expanded={expanded} rowspacing={1} columnspacing={{ xs: 1, sm: 2, md: 3 }} sublistName={items.sublist.name}  id={index} handleChange={handleChange(index)} panel={index}  />
        );
      })}
    </div>
  );
};

export default Test;
