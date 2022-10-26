import "./Button.scss";

const Button = ({ onClick, label }) => {
  return (
    <button className="SlideBtn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
