
import {useNavigate } from "react-router-dom"
import Services from "../../pages/02-servicespage"
const UserNavBar = ()=> {
    const navigate= useNavigate()
    return (
        <>
        <div
           onClick={()=> navigate("/")}>
           home
           </div>
        <div onClick={()=> navigate("services")}> 
          Services
          </div>
          <div onClick={()=> navigate("/contactus")}> 
          contactus
          </div>
        </>
    )
}
export default UserNavBar
