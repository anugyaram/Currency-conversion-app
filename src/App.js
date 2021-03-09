import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./pages/signInPage/SignInPage";
import Main from "./pages/main/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/signUp">

        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
