import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Main from "./components/Main";
import {BrowserRouter, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Route to='/' component={Main}></Route>
        <Route to='/about' component={About}></Route>
        <Route to='/projects' component={Projects}></Route>
        <Route to='/contact' component={Contact}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
