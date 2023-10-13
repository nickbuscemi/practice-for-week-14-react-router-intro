import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stocks" component={Stocks} />
      <Route path="/Movies" component={Movies} />

      <Route>
        <h1>Page Not Found</h1>
      </Route>
    </Switch>
  );
}

export default App;
