import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkbox from "../../components/Checkbox/Checkbox";

const Nav = (props) => {
  const { handleInput, searchTerm } = props;
  return (
    <div className="navigation">
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
      <div className="checkbox">
        <label className="checkbox__ABV">
          {"High ABV > 6.0%"}
          <Checkbox />
        </label>
        <label>
          Classic
          <Checkbox />
        </label>
        <label>
          {"Acidic > pH 4"}
          <Checkbox />
        </label>
      </div>
    </div>
  );
};

export default Nav;
