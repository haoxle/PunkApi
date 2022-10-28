import "./Beercards.scss";
import Beeritem from "../../components/BeerItem/Beeritem";
import InfoButton from "../../components/InfoButton/InfoButton";
import { Link } from "react-router-dom";
const Beercards = ({ beerArr }) => {
  const displayBeers = beerArr.map((beer) => (
    <div key={beer.id} className="Container">
      <Beeritem
        name={beer.name}
        image={beer.image_url}
        description={beer.description}
        abv={beer.abv}
        brewed={beer.first_brewed}
        pH={beer.ph}
      />
      <Link to={`/PunkApi/beer/${beer.id}`}>
        <InfoButton label="More Info" />
      </Link>
    </div>
  ));

  return <div className="main-content">{displayBeers}</div>;
};
export default Beercards;
