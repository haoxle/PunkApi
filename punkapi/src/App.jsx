import "./App.scss";
import "./App.css";
import Beercards from "./container/Beercards/Beercards";
import Nav from "./container/Nav/Nav";
// import beers from "./data/beer";
import { useState, useEffect } from "react";
// import Button from "./components/Button/Button";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const [ABV, setABV] = useState(false);
  const [classic, setClassic] = useState(false);
  const [ph, setPh] = useState(false);

  const url = "https://api.punkapi.com/v2/beers";
  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const getABV = () => {
    setABV(!ABV);
  };
  const getClassic = () => {
    setClassic(!classic);
  };
  const getPh = () => {
    setPh(!ph);
  };
  // console.log(highAlcohol);
  const filteredAlcohol = beers.filter((alcohol) => {
    if (ABV) {
      return alcohol.abv > 6.0;
    } else if (classic) {
      return alcohol.first_brewed.slice(3) < 2010;
    } else if (ph) {
      return alcohol.ph > 4;
    } else return alcohol.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="container_nav">
          <Nav
            handleInput={handleInput}
            searchTerm={searchTerm}
            getABV={getABV}
            ABV={ABV}
            getClassic={getClassic}
            classic={classic}
            getPh={getPh}
            ph={ph}
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
