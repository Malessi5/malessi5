import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
// import Main from "./components/Main";
import {HashRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Projects}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/projects' component={Projects}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
