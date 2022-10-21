import "./App.scss";
import "./App.css";
import Beercards from "./container/Beercards/Beercards";
import Nav from "./container/Nav/Nav";
import beers from "./data/beer";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlcohol = beers.filter((alcohol) =>
    alcohol.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="container">
        <div className="container_nav">
          <Nav handleInput={handleInput} searchTerm={searchTerm} />
        </div>
        <div className="container_beercards">
          <Beercards beerArr={filteredAlcohol} />
        </div>
      </div>
    </>
  );
};

export default App;
