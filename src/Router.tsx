import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import User from "./screens/users/User";

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
        // 이렇게넣으면 다른페이지도 에러나는걸막을수있음
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      ///users 페이지에 뭔가있으면 path:"users"만들고
      //children으로 path: ":userId"따로 만들어야함
      {
        path: "users/:userId",
        element: <User />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
