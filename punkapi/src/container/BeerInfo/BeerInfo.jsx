import "./BeerInfo.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
const BeerInfo = ({ beers }) => {
  const { beerId } = useParams();
  const currentBeer = beers.filter((beer) => beer.id === parseFloat(beerId));
  const { image_url, name, description, ph, abv, first_brewed, food_pairing } =
    currentBeer[0];
  return (
    <div className="info">
      <img className="info-img" src={image_url} alt={name} />
      <div className="info-content">
        <h1 className="info-content-alcohol">{name}</h1>
        <p>
          {" "}
          <span className="info-content__title">Description: </span>
          {description}
        </p>
        <p>
          <span className="info-content__title">pH: </span>
          {ph}
        </p>
        <p>
          <span className="info-content__title">ABV:</span> {abv}
        </p>
        <p>
          <span className="info-content__title">Brewed: </span>
          {first_brewed}
        </p>
        <p>
          <span className="info-content__title">Goes well with: </span>
          {food_pairing.join(", ")}
        </p>
        <div className="home-button">
          <Link to="/">
            <HomeBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BeerInfo;
