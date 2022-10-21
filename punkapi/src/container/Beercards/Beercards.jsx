import "./Beercards.scss";
import Beeritem from "../../components/BeerItem/Beeritem";

const Beercards = (props) => {
  const { beerArr } = props;

  const displayBeers = beerArr.map((beer, index) => (
    <Beeritem
      key={beer.name + " " + index}
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
