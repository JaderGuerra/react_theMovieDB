import Logo from "../assets/movieIcon-size.png";

export const Header = () => {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
          <ul className="flex content-center font-medium text-sm">
            <img src={Logo} alt="Logo" className="w-10" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
