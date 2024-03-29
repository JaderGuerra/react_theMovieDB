import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import HomeScreen from "./screens/HomeScreen";
import { MovieDetails } from "./screens/MovieDetails";
const NotFound = React.lazy(() => import("./screens/NotFoundPage"));

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
