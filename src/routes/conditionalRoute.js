import { Route,Routes } from "react-router-dom"
import Home from"../pages/01-homePage"
import Services from"../pages/02-servicespage"
import contactus from"../pages/03-contactuspage"


function ConditionalRoute(){

    return(<>
     <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contactus' element={<contactus/>}/>
     </Routes>
    </>)



}

export default ConditionalRoute