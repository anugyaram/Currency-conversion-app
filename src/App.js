import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./pages/signInPage/SignInPage";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/signup">

        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
