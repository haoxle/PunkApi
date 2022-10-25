import "./InfoButton.scss";

const InfoButton = ({ onClick, label }) => {
  return (
    <div className="fill">
      <button className="fill-btn" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default InfoButton;
