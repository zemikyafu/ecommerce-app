
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' errorElement={<errorPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
