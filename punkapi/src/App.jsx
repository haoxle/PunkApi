import "./App.scss";
import "./App.css";
import Beercards from "./container/Beercards/Beercards";
import Nav from "./container/Nav/Nav";
import { useState, useEffect } from "react";
import scotland from "./images/scotland.jpg";
import Button from "./components/Button/Button";
import clockwork from "./images/clockwork.jpg";
import main from "./images/main2.jpg";
import brewdoglogo from "./images/brewdoglogo.png";
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

        <section>
          <div className="beer">
            <img className="beer-img" src={main} alt="main" />
            <img className="beer-logo" src={brewdoglogo} alt="logo" />
            <h1 className="beer-title">
              Changing the world, one glass at a time.
            </h1>
            <div className="beer-btn">
              <Button label="Explore Full Range" />
            </div>
          </div>
        </section>
        <section>
          <div className="container_beercards">
            <Beercards beerArr={filteredAlcohol} />
          </div>
          <div className="history">
            <div className="history-Content">
              <h1 className="history-Content__Header">
                MADE IN THE HEART OF SCOTLAND
              </h1>
              <p className="history-Content__Para">
                Made in Scotland, taking four of the finest ingredients; malt,
                hops, yeast and water, coming together in harmony to create beer
                for all{" "}
              </p>
            </div>
            <img
              className="history-Right__Img"
              src={clockwork}
              alt="scotland"
            />
          </div>
        </section>
        <section>
          <div className="sustainable">
            <img className="sustainable__img" src={scotland} alt="scotland" />
            <div className="sustainable__content">
              <h1 className="sustainable__header">
                COMMITTED TO PEOPLE AND THE PLANET
              </h1>
              <h1 className="sustainable__para">
                We have always worked long-term and sustainably. We are
                committed to the environment, the business and the people around
                us. Sustainable work is included in everything we do.
              </h1>
            </div>
          </div>
        </section>
        <Routes>
          <Route
            path="/beer/:beerId"
            element={<BeerInfo beerArr={filteredAlcohol} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
