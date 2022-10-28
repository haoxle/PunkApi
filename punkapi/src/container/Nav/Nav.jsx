import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import brewdog from "../../images/brewdog.png";

const Nav = ({ handleInput, searchTerm, getAbv, getYear, getAcid }) => {
  return (
    <div className="navigation">
      <div className="checkbox">
        <div className="checkbox__ABV">
          <label htmlFor="abv" className="checkbox__ABV--label">
            {"Alcohol > 6"}
          </label>
          <input
            className="checkbox__ABV--check"
            type="checkbox"
            value="abv"
            onChange={getAbv}
            id="abv"
          />
        </div>
        <div className="checkbox__Classic">
          <label htmlFor="classic" className="checkbox__Classic--label">
            Classic
          </label>
          <input
            className="checkbox__Classic--check"
            type="checkbox"
            value="setYear"
            onChange={getYear}
            id="classic"
          />
        </div>
        <div className="checkbox__Ph">
          <label htmlFor="ph" className="checkbox__Classic--label">
            {"pH < 4"}
          </label>
          <input
            className="checkbox__Classic--check"
            type="checkbox"
            value="acid"
            onChange={getAcid}
            id="ph"
          />
        </div>
      </div>
      <img className="navigation__logo" src={brewdog} alt="logo" />
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
    </div>
  );
};

export default Nav;
