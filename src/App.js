import Profile from './Components/Profile';
import Login from './Components/Login';
import './App.css';
import './Components/index.css'
//import authActions from './action/authActions';
//import App from 'App';

function App() {
  return (
    <div>
      {window.location.pathname === '/profile' ? <Profile /> : <Login />}
    </div>
  );
}


export default App;
