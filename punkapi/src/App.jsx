import "./App.scss";
import "./App.css";
import Nav from "./container/Nav/Nav";
import { useState, useEffect } from "react";
import Home from "./container/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerInfo from "./container/BeerInfo/BeerInfo";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beers, setBeers] = useState([]);
  const [beersOrig, setBeersOrig] = useState([]);
  const [abv, setAbv] = useState(false);
  const [year, setYear] = useState(false);
  const [acid, setAcid] = useState(false);

  const url = "https://api.punkapi.com/v2/beers";
  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeersOrig(data);
    setBeers(data);
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAlcohol = beers.filter((alcohol) => {
    return alcohol.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    getBeers();
  }, []);

  useEffect(() => {
    let filteredBeerList = beersOrig;
    if (abv) {
      filteredBeerList = filteredBeerList.filter((beer) => beer.abv > 6);
    }
    if (year) {
      filteredBeerList = filteredBeerList.filter(
        (beer) => beer.first_brewed.slice(3) < 2010
      );
    }
    if (acid) {
      filteredBeerList = filteredBeerList.filter((beer) => beer.ph < 4);
    }
    setBeers(filteredBeerList);
  }, [abv, year, acid, beersOrig]);

  const getAbv = () => {
    setAbv(!abv);
  };
  const getYear = () => {
    setYear(!year);
  };
  const getAcid = () => {
    setAcid(!acid);
  };

  return (
    <Router>
      <div className="main">
        <Nav
          handleInput={handleInput}
          searchTerm={searchTerm}
          // handleCheckBox={handleCheckBox}
          getAbv={getAbv}
          getYear={getYear}
          getAcid={getAcid}
        />

        <Routes>
          <Route index element={<Home filteredAlcohol={beers} />} />
          <Route
            path="/beer/:beerId"
            element={<BeerInfo beersArr={filteredAlcohol} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
