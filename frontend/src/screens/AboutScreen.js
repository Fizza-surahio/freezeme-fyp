import React from 'react';
import Freeze from '../assests/Freeze.png';
import {RiPagesLine} from 'react-icons/ri' ;
export default function AboutScreen() {
  return (
  <div className='aboutpage'> 
        <center><h1><RiPagesLine/>About Us</h1>
          </center>
      <div className="row about">
        
        <div className='col-1'>
             <img src={Freeze} alt="freeze" />;
        </div>
       
      <div className='col-2'>
       <div className ="card">
       <div className="container">
               <center> <p>
           "This report discusses an online platform for buying and selling ice produced by a factory.
            We have created a web application, which includes many features that facilitate ice buying,
             discussed later in the report. Karachi has around 300 ice factories with no proper buying 
             and selling system. With the evolving of technology and the recent pandemic, the era of 
             physical sales is almost over. Considering this point, a survey of 12 factories was conducted, 
             were most of them emphasized on the need of a proper online platform. 
             After detailed research, such an online platform has been developed by us. The platform contains an admin
             and buyer portal, assisting the admin in looking after the sales, and the buyer in purchasing the
              ice-based items for the comfort of their home. More details, design diagrams, and functions of the
             project called “FreezeME” will be discussed later in the group. Moreover, literature reviews, scope 
             of the project, the technologies used are also a part of this report."
         </p></center>
    </div>
      
       
     
    </div>
         </div>  
        </div>   
 </div>
  )
}

