import { useEffect, useState } from "react";
import "./Button.css";

const Button = ({ onClick, type, text }) => {
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    function setButton() {
      setButtonText(text);
    }
    setButton();
  }, [text]);
  return (
    <div className="btn-container">
      <button className="btn" onClick={onClick} type={type}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
