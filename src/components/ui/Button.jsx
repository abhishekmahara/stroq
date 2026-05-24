const Button = ({ text, onClick, func }) => {
  return (
    <div>
      <button
        onClick={onClick || func}
        className="px-12 py-4 rounded-xl bg-neutral-950 text-white border border-black uppercase font-bold duration-200"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
