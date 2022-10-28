import "./Beeritem.scss";

const Beeritem = (props) => {
  const { name, image } = props;
  return (
    <div className="beer-container">
      <img className="beer-container_pic" src={image} alt={name} />
      <h1 className="beer-container__name">{name}</h1>
    </div>
  );
};
export default Beeritem;
