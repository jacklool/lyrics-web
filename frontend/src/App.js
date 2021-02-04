import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import Navbar from './components/navbar/navbar';
import HomePage from './components/page/home-page';
import TestPage from './components/page/test-page';
import LyricPage from './components/page/lyric-page';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#E1E9ED',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
        <div className={classes.root}>
          <Navbar />
          <br/>
          <Route path="/" exact component={HomePage} />
          <Route path="/lyric" exact component={LyricPage} />
          <Route path="/test" exact component={TestPage} />
        </div>
    </Router>
  );
}

export default App;
