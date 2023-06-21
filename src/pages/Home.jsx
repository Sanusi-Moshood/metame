import { MdEast } from 'react-icons/md';

const Home = () => {
  return (
    <div className=' bg-purple text-white min-h-screen pb-10 pt-[90px] bg-[url(/waveElement.svg)] bg-[right_400px] md:bg-[right_20px] bg-no-repeat'>
      <div className='w-full text-center bg-warning top-0 absolute mt-[66.656px] md:mt-[90px]'>
        <div className='w-full relative p-3'>
          <h1 className=' font-bold text-base text-white'>
            MPR Tennis Launches Pickleball Software and UTRP Rating
            <span className=' text-dark-purple'> Read More</span>
          </h1>
          {/* <button className='absolute right-3 top-3 text-2xl text-dark-purple'>
            <MdCancel />
          </button> */}
        </div>
      </div>
      <div className='flex-col md:flex-row flex pt-24 px-4 md:px-9 max-w-screen-2xl m-auto gap-7 items-center justify-center'>
        <div className='text-center items-center md:items-start md:text-left flex flex-col gap-8 md:max-lg:w-3/5 lg:w-1/2 relative'>
          <div className='flex flex-col items-center md:items-start'>
            <h1 className=' text-5xl font-abril leading-[50px] pb-5'>
              Your Ultimate Guide to Tennis
            </h1>
            <img src='/Line.svg' alt='' />
          </div>
          <div className='text-base leading-6'>
            <p>
              Another important feature could be profiles of famous tennis
              players from around the world. This could include information on
              their playing style, career highlights, and current ranking.
            </p>
            <p>
              A section dedicated to coaching and training can also be included,
              which offers tips on improving tennis skills, such as serving,
              volleying, and footwork.
            </p>
          </div>
          <div className=' gap-4 flex font-bold'>
            <button className=' py-[13px] px-5 text-base  bg-green rounded-lg text-white flex items-center gap-4'>
              <span>Join As A Player</span>
              <MdEast />
            </button>
            <button className=' py-[13px] px-5 text-base  bg-green rounded-lg text-white flex items-center gap-4'>
              <span>Join As A Club</span>
              <MdEast />
            </button>
          </div>
          <div className='absolute -top-5 -left-5'>
            <img src='/circles.svg' alt='' />
          </div>
        </div>
        <div className=' md:w-2/5 '>
          <img
            src='/hero.png'
            alt=''
            className='w-full h-auto object-cover max-w-[575px] rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
