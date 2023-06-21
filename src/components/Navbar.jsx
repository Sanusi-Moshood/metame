import { NavLink } from 'react-router-dom';
import Logo from '/Logo.svg';
import { MdEast } from 'react-icons/md';
import Button from './Button';
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
            <NavLink to={'/login'}>
              <Button
                title='Sign In'
                icon={<MdEast />}
                color='text-green'
                bgcolor='white'
                _style='border border-solid border-green'
                fontSize='text-base'
              />
            </NavLink>
            <NavLink to={'/register'}>
              <Button title='Sign In' icon={<MdEast />} />
            </NavLink>
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
