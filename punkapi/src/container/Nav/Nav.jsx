import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Checkbox from "../../components/Checkbox/Checkbox";

const Nav = ({
  handleInput,
  searchTerm,
  getABV,
  ABV,
  classic,
  getClassic,
  getPh,
  ph,
}) => {
  return (
    <div className="navigation">
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
      <div className="checkbox">
        <label className="checkbox__ABV">
          {"High ABV > 6.0%"}
          <input type="checkbox" value={ABV} onClick={getABV} />
        </label>
        <label>
          Classic
          <input type="checkbox" value={classic} onClick={getClassic} />
        </label>
        <label>
          {"Acidic > pH 4"}
          <input type="checkbox" value={ph} onClick={getPh} />
        </label>
      </div>
    </div>
  );
};

export default Nav;
