import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={"/about"}>About</Link>
    </div>
  );
}
