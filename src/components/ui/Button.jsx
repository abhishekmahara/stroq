

const Button = (props) => {
  const { text, func ,onClick } = props;
  return (
    <div>
      <button
        onClick={onClick ||func}
        className="px-12 py-4 rounded-md bg-orange-600 backdrop-blur-lg text-white border border-orange-500 font-bold py-2 px-4 rounded OrangeShadow duration-200"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
