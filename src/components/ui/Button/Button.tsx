import { useActions } from '../../../hooks/useActions';

export type ButtonProps = {
  buttonText: string;
};

const Button = ({ buttonText }: ButtonProps) => {
  const { toggleModal } = useActions();
  return (
    <>
      <button
        className='bg-[#999999] text-white py-2 px-4 rounded'
        onClick={() => toggleModal(null)}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
