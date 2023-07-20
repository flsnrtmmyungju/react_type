import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* react-router-dom v6 에서 createBrowserRouter 사용할때 app을 라우터에서 불러와서여기표시 */}
    {/* router 라고불리우는 prop를 가짐 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
