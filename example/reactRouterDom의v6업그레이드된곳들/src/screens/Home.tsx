import { Link, useSearchParams } from "react-router-dom";
import { users } from "../db";

function Home() {
  //파라미터확인및 수정가능
  //useSearchParams: 자바스크립트의 const keyword = new URLSearchParams(location.search).get("keyword");
  //위와같은 URLSearchParams 의기능을 대신해줌
  const [readSearchParams, setSearchParams] = useSearchParams();
  // setTimeout(() => {
  //   //기존 http://localhost:3000
  //   setSearchParams({
  //     day: "today",
  //     tomorrow: "123",
  //   });
  // }, 5000); //결과 http://localhost:3000/?day=today&tomorrow=123
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
