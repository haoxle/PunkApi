import "./SearchBar.scss";
import magnifier from "../../images/magnifier.png";
const Beercards = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <form className="searchBar" name="search">
      <label htmlFor="search"></label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
        value={searchTerm}
      />
      <img className="searchBar__magnify" src={magnifier} alt="magnify" />
    </form>
  );
};

export default Beercards;
