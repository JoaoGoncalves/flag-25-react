
import './App.css'
import SayHello from './components/SayHello'
import UsingLocalStorage from './components/UsingLocalStorage';
import WindowSize from './components/WindowSize';
import UserList from './components/UserList';

function App() {
 

  return (
    <>
     <h1>UseEffect Hook</h1>
     <hr />
     <SayHello />
     <hr />
     <WindowSize />
     <hr />
     <UsingLocalStorage />
     <hr />
     <UserList />
    </>
  )
}

export default App
