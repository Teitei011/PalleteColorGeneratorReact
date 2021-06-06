import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const generateRandomColor = () => {
    let hexCode = "0123456789ABCDEF";
    let Color = "#";

    for (let i = 0; i < 6; i++) {
      Color += hexCode[Math.floor(Math.random() * 16)];
    }

    setColor(Color);
    let colors = new Values(Color).all(10);
    setList(colors);
  };

  return (
    <>
      <section className="container">
        <h3>Gerador de Tons</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit" onSubmit={handleSubmit}>
            submit
          </button>
        </form>

        <div />

        <button className="btn" type="button" onClick={generateRandomColor}>
          Random Color
        </button>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
