import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
  const { userId } = useParams();
  return (
    <>
      {" "}
      <h1>
        User wiht it {userId} is named: {users[Number(userId) - 1].name}
      </h1>
      <hr />
      {/* 아래처럼 Link,Outlet로 개발하면 새로고침해도 이페이지그대로 */}
      {/* 상대경로라서 현재경로끝에 추가 */}
      <Link to="followers">See followers</Link>
      {/* 얘만있으면 경로가 바뀌지않으니까 나타나지않음*/}
      {/* context !!모든!!!자식에게 데이터보낼수있음 */}
      <Outlet context={{ nameOfUser: users[Number(userId) - 1].name }} />
    </>
  );
}
export default User;
