import { Link, useNavigate } from 'react-router-dom';
import techIS from '../../../assets/logo-techis.png';

const Navbar = ({ onClear }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) ?? { user: {} };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div className='w-full drop-shadow-sm shadow-md bg-white'>
      <div className='px-12 py-5 flex justify-between items-center'>
        <img
          className='h-16 w-auto object-contain'
          src={techIS}
          alt='Workflow'
        />
        <div className='sm:text-5xl  text-[#00abae] font-thin  dark:text-slate-200'>
          Quiz App
        </div>
        <div>
          <h1 className='text-2xl mb-1 text-gray-500'>
            Welcome , {user.user_name}
          </h1>
          <Link to='/home' replace={true}>
            <button
              onClick={onClear}
              className='mr-5 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00abae] hover:bg-[#00abaed5]'
            >
              Home
            </button>
          </Link>

          <button
            type='button'
            onClick={logout}
            className='inline-flex items-center px-4 py-2 border border-[#00abae] shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 '
          >
            Logout
          </button>
          <span className='inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#00abae] ml-10'>
            <span className='text-lg font-medium leading-none text-white'>
              {user.email.substring(0, 2).toUpperCase()}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
