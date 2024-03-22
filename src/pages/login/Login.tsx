import back from '../../assets/back.png'
import emp from '../../assets/employee.png'
import briefcase from '../../assets/briefcase.png'
import { Link } from 'react-router-dom'

function Login (){
    return(
        <div className='container-choose'>
        <div className="container max-w-lg p-10">
          
      <div className="flex justify-between items-center mb-4 ">
  <div className='absolute top-11 left-7'>
        <Link to="/">
        <img src={back} className='mx-auto h-5 w-5 mr-2'/>
     
        </Link>
  </div>
          <h1 className="text-xl font-bold text-gray-800">Login</h1>
        
      </div>
        
        <hr className="border-b border-gray-300 mb-4"></hr>
      
        <div className="flex flex-col space-y-4">
          <div className="text-gray-600">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <img src={emp} className='mx-auto h-10 w-10 mr-2'/>
    Maximize your well-being with your Maxicare HMO—choose from options like MyMaxicare, Prima Gold, Prima Silver, and more.
    </button>
      
          </div>
          <div className="text-gray-600">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <img src={briefcase} className='mx-auto h-10 w-10 mr-2'/>
    Activate using employee ID and corporate code
    Prioritize health with your employer-provided Corporate Membership for a healthy workforce.
    </button>
      
          
          </div>
        </div>
      </div>
      </div>
      );
}
export default Login