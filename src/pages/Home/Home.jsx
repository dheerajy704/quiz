import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

const Home = ({ onClear }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar onClear={onClear} />
      <div className='bg-gray-50 flex-1'>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
