import "./Beeritem.scss";

const Beeritem = (props) => {
  const { name, image, description, abv, brewed, pH } = props;
  return (
    <div className="beer-container">
      <h1 className="beer-container__name">{name}</h1>
      <img className="beer-container_pic" src={image} alt={name} />
      <p className="beer-container_desc">{description}</p>
      <p className="beer-container_abv">Alcohol Volume: {abv}</p>
      <p className="beer-container_brew">{brewed}</p>
      <p>pH: {pH}</p>
    </div>
  );
};
export default Beeritem;
