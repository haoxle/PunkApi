import "./App.scss";
import "./App.css";
import Beercards from "./container/Beercards/Beercards";
import beers from "./data/beer";

const App = () => {
  return <Beercards beerArr={beers} />;
};

export default App;
