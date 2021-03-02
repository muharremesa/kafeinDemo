import './App.css';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom';
import UserLoginPage from './pages/UserLoginPage';
import UserSingupPage from './pages/UserSingupPage';
import HomePage from './pages/HomePage';
import UserLists from './pages/UserLists';
import Header from './Header';
import UserUpdate from './pages/UserUpdate';
import StockSave from './pages/StockSave';
import StockLists from './pages/StockLists';
import StockUpdate from './pages/StockUpdate';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={UserLoginPage} />
          <Route path="/singup" component={UserSingupPage} />
          <Route path="/users" component={UserLists} />
          <Route path="/user/:id" component={UserUpdate} />
          <Route path="/stock/:id" component={StockUpdate}/>
          <Route path="/stock" component={StockSave}/>
          <Route path="/stocks" component={StockLists}/>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
