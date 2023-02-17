import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Cases from "./components/cases/Cases";
import Form from "./components/form/Form";
import Intro from "./components/intro/Intro";
import Laws from "./components/laws/Laws";
import Navbar from "./components/navbar/Navbar";
import Parker from "./components/parker/Parker";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Parker />
      <Laws />
      <Cases/>
    </div>
  );
}

export default App;
