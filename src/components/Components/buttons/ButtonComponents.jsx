const Button = (props, className) => {
  return (
    <button
      className={`px-6 py-2 bg-secondary rounded-sm text-[12px] lg:text-[14px] hover:bg-textcolor font-semibold text-white  transition duration-300`}
      onClick={props.onClick}
      type="props.type"
    >
      {props.text}
    </button>
  );
};

export default Button;