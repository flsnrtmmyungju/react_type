import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";

const router = createBrowserRouter([
  // 전체라우터의 컨테이너
  {
    path: "/",
    // ex순서 /about접속시//
    //1.라우터 2.<Root /> 3. < Root /> 안의 < Outlet /> 4. Outlet을 < About />로 대체함
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
export default router;
