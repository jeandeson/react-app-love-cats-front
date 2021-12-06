const Button = ({ onClick, type, text }) => {
  return (
    <div>
      <button onClick={onClick} type={type}>
        {text}
      </button>
    </div>
  );
};

export default Button;
