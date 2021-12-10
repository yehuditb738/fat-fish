import './App.css';
import { useState } from 'react';
import UserListComponent from './components/UserListComponent';
import LoginComponent from './components/LoginComponent';
import { UserList } from './mock-data/userList'


function App() {

  const [isLogin, setIsLogin] = useState(false);
  function setLogin() {
    setIsLogin(true)
  }
  if (isLogin === true)
    return (
      <div className="App">
        <UserListComponent data={UserList} />
      </div>
    );
  else {
    return (
      <div className="App">
        <LoginComponent data={UserList} setLogin={setLogin} />
      </div>
    );
  }
}

export default App;
