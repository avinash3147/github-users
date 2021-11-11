import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
