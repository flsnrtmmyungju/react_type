import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        {/* 항상 /이걸로시작하니까 맨아래로 내려줌 */}
        {/* 한페이지에서 두개의 url을 가짐 */}
        <Route path={["/", "/movies/:movieID"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
