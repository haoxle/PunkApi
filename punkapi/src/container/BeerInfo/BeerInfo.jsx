import "./BeerInfo.scss";
import { useParams } from "react-router";

const BeerInfo = ({ beersArr }) => {
  console.log(beersArr.id);
  const { beerId } = useParams();
  console.log(beerId);

  const specificBeer = beersArr.find((beer) => beer.id === beerId);
  const {
    name,
    tagline,
    description,
    image_url,
    abv,
    ph,
    ingredients,
    food_pairing,
  } = specificBeer;

  return (
    <article>
      <img src={image_url} alt="" />
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <h2>{ph}</h2>
      <h2>{abv}</h2>
      <h2>{ingredients}</h2>
      <h2>{abv}</h2>
      <h2>{food_pairing}</h2>
      <p>{description}</p>
    </article>
  );
};
export default BeerInfo;
