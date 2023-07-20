import { useOutletContext } from "react-router-dom";

interface IFollowers {
  nameOfUser: string;
}

function Followers() {
  //useOutletContext:부모에서 데이터 보낸거 받을수있음
  const { nameOfUser } = useOutletContext<IFollowers>();
  return <h1>여긴 {nameOfUser}의 Followers</h1>;
}
export default Followers;
