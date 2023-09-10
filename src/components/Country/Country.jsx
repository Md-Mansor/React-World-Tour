import { useState } from "react";
import "./Country.css";
const country = ({ country }) => {
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name:{name.common === "Israel" ? "Kullanger" : name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <button onClick={handleVisited}>visited</button>
      {visited ? "I Have Visited this country" : "I want to visit"}
    </div>
  );
};

export default country;
