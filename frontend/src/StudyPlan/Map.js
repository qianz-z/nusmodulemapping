export default {
    title: "Study Plan",
    nodes: [
      {
        text: "CS2106",
        url: "",
        fx: -200,
        fy: -200,
      },
      {
        text: "CS2100",
        url: "",
        fx: -400,
        fy: -200,
      },
      {
        text: "CS1010",
        url: "",
        fx: -700,
        fy: -183.5539283546699,
      },
      {
        text: "CS2040C",
        note: "",
        url: "",
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
        fy: -60,
      },
      {
        text: "CS2102",
        fx: -200,
        fy: 100,
        nodes: []
      }
    ],
    connections: [
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
  