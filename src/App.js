import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import PrivateRoutes from './components/PrivateRoutes';
import Footer from './components/Footer';

//vistas
import Home from './views/Home';
import Login from './views/Login';
import Users from './views/Users';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          
          <Route element={<PrivateRoutes/>}>
            <Route path='/user/:id' element={<Users />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
