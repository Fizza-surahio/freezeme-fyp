import React from 'react'
import fizza from '../assests/fizza.jpeg'
import ubaid from '../assests/ubaid.png'
import sayed from '../assests/sayed.png'
import zainab from '../assests/zainab.png'
import {RiTeamFill} from "react-icons/ri"
import {GrMail} from "react-icons/gr"

export default function TeamScreen() {
    return (
        <div className='teampage'>
            <center><h1 > <RiTeamFill/>Our Team</h1></center>
<div className="row team">
  <div className="column">
    <div className="card">
      <div className="container">
      <img src={ubaid} alt="ubaid" />;
        <center><h1>Ubaid Aftab</h1>
        <h4 className="title">Supervisor</h4>
         <p><GrMail/> ubaid.aftab@nu.edu.pk</p></center>
        </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container">
      <img src={sayed} alt="sayed" />;
       <center> <h1>Sayed Yousaf</h1>
        <h4 className="title">Co Supervisor</h4>
        <p><GrMail/> sayed.yousaf@nu.edu.pk</p></center>
        </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <div className="container">
      <img src={fizza} alt="fizza" />;
        <center><h1>Fizza Surahio</h1>
        <h4 className="title">FYP Group Member I</h4>
        <p><GrMail/> k181191@nu.edu.pk</p></center>
        </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <div className="container">
      <img src={zainab} alt="zainab" />;
      <center>  <h1>Zainab</h1>
        <h4 className="title" >Fyp Group Member II</h4>
        <p><GrMail/> k173811@nu.edu.pk</p></center>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}


