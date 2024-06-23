
import './App.css';
import { Route, Routes} from 'react-router-dom';
// import ConditionalRoute from './routes/conditionalRoute';
import Home from './pages/01-homePage';
import Navbar from'./components/navigation/userNavBar';
import Services from './pages/02-servicespage';
import Contact from './pages/03-contactuspage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/Services' element={<Services />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      </div>
  );
}

export default App;
