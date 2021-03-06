import './assets/scss/global.scss';
import './App.scss'
import Routes from './routes'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './cmps/AppHeader/AppHeader';
import AppFooter from './cmps/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader></AppHeader>
        <Switch>
          {Routes.map((route, key) => <Route exact path={route.path} component={route.component} key={key} />)}
        </Switch>
        <AppFooter></AppFooter>
      </Router>
    </div>
  );
}

export default App;
