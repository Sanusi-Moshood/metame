import { NavLink } from 'react-router-dom';
import Logo from '/Logo.svg';
import { MdEast } from 'react-icons/md';
const Navbar = () => {
  return (
    <nav className='bg-[#FFFFFF] w-full  z-50 fixed top-0'>
      <div className=' flex items-center justify-between mx-auto px-4 md:px-7 py-[10px]'>
        <div className=' w-14 md:w-auto'>
          <img src={Logo} alt='' />
        </div>
        <div className=' md:flex hidden gap-9 items-center justify-center'>
          <div className='flex gap-7 text-dark-purple text-base'>
            <NavLink to={'/players'}>Players</NavLink>
            <NavLink to={'/players'}>Clubs</NavLink>
            <NavLink to={'/players'}>Pro League</NavLink>
            <NavLink to={'/players'}>About Us</NavLink>
          </div>
          <div className=' gap-4 flex font-bold'>
            <button className=' py-3 px-5 text-base rounded-lg border-green border border-solid text-green flex items-center gap-4'>
              <span>Sign In</span>
              <MdEast />
            </button>
            <button className=' py-3 px-5 text-base  bg-green rounded-lg text-white flex items-center gap-4'>
              <span>Join</span>
              <MdEast />
            </button>
          </div>
        </div>
        <div className='flex md:hidden flex-col gap-1'>
          <div className=' border-green border-2 rounded-sm w-9 h-1'></div>
          <div className=' border-green border-2 rounded-sm w-9 h-1'></div>
          <div className=' border-green border-2 rounded-sm w-9 h-1'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
