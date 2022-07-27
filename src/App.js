import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navbar';
import Spinny from './components/carousel';
import About from './components/about';
import SignUp from './components/signup';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/">
              <Spinny />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Routes>
        </div>

      </div>
    </Router>

  );
}

export default App;