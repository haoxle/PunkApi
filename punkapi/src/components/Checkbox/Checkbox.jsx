import "./Checkbox.scss";
const Checkbox = ({ ABV, getABV }) => {
  // const { handleInput, searchTerm } = props;
  return <input type="checkbox" value={ABV} onClick={getABV} />;
};

export default Checkbox;
