
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Header from './components/Header';
import store from './redux/store';
import Home from './pages/Home';
import NotFound from './NotFound';
import {useSelector} from 'react-redux'
import Product from './pages/Product';
import Order from './pages/Order';

function App() {

  const PrivateRoute = ({ Component }) => { 

   //const loggedIn =store.getState().login.loggedIn;
   const loggedIn = useSelector((state)=>state.login.loggedIn)
 
    return loggedIn ? <Component /> : <Navigate to="/" />;
    };
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<PrivateRoute Component={Home}/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
