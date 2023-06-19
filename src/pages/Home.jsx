import { MdEast } from 'react-icons/md';

const Home = () => {
  return (
    <div className=' bg-purple text-white min-h-screen pt-[90px] '>
      <div className='flex pt-24 px-9 max-w-screen-2xl m-auto gap-7 items-center justify-center'>
        <div className='flex flex-col gap-8 w-1/2 relative'>
          <div>
            <h1 className=' text-5xl font-abril leading-[50px]'>
              Your Ultimate Guide to Tennis
            </h1>
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
            <button className=' py-3 px-5 text-base  bg-green rounded-lg text-white flex items-center gap-4'>
              <span>Join As A Player</span>
              <MdEast />
            </button>
            <button className=' py-3 px-5 text-base  bg-green rounded-lg text-white flex items-center gap-4'>
              <span>Join As A Club</span>
              <MdEast />
            </button>
          </div>
          <div className='absolute -top-5 -left-10'>
            <img src='/circles.svg' alt='' />
          </div>
        </div>
        <div className=' w-2/5 '>
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
