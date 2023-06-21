/* eslint-disable react/no-unescaped-entities */
import { MdEast } from 'react-icons/md';
import { InputComponent } from '../components/Input';
import Button from '../components/Button';
import { LoginData } from '../data';
import { useState } from 'react';

const Register = () => {
  const [values, setValues] = useState(LoginData);
  return (
    <div className=' bg-purple text-white min-h-screen pb-10 pt-[90px] bg-[url(/waveElement.svg)] bg-[right_400px] md:bg-[right_20px] bg-no-repeat'>
      <div className='flex-col md:flex-row flex pt-6 px-4 md:px-9 max-w-screen-2xl m-auto gap-7 md:gap-[3%] items-center justify-center'>
        <div className='text-center items-center md:items-start md:text-left flex flex-col gap-5 md:w-2/5 relative'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className=' text-5xl font-abril leading-[50px] pb-5'>
              Welcome back! <br /> Please log in.
            </h1>
            <img src='/Line.svg' alt='' />
          </div>
          <div className='text-base leading-6'>
            <p>
              access their personalized account on a website. It is a necessary
              step for users to view their personal information, settings, and
              perform various actions related to their account.
            </p>
          </div>

          <div className='absolute -top-5 -left-5'>
            <img src='/circles.svg' alt='' />
          </div>
        </div>
        <div className=' md:w-1/2 '>
          <div className='bg-white px-9 py-8 rounded-xl text-dark-purple'>
            <h1 className=' font-abril  text-3xl '>
              Log into your <span className='text-warning'>Account</span>
            </h1>

            <form action='' className=' mt-8 flex flex-col gap-5'>
              <InputComponent
                type='email'
                name='email'
                value={values.email}
                setValues={setValues}
                title='Email'
                placeholder='LeslieJHicks@jourrapide.com'
              />
              <InputComponent
                type='password'
                name='password'
                value={values.password}
                setValues={setValues}
                title='Password'
              />

              <Button
                title='Sign In With Email'
                _style='font-bold justify-center'
                icon={<MdEast />}
              />
              <div>
                <span className='font-bold text-grey text-sm'>
                  By continuing, i agree to the
                  <span className=' text-purple'>terms of service.</span>
                </span>
                <div className='flex items-center justify-between'>
                  <h3 className='text-base text-dark-purple font-bold'>
                    Login With:
                  </h3>
                  <div className='flex items-center gap-4'>
                    <div className=' p-3 bg-white  shadow-[0px_4px_5px_rgba(84,_169,_193,_0.15)] rounded-xl'>
                      <img src='/google.svg' alt='' />
                    </div>
                    <div className=' p-3 bg-white  shadow-[0px_4px_5px_rgba(84,_169,_193,_0.15)] rounded-xl'>
                      <img src='/fb.svg' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className=' pt-6 text-lg text-grey w-full text-center'>
                <span>
                  Don't have an account?
                  <span className='font-bold text-dark-purple'> Sign Up</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
