import './App.css';
import { useState } from 'react';
// import ReactDOM from 'react-dom';
// import LazyLoad from 'react-lazyload';
// import src from '../src/images/pic.jpg';


import UserListComponent from '../src/components/UserListComponent';
import LoginComponent from '../src/components/LoginComponent';
import { UserList } from '../src/mock-data/userList'

function App() {

  const [isLogin, setIsLogin] = useState(false);
  function setLogin() {
    setIsLogin(true)
  }
  debugger
  if (isLogin === true)
    return (
      <div className="App">
        {/*<LazyLoad height={100} offset={100}>
          <img src={src} height={800} />
        </LazyLoad>*/}
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
