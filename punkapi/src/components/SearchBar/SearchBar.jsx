import "./SearchBar.scss";

const Beercards = (props) => {
  const { searchTerm, handleInput } = props;
  return (
    <form>
      <label htmlFor="search"></label>
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search..."
        onInput={handleInput}
        value={searchTerm}
      />
    </form>
  );
};

export default Beercards;
