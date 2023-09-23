//import logo from './logo.svg';
import './App.css';
import Banner from './Banner';
import Netinfo from './Netinfo';


function App() {
  return (
    <div className="App">
        <Banner />
        <Netinfo name="IP address" value="127.196.59.33" />
    </div>
  );
}

export default App;
//<img src={logo} className="App-logo" alt="logo" />