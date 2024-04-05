import './Signin.css'
import logo from '../../assets/splash.png';
import Modal from '../modal/Modal'; 
import { useState } from 'react';
import withSplashScreen from '../../components/splash/withSplashScreen'
import { Link } from 'react-router-dom'
const Signin = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='whole'>
      <div className='container max-w-lg'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-50 w-70 img"
              src={logo}
              alt="Your Company"
            />
          </div>
          <div className='activate-btn'>
            <button type="button" onClick={() => setShowModal(true)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-base w-full px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">Activate Maxicare Card</button>
          </div>
          <Link to="/login">
          <div className='login-btn'>
          
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full w-full h-14 px-8 py-4 text-base text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            
          </div>
          </Link>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />} {/* Render Modal component if showModal is true */}
    </div>
  );
};

export default withSplashScreen(Signin);
