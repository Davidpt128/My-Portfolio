import logo from './logo.svg';
import './App.css';
import {Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './pages/HomePage/HomePage';
import HomeTemlate from './templates/HomeTemlate';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
         <HomeTemlate exact path='/' component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
