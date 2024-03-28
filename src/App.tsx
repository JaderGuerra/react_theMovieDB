/* import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const AboutScreen = React.lazy(() => import("./screens/AboutScreen"));
const DashBoardScreen = React.lazy(() => import("./screens/DashBoardScreen"));

export default function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <AboutScreen />
              </React.Suspense>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <DashBoardScreen />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
 */