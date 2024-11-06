import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import SuperheroesPage from "./pages/Superheroes";
import NewSuperheroPage from "./pages/NewSuperhero";
import SuperheroDetailPage from "./pages/SuperheroDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "superheroes",
        children: [
          { index: true, element: <SuperheroesPage /> },
          { path: ":superheroId", element: <SuperheroDetailPage /> },
        ],
      },
      { path: "new-superhero", element: <NewSuperheroPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
