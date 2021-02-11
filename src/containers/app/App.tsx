import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Landing, Movies } from '../../containers/Containers';
import { Nav } from '../../components/Nav';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route component={ Landing } exact path="/" />
          <Route component={ Movies } path="/movies" />
        </Switch>
      </Router>
    </div>
  );
}
