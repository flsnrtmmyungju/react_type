import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <Header />
      {/* 이거안쓰면 다른페이지 렌더안됨 */}
      <Outlet />
    </>
  );
}
export default Root;
