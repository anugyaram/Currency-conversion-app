import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./pages/signInPage/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
