import { useState, useEffect } from "react";

function Cases() {
  const [activeCategory, setActiveCategory] = useState("");

  const [activeColor, setActiveColor] = useState("white");

  const categories = [
    { name: "Design companies", color: "#75fa4c" },
    { name: "Retail", color: "#fffe54" },
  ];

  const cases = [
    { name: "Royal Copenhagen" },
    { name: "Montana" },
    { name: "Inspiration" },
    { name: "BOOZT" },
  ];

  useEffect(() => {}, [activeCategory]);

  function categoryClicked(name) {
    setActiveCategory(name);
    setActiveColor(activeCategory.color);
  }

  return (
    <div>
      <h1 className="header1">Case oversigt</h1>

      {categories.map((c) => (
        <button
          className="categorybutton"
          style={{ backgroundColor: activeColor }}
          onClick={() => categoryClicked(c.name)}
        >
          {c.name}
        </button>
      ))}
      <br />
      <br />
      {cases.map((c) => (
        <div>{c.name}</div>
      ))}
    </div>
  );
}

export default Cases;
