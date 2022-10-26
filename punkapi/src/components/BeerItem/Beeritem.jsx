import "./Beeritem.scss";
import InfoButton from "../InfoButton/InfoButton";
import { Link } from "react-router-dom";

const Beeritem = (props) => {
  const { name, image, id } = props;
  return (
    <div className="beer-container">
      <img className="beer-container_pic" src={image} alt={name} />
      <h1 className="beer-container__name">{name}</h1>
      {/* <p className="beer-container_desc">{description}</p>
      <p className="beer-container_abv">Alcohol Volume: {abv}</p>
      <p className="beer-container_brew">{brewed}</p>
      <p>pH: {pH}</p> */}
      <Link to={`/beer/${id}`}>
        <InfoButton label="More Info" />
      </Link>
    </div>
  );
};
export default Beeritem;
