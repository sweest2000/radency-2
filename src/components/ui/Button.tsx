type ButtonProps = {
  buttonText: string;
};

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <>
      <button className="bg-[#999999] text-white py-2 px-4 rounded">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
