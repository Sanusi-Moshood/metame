/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { MdEast } from 'react-icons/md';
import Button from '../../components/Button';
import { InputComponent, RadioComponent } from '../../components/Input';
import { useState } from 'react';
import PopUp from '../../components/PopUp';

const PersonalInfo = ({ setValues, values, handleContinue }) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [showPop, setShowPop] = useState(false);

  const handlePopUp = () => {
    setShowPopUp((prev) => !prev);
  };
  const handlePop = () => {
    setShowPop((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePop();
  };

  return (
    <div className='bg-white px-9 py-8 rounded-xl text-dark-purple'>
      <h1 className=' font-abril  text-3xl '>Personal information.</h1>

      <form
        action=''
        className=' mt-8 flex flex-col gap-5'
        onSubmit={handleSubmit}
      >
        <input type='image' src='' alt='' />

        <div className='flex gap-4'>
          <InputComponent
            type='text'
            title='First Name'
            name={'firstName'}
            value={values.firstName}
            placeholder='John'
            _style='!w-1/2'
            setValues={setValues}
          />
          <InputComponent
            type='text'
            title='Last Name'
            name={'lastName'}
            value={values.lastName}
            placeholder='Doe'
            _style='!w-1/2'
            setValues={setValues}
          />
        </div>
        <div>
          <label htmlFor='' className=' text-lg font-bold text-dark-purple'>
            Birthday
          </label>
        </div>
        <InputComponent
          type='number'
          title='Phone number'
          name='number'
          value={values.number}
          placeholder='09999999999'
          className='w-1/2'
          setValues={setValues}
        />
        <InputComponent
          type='text'
          title='Location'
          name='location'
          value={values.location}
          placeholder='2492 Nickel Road Los Angeles, CA 90017'
          className='w-1/2'
          setValues={setValues}
        />
        <div>
          <label htmlFor='' className=' text-lg font-bold text-dark-purple'>
            Gender
          </label>
          <div className='flex gap-4'>
            <RadioComponent
              setValues={setValues}
              title='Gender'
              name='gender'
              value={values.gender}
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
              ]}
              _style='w-1/2'
            />
          </div>
        </div>
        <span>
          Are you a parent signing up for a child?
          <span
            className='font-bold text-purple cursor-pointer'
            onClick={handlePopUp}
          >
            {' '}
            Click here.
          </span>
        </span>
        <Button
          title='Continue'
          _style='font-bold justify-center'
          icon={<MdEast />}
        />
      </form>
      {showPop && (
        <PopUp
          title='Get your MPR rating started'
          setShowPopUp={setShowPop}
          button={{ title: 'Next', click: handleContinue, icon: <MdEast /> }}
          content={
            <div>
              <p className=''>
                Take a minute to answer a few quick question to receive your
                estimated UTR Rating. It's the first step to enjoying more
                level-based play. Your coach or club will also be able to match
                you up with players close to your level!
              </p>
            </div>
          }
        />
      )}
      {showPopup && (
        <PopUp
          title='For parents signing up for a child'
          setShowPopUp={setShowPopUp}
          content={
            <div>
              <ul className=' list-disc '>
                <li>
                  Please fill out the profile information as your child, not you
                  (child's name, location, etc.)
                </li>
                <li>
                  If you are registering more than one child, you must create a
                  separate account for each
                </li>

                <li>
                  Questions? Contact our{' '}
                  <span className='font-bold text-purple'>Support Team.</span>
                </li>
              </ul>
            </div>
          }
        />
      )}
    </div>
  );
};

export default PersonalInfo;
