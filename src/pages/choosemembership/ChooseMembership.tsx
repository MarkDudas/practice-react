import back from '../../assets/back.png'
import emp from '../../assets/employee.png'
import briefcase from '../../assets/briefcase.png'
import { Link } from 'react-router-dom'
import './ChooseMembership.css'

function ChooseMembership (){
    return(
        <div className='container-choose'>
        <div className="container max-w-2xl p-10">
          
      <div className="flex justify-between items-center mb-4 ">
  <div className='absolute top-11 left-7'>
        <Link to="/">
        <img src={back} className='mx-auto h-5 w-5 mr-2'/>
        
        </Link>
  </div>
          <h1 className="text-xl font-bold text-gray-800">Activate Maxicare Card</h1>
        
      </div>

     
      
        <div className="flex flex-col space-y-4">
          <div className="text-gray-600">
            
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
    <img src={emp} className='mx-auto h-10 w-10 mr-2'/>
    <span className='inline-block'>
        <span className='font-bold'>Activate Maxicare Card</span><br />
        Maximize your well-being with your Maxicare HMO—choose from options like MyMaxicare, Prima Gold, Prima Silver, and more.
    </span>
</button>


      
          </div>
          <div className="text-gray-600">
          <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
          <img src={briefcase} className='mx-auto h-10 w-10 mr-2'/>
          <span className='inline-block'>
          <span className='font-bold'> Activate using employee ID and corporate code</span><br />
          
   
    Prioritize health with your employer-provided Corporate Membership for a healthy workforce.
    </span>
    </button>
      
          
          </div>
        </div>
      </div>
      </div>
      );
}
export default ChooseMembership