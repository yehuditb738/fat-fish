import './App.css';
import { useState } from 'react';
import UserListComponent from './components/UserListComponent';
import LoginComponent from './components/LoginComponent';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  function setLogin() {
    setIsLogin(true)
  }
  if (isLogin === true)
    return (
      <div className="App">
        <UserListComponent />
      </div>
    );
  else {
    return (
      <div className="App">
        <LoginComponent setLogin={setLogin} />
      </div>
    );
  }
}

export default App;
