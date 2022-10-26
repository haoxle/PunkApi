import "./BeerInfo.scss";
import { useParams } from "react-router";

const BeerInfo = ({ beersArr }) => {
  const { beerId } = useParams();
  const shallow = beersArr.find((beer) => beer.id);
  console.log(shallow);
  return <h2>{shallow.name}</h2>;
};
export default BeerInfo;
