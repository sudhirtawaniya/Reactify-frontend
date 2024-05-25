import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SellerDashboard from './pages/sellerDashboard';

function App() {
  return (<>
   <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route
            path="/seller-dashboard"
            element={
             
                <SellerDashboard />
          
            }
          />
   </Routes>
{/* <Login/> */}
</>
  );
}

export default App;
