import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import brewdog from "../../images/brewdog.png";

const Nav = ({ handleInput, searchTerm, handleCheckBox }) => {
  return (
    <div className="navigation">
      <div className="checkbox">
        <div className="checkbox__ABV">
          <label className="checkbox__ABV--label">{"Alcohol > 6.0%"}</label>
          <input
            className="checkbox__ABV--check"
            type="checkbox"
            value="ABV"
            onChange={handleCheckBox}
          />
        </div>
        <div className="checkbox__Classic">
          <label className="checkbox__Classic--label">Classic</label>
          <input
            className="checkbox__Classic--check"
            type="checkbox"
            value="classic"
            onChange={handleCheckBox}
          />
        </div>
        <div className="checkbox__Ph">
          <label className="checkbox__Classic--label">{"Acidic > pH 4"}</label>
          <input
            className="checkbox__Classic--check"
            type="checkbox"
            value="ph"
            onChange={handleCheckBox}
          />
        </div>
      </div>
      <img className="navigation__logo" src={brewdog} alt="logo" />
      <SearchBar handleInput={handleInput} searchTerm={searchTerm} />
    </div>
  );
};

export default Nav;
