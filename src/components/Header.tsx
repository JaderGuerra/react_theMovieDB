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
        <ul className="flex items-center gap-2 font-medium">
          <img src={Logo} alt="Logo" className="w-10" />
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active" : "text-base text-gray-400"
            }
          >
            Populars
          </NavLink>
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              isActive ? "active" : "text-base text-gray-400"
            }
          >
            Favorites
          </NavLink>
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
