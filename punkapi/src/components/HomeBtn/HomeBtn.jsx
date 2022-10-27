import "./HomeBtn.scss";

const HomeBtn = ({ onClick }) => {
  return (
    <button className="SlideBtn" onClick={onClick}>
      Home
    </button>
  );
};

export default HomeBtn;
