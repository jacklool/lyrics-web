import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import HomePage from './components/page/home-page';
import TestPage from './components/page/test-page';

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/test" exact component={TestPage} />
    </Router>
  );
}

export default App;
