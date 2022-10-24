import "./App.scss";
import "./App.css";
import Beercards from "./container/Beercards/Beercards";
import Nav from "./container/Nav/Nav";
import { useState, useEffect } from "react";
// import Button from "./components/Button/Button";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);

  const url = "https://api.punkapi.com/v2/beers";
  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckBox = (event) => {
    if (event.target.checked) {
      if (event.target.value === "ABV") {
        setBeers(beers.filter((beer) => beer.abv > 6));
      } else if (event.target.value === "classic") {
        setBeers(beers.filter((beer) => beer.first_brewed.slice(3) < 2010));
      } else if (event.target.value === "ph") {
        setBeers(beers.filter((beer) => beer.ph < 4));
      }
    } else {
      return getBeers();
    }
  };

  const filteredAlcohol = beers.filter((alcohol) => {
    return alcohol.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    getBeers(url);
  }, []);

  return (
    <>
      <div className="container">
        <div className="container_nav">
          <Nav
            handleInput={handleInput}
            searchTerm={searchTerm}
            handleCheckBox={handleCheckBox}
          />
        </div>
        <div className="container_beercards">
          <Beercards beerArr={filteredAlcohol} />
        </div>
      </div>
    </>
  );
};

export default App;
