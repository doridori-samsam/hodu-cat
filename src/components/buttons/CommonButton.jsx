function CommonButton({ children, onClick, rest }) {
  return (
    <button
      className="w-fit px-[1.5rem] py-[0.5rem] rounded-full font-spoqaBold text-white bg-accent hover:bg-accentHover"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default CommonButton;
