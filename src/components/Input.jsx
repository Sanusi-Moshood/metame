/* eslint-disable react/prop-types */

export const InputComponent = ({
  title,
  type,
  name,
  value,
  placeholder,
  setValues,
  _style,
  err,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <fieldset className={`relative w-auto ${_style}`}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${
          err && 'border-error'
        } ${err} w-full border-slate-300 border border-opacity-40 pb-3 pt-8 pl-6  rounded-lg text-dark-purple bg-light shadow-[0px_4px_15px_rgba(0,_209,_178,_0.05)]`}
      />
      <label
        htmlFor={name}
        className='absolute top-3 left-5 text-grey font-bold text-sm'
      >
        {title}
      </label>
    </fieldset>
  );
};

export const SelectComponent = ({
  title,
  name,
  value,
  options,
  setValues,
  _style,
  err,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <fieldset className={`relative w-auto ${_style}`}>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`${err} w-full border-dark-purple border border-opacity-40 pb-3 pt-8 pl-6 rounded-lg text-dark-purple bg-light shadow-[0px_4px_15px_rgba(0,_209,_178,_0.05)]`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className='absolute top-3 left-5 text-grey font-bold text-sm'
      >
        {title}
      </label>
    </fieldset>
  );
};

export const RadioComponent = ({
  name,
  value,
  options,
  setValues,
  _style,
  err,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {options.map((option) => (
        <fieldset
          key={option.value}
          className={` ${_style} py-3 text-sm border-slate-300 border border-opacity-40  pl-6  rounded-lg text-dark-purple bg-light shadow-[0px_4px_15px_rgba(0,_209,_178,_0.05)]`}
        >
          <label className='flex items-center'>
            <input
              type='radio'
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              className={`${err} mr-2 accent-purple w-6 h-6`}
            />
            {option.label}
          </label>
        </fieldset>
      ))}
    </>
  );
};
