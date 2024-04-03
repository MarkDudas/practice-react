import back from '../../assets/back.png'
import './Login.css'
import { Link } from 'react-router-dom'

function Login (){
    return(
        <div className='container-choose'>
        <div className="container max-w-lg p-3">
          
      <div className="flex justify-between items-center mb-4 ">
  <div className='absolute top-11 left-7'>
        <Link to="/">
        <img src={back} className='mx-auto h-5 w-5 mr-2'/>
        
        </Link>
  </div>
          <h1 className="text-xl font-bold text-gray-800">Login</h1>
         
      </div>
     
     <div>
        <h1>Welcome Back!</h1>
        <h2>Enter your mobile number to access your account</h2>
     </div>
     <div>
        <h1>Mobile Number</h1>
       <input type="number" name="" id="" className="w-2xl remove-arrow" placeholder='+63'/>
     </div>
      
      
      </div>
      </div>
      );
}
export default Login