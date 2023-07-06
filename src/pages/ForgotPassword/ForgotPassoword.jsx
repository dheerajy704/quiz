import axios from 'axios';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router';
import { baseUrl } from '../../api';
import techIS from '../../assets/logo-techis.png';
const ForgotPassoword = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    if (values.newPassword && values.email) {
      /* post data */
      axios.post(`${baseUrl}user/forgot/`, {
        email: values.email,
        password: values.newPassword,
      });
      navigate('/');
    }
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
          Create New Password
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <Formik
            initialValues={{ email: '', newPassword: '' }}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className='space-y-6'>
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
                      value={values.email}
                      onChange={handleChange}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='newPassword'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Enter New Password
                  </label>
                  <div className='mt-1'>
                    <input
                      id='newPassword'
                      name='newPassword'
                      type='password'
                      autoComplete='current-password'
                      required
                      value={values.newPassword}
                      onChange={handleChange}
                      className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#00abae] hover:bg-[#00abaed5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00abae]'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassoword;
