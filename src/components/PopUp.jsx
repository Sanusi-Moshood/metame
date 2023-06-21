/* eslint-disable react/prop-types */
import Button from './Button';
import { MdClose } from 'react-icons/md';

const PopUp = ({ title, content, setShowPopUp, button = false }) => {
  const closePopUp = () => {
    setShowPopUp((prev) => !prev);
  };

  const handleClick = () => {
    button.click(); // Invoke the handleContinue function
  };

  return (
    <div className='w-full h-full bg-dark-purple bg-opacity-80 top-0 left-0 fixed z-[99]'>
      <div className='w-full h-full flex items-center first-letter justify-center'>
        <div className=' py-7 px-11 border-t-4 rounded-md border-warning bg-white max-w-[647px] relative'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className=' text-[40px] font-abril leading-[50px] pb-5'>
              {title}
            </h1>
            <img src='/Line2.svg' alt='' />
          </div>
          <div className=' pt-4 pb-8 ml-5 text-grey text-base'>{content}</div>
          {button && (
            <div onClick={handleClick}>
              <Button title={button.title} icon={button.icon} />
            </div>
          )}
          <div
            onClick={closePopUp}
            className=' p-2 rounded-full bg-violet-200 absolute top-4 right-8'
          >
            <MdClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
