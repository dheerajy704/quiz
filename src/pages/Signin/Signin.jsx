import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../api';
import techIS from '../../assets/logo-techis.png';

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const signin = async () => {
    try {
      const response = await axios.post(`${baseUrl}user/signin/`, user);
      localStorage.clear();
      localStorage.setItem('user', JSON.stringify(response.data));

      if (response.data.token) {
        navigate('/home');
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    /* do signup request here */
    signin();
  };
  const handleChange = ({ value, name }) => {
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className='h-screen flex flex-col justify-center  py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <img
          className='mx-auto h-16 w-auto object-contain'
          src={techIS}
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSignin}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email address
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={user.email}
                  onChange={(e) => handleChange(e.target)}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  value={user.password}
                  onChange={(e) => handleChange(e.target)}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00abae] hover:bg-[#00abaed5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00abae]'
              >
                Sign in
              </button>
            </div>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  Forgot Password?
                  <Link to='/forgotpassword'>
                    <span className='pl-1 underline cursor-pointer text-[#00abae]'>
                      Click here
                    </span>
                  </Link>
                </span>
              </div>
            </div>

            <div className='mt-6'>
              <div className='text-sm'>
                <span className='px-2 bg-white text-gray-500'>
                  No Account Yet? Please click below.
                </span>
              </div>
              <Link to='/signup'>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-[#00abae] rounded-md shadow-sm text-sm font-medium text-gray-500  hover:bg-gray-50'
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
