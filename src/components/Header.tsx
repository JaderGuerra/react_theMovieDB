import { Link } from "react-router-dom";
import Logo from "../assets/movieIcon-size.png";

export const Header = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <ul className="flex items-center gap-2 font-medium">
              <img src={Logo} alt="Logo" className="w-10" />
              <h1 className="text-base text-slate-700 dark:text-white">
                TheMovie
              </h1>
            </ul>
          </Link>
          <span>Icon</span>
        </div>
      </div>
    </nav>
  );
};
