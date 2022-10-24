import "./Beercards.scss";
import Beeritem from "../../components/BeerItem/Beeritem";

const Beercards = ({ beerArr }) => {
  const displayBeers = beerArr.map((beer) => (
    <Beeritem
      key={beer.id}
      name={beer.name}
      image={beer.image_url}
      description={beer.description}
      abv={beer.abv}
      brewed={beer.first_brewed}
    />
  ));

  return <div className="main-content">{displayBeers}</div>;
};
export default Beercards;
