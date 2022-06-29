import React from "react";

let x = 100;
let y = 100;
const oldMap = {
    nodes: [
      {
        text: "CS2106",
        fx: -200,
        fy: -200,
      },
      {
        text: "CS2100",
        fx: -400,
        fy: -200,
      },
      {
        text: "CS1010",
        fx: -700,
        fy: -183.5539283546699,
      },
      {
        text: "CS2040C",
        fx: -400,
        fy: -60.07462866512333,
      },
      {
        text: "CS1231",
        fx: -700,
        fy: 39.035120728630204,
      },
      {
        text: "CS2113T",
        fx: -200,
        fy: -100,
      },
      {
        text: "CS2102",
        fx: -200,
        fy: 100,
        nodes: []
      },
      {
        text: "CS2105",
        fx: -200,
        fy: 0,
      }
    ],
    connections: [
      {
        source: "CS2040C",
        target: "CS2105",
      },
      {
        source: "CS2100",
        target: "CS2106",
      },
      {
        source: "CS1010",
        target: "CS2040C",
      },
      {
        source: "CS2040C",
        target: "CS2113T",
      },
      {
        source: "CS2040C",
        target: "CS2102",
      },
      {
        source: "CS1231",
        target: "CS2102",
      },
      {
        source: "CS1010",
        target: "CS2100",
      }
    ]
  };

function Map (props) {
  const { Mods } = props; 

  return (
    Mods.map((item))
  )
}

let item = "test item";
const test = (item) = {
  
  nodes:[{text: item, fx: x, fy: y}], connections:[]
  
}

export default test;