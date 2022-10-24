import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const Nav = ({ handleInput, searchTerm, handleCheckBox }) => {
  return (
    <div className="navigation">
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
      <div className="checkbox">
        <label className="checkbox__ABV">
          {"High ABV > 6.0%"}
          <input type="checkbox" value="ABV" onChange={handleCheckBox} />
        </label>
        <label>
          Classic
          <input type="checkbox" value="classic" onChange={handleCheckBox} />
        </label>
        <label>
          {"Acidic > pH 4"}
          <input type="checkbox" value="ph" onChange={handleCheckBox} />
        </label>
      </div>
    </div>
  );
};

export default Nav;
