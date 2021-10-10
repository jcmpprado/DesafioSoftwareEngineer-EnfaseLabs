import NavBar from './Components/NavBar';
import Header from './Components/Header';
import './global.css'
import Routes from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
