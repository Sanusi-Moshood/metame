import { useState } from 'react';
import { MdCheckCircle, MdEast } from 'react-icons/md';
import { InputComponent } from '../../components/Input';
import Button from '../../components/Button';
import { RegisterData } from '../../data';
import PersonalInfo from './PersonalInfo';

const Register = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(RegisterData);
  const [EmailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState({
    number: false,
    length: false,
    uppercase: false,
    lowercase: false,
    text: '',
  });

  const ValidateInput = () => {
    const email = values.email;
    const password = values.password;

    // Reset error states
    setEmailError('');
    setPasswordError({
      number: false,
      length: false,
      uppercase: false,
      lowercase: false,
      text: '',
    });

    let isValid = true;

    // Email check
    if (!(email.length > 0 && email.includes('@'))) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Password check
    if (password.length < 8) {
      setPasswordError((prev) => ({
        ...prev,
        length: true,
      }));
      isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError((prev) => ({
        ...prev,
        uppercase: true,
      }));
      isValid = false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError((prev) => ({
        ...prev,
        lowercase: true,
      }));
      isValid = false;
    }
    if (!/\d/.test(password)) {
      setPasswordError((prev) => ({
        ...prev,
        number: true,
      }));
      isValid = false;
    }
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password)
    ) {
      setPasswordError((prev) => ({
        ...prev,
        text: 'Password does not meet complexity requirements',
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    const isValid = ValidateInput();
    console.log(passwordError);

    if (!isValid) {
      // Proceed to the next step or perform any necessary actions
      setStep(step + 1);
    }
  };

  const handleContinue = () => {
    // Proceed to the next step or perform any necessary actions
    setStep(step + 1);
    console.log(step);
  };

  return (
    <div className=' bg-purple text-white min-h-screen pb-10 pt-[90px] bg-[url(/waveElement.svg)] bg-[right_400px] md:bg-[right_20px] bg-no-repeat'>
      {step < 3 && (
        <div className='flex-col md:flex-row flex pt-6 px-4 md:px-9 max-w-screen-2xl m-auto gap-7 md:gap-[3%] items-center justify-center'>
          <div className='text-center items-center md:items-start md:text-left flex flex-col gap-5 md:w-2/5 w-full relative'>
            <div className='flex flex-col items-center md:items-start'>
              <h1 className=' text-5xl font-abril leading-[50px] pb-5'>
                Join the Tennis Revolution - The Ultimate Tennis Community
                Awaits!
              </h1>
              <img src='/Line.svg' alt='' />
            </div>
            <div className='text-base leading-6'>
              <p>
                The game is scored using a system of points, games, and sets. A
                point is awarded for each time a player wins a rally (a series
                of back-and-forth shots). Games are won by the first player or
                team to win four points, with a two-point lead. Sets are won by
                the first player or team to win six games.
              </p>
            </div>

            <div className='absolute -top-5 -left-5'>
              <img src='/circles.svg' alt='' />
            </div>
          </div>
          <div className=' md:w-1/2 w-full'>
            {step === 1 && (
              <div className='bg-white px-9 py-8 rounded-xl text-dark-purple'>
                <h1 className=' font-abril  text-3xl '>
                  Create your profile, get rated, and
                  <span className='text-warning'> start playing!</span>
                </h1>

                <form
                  action=''
                  className=' mt-8 flex flex-col gap-5'
                  onSubmit={handleSubmit}
                >
                  <div>
                    <InputComponent
                      type='text'
                      name='email'
                      value={values.email}
                      setValues={setValues}
                      title='Email'
                      placeholder='LeslieJHicks@jourrapide.com'
                      _err={`${EmailError != '' && 'border-error'}`}
                    />
                    <span className=' text-error text-sm'>{EmailError}</span>
                  </div>

                  <div>
                    <InputComponent
                      type='password'
                      name='password'
                      value={values.password}
                      setValues={setValues}
                      title='Password'
                      _style={`${passwordError.text != '' && 'border-error'}`}
                    />
                    {passwordError.text != '' && (
                      <p className=' text-sm'>
                        <span className='text-error'>{passwordError.text}</span>{' '}
                        <br />
                        <span
                          className={`${
                            passwordError.length ? 'text-error' : 'text-success'
                          }`}
                        >
                          {' '}
                          <MdCheckCircle className='inline  ' />8 Char
                        </span>
                        <span
                          className={`${
                            passwordError.uppercase
                              ? 'text-error'
                              : 'text-success'
                          }`}
                        >
                          <MdCheckCircle className='inline ml-2' />1 Uppercase
                        </span>
                        <span
                          className={`${
                            passwordError.lowercase
                              ? 'text-error'
                              : 'text-success'
                          }`}
                        >
                          {' '}
                          <MdCheckCircle className='inline ml-2' />1 Lowercase
                        </span>
                        <span
                          className={`${
                            passwordError.number ? 'text-error' : 'text-success'
                          }`}
                        >
                          {' '}
                          <MdCheckCircle className='inline ml-2' />1 Number
                        </span>
                      </p>
                    )}
                  </div>
                  <Button
                    title='Sign Up With Email'
                    _style='font-bold justify-center'
                    icon={<MdEast />}
                  />

                  <div>
                    <span className='font-bold text-grey text-sm '>
                      By continuing, i agree to the
                      <span className=' text-purple'>terms of service.</span>
                    </span>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-base text-dark-purple font-bold'>
                        Register With:
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
                      Already have an account?
                      <span className='font-bold text-dark-purple'>
                        {' '}
                        Sign In
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            )}
            {step === 2 && (
              <PersonalInfo
                setValues={setValues}
                values={values}
                handleContinue={handleContinue}
              />
            )}
          </div>
        </div>
      )}
      {step === 3 && (
        <div className='bg-white px-11 m-auto mt-11 py-11 rounded-xl text-dark-purple max-w-[900px] '>
          <span className='text-base font-bold text-warning'>GET STARTED</span>
          <h1 className=' font-abril  text-3xl '>
            Tell us about your tennis experience
          </h1>

          <form
            action=''
            className=' mt-8 flex flex-col gap-5'
            onSubmit={handleSubmit}
          >
            <div>
              <h3 className='text-base font-bold text-dark-purple'>
                What type or level of tennis have you played? (Select all that
                apply) *
              </h3>
            </div>

            <Button
              title='Sign Up With Email'
              _style='font-bold justify-center'
              icon={<MdEast />}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
