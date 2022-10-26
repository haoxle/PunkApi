import "./Home.scss";
import scotland from "../../images/scotland.jpg";
import Button from "../../components/Button/Button";
import clockwork from "../../images/clockwork.jpg";
import main from "../../images/main2.jpg";
import brewdoglogo from "../../images/brewdoglogo.png";
import Beercards from "../../container/Beercards/Beercards";

const Home = ({ filteredAlcohol }) => {
  return (
    <>
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
          <img className="history-Right__Img" src={clockwork} alt="scotland" />
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
              We have always worked long-term and sustainably. We are committed
              to the environment, the business and the people around us.
              Sustainable work is included in everything we do.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
