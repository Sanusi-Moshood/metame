/* eslint-disable react/prop-types */
// import { MdEast } from 'react-icons/md';

const Button = ({
  title,
  bgcolor = 'bg-green',
  color = 'text-white',
  clickHandler,
  _style,
  width,
  icon,
  loading = false,
}) => {
  return (
    <>
      {loading ? (
        ''
      ) : (
        <button
          className={`${bgcolor} ${color} ${width} ${_style} flex items-center gap-4 rounded-lg py-[13px] px-5 text-base`}
          onClick={clickHandler}
        >
          <span>{title}</span>
          {icon}
        </button>
      )}
    </>
  );
};

export default Button;
