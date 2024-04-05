import './ActivateMaxicareCard.css'
import { Link } from 'react-router-dom'
import back from '../../assets/back.png'


const ActivateMaxicareCard = () => {

    return(
        <div className='container-choose'>
        <div className="container max-w-2xl p-10">
          
      <div className="flex justify-between items-center mb-4 ">
  <div className='absolute top-11 left-7'>
        <Link to="/">
        <img src={back} className='mx-auto h-5 w-5 mr-2'/>
        
        </Link>
  </div>
          <h1 className="text-md semi-bold text-black aa">Activate Maxicare Card</h1>

      </div>
    
    
     
      
      </div>
      </div>
      );
    

}
export default ActivateMaxicareCard