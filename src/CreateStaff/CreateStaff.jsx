import React from "react"
import './CreateStaff.css'
import './CreateStaffmobile.css'
import {LiaLessThanSolid} from 'react-icons/lia'


const CreateStaff = ()=> {

    return(
        <>
          <div className="createstaffmain">
               <div className="createstaffwrapper">
                  <div className="createstafficondiv">
                      <div className="createstafficonholder">
                         <div className="createstaffcircle">
                              <div><LiaLessThanSolid/></div>
                         </div>
                      </div>
                  </div>
                  <div className="createstafftextdiv">
                      <p className="createstafftext">Create New Staff</p>
                  </div>
                  <div className="createstaffimagediv">
                      <div className="createstaffimageholder">
                        <img src="./src/assets/testifourthcircle.jpg" alt="staffimg" />
                      </div>
                  </div>
                  <div className="createstaffinputdiv">
                     <input className="createinput1" type="text"  placeholder="Email"/>
                     <input className="createinput2" type="text"  placeholder="Hospital code"/>
                  </div>
                  <div className="createstaffbtndiv">
                      <div className="createstaffbtnholder">
                          <button className="createstaffbtn">Send</button>
                      </div>
                  </div>
               </div>
          </div> 
        </>
    )
}

export default CreateStaff