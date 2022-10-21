import "./Nav.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

const Nav = (props) => {
  const { handleInput, searchTerm } = props;
  return <SearchBar handleInput={handleInput} searchTerm={searchTerm} />;
};

export default Nav;
