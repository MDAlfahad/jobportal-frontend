const Button = (props, className) => {
  return (
    <button
      className={`px-3 py-1.5 md:px-6 md:py-2 bg-secondary rounded-sm text-[10px] lg:text-[14px] hover:bg-textcolor font-medium text-white  transition duration-300`}
      onClick={props.onClick}
      type="props.type"
    >
      {props.text}
    </button>
  );
};

export default Button;