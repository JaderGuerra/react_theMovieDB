import { NavLink } from "react-router-dom";
import Logo from "../assets/movieIcon-size.png";
import { useTheme } from "../hooks/theme/useToggleTheme";
import { MoonIcon } from "./MoonIcon";
import { SoonIcon } from "./SoonIcon";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className="bg-gray-50 dark:bg-gray-700 shadow flex justify-center py-4">
      <div className="flex justify-between items-center max-w-[1139px] w-[92%]">
        <ul className="flex items-center">
          <li className="flex items-center mr-2">
            <img src={Logo} alt="Logo" className="w-10 mr-2" />
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "active" : "text-xl text-slate-700 dark:text-white"
              }
            >
              Populars
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) =>
                isActive ? "active" : "text-xl text-slate-700 dark:text-white"
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
        <div className="flex">
          <button onClick={() => toggleTheme()}>
            {isDarkTheme ? <SoonIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
};
