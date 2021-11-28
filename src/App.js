import './App.css';
import { useState } from 'react';
import UserListComponent from '../src/components/UserListComponent';
import LoginComponent from '../src/components/LoginComponent';
import { UserList } from '../src/mock-data/userList'

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
