import logo from './logo.svg';
import './App.css';
import Home from './todo/Home';
import About from './todo/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './todo/Base';
import Login from './todo/Login';
import Welcome from './todo/Welcome';
import AuthenticationService from './service/AuthenticationService';
import Todos from './todo/Todos';


function App() {
  const login = (username) => {
    AuthenticationService.login(username)
  }
  const logout = () => {
    AuthenticationService.logout()
  }
  return (
    <Base>
      <BrowserRouter>

        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="login" element={<Login login={login} />}></Route>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="todos" element={<Todos />}></Route>
        </Routes>
      </BrowserRouter>
    </Base>
  );

  
  
}

export default App;
