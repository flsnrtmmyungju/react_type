import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  //URLSearchParams 자바스크립트 기능.
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log("", keyword);
  return null;
}
export default Search;
