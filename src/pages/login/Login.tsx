import back from '../../assets/back.png'

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
     
     
      
      
      </div>
      </div>
      );
}
export default Login