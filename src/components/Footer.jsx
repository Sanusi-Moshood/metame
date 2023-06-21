import { MdFacebook } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#FFFFFF] w-full text-grey bg-[url(/fbg.png)] bg-right bg-no-repeat'>
      <div className=' flex-wrap flex mx-auto px-4 md:px-7 py-[70px] gap-14 border-b border-grey border-opacity-40'>
        <div className='flex flex-col gap-4'>
          <div>
            <img src='/footerlogo.svg' alt='' />
          </div>
          <div>
            <p className='w-[380px] text-base'>
              Another important feature could be profiles of famous tennis
              players from around the world. This could include information on
              their playing style, career highlights, and current ranking.
            </p>
          </div>
          <div className=' text-3xl text-purple'>
            <MdFacebook />
          </div>
        </div>
        <div className='flex gap-20 flex-wrap '>
          <div className='flex gap-6 flex-col'>
            <h2 className=' font-abril text-2xl text-dark-purple'>
              <span>Quick Links</span>
              <img src='/fline.svg' alt='' className=' pt-2' />
            </h2>
            <div className='flex flex-col gap-4'>
              <NavLink to={'/'}>Players</NavLink>
              <NavLink to={'/'}>Clubs</NavLink>
              <NavLink to={'/'}>Pro League</NavLink>
              <NavLink to={'/'}>About Us</NavLink>
              <NavLink to={'/'}>FAQ</NavLink>
              <NavLink to={'/'}>Contact Us</NavLink>
            </div>
          </div>
          <div className='flex gap-6 flex-col'>
            <h2 className=' font-abril text-2xl text-dark-purple'>
              <span>Useful Links</span>
              <img src='/fline.svg' alt='' className=' pt-2' />
            </h2>
            <div className='flex flex-col gap-4'>
              <NavLink to={'/'}>Terms & Conditions</NavLink>
              <NavLink to={'/'}>Privacy Policy</NavLink>
              <NavLink to={'/'}>Help Center</NavLink>
              <NavLink to={'/'}>News</NavLink>
            </div>
          </div>
          <div className='flex gap-6 flex-col'>
            <h2 className=' font-abril text-2xl text-dark-purple'>
              <span>Contact Us</span>
              <img src='/fline.svg' alt='' className=' pt-2' />
            </h2>
            <div className='flex flex-col gap-4'>
              <NavLink to={'/'}>+86 15888033338</NavLink>
              <NavLink to={'/'}>business@fantasysupply.com</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center w-full p-8'>
        <span>
          Copyright 2022 <span className=' text-purple'>MPR</span> All Rights
          Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
