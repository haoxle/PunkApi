import "./Beeritem.scss";

const Beeritem = (props) => {
  const { name, image } = props;
  return (
    <div className="beer-container">
      <img className="beer-container_pic" src={image} alt={name} />
      <h1 className="beer-container__name">{name}</h1>
      {/* <p className="beer-container_desc">{description}</p>
      <p className="beer-container_abv">Alcohol Volume: {abv}</p>
      <p className="beer-container_brew">{brewed}</p>
      <p>pH: {pH}</p> */}
    </div>
  );
};
export default Beeritem;
