import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Parker from './components/parker/Parker';

function App() {
  return (
    <div className="App">
      <Parker/>
    </div>
  );
}

export default App;
