import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  HomeScreen  from "./screens/HomeScreen";
import { Layout } from "./components";


const AboutScreen = React.lazy(() => import("./screens/AboutScreen"));
const NotFound = React.lazy(() => import("./screens/NotFoundPage"));

const App = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
