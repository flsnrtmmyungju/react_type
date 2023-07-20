import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* 항상 /이걸로시작하니까 맨아래로 내려줌 => v6부터는 위에있어도되는듯 */}
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<Home />} />
        <Route path="tv" element={<Tv />} />
        <Route path="search" element={<Search />} />
        {/* 한페이지에서 두개의 url을 가짐 */}
      </Routes>
    </Router>
  );
}
export default App;
