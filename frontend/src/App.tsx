import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import RootLayout from "./pages/Root";
import SuperheroesPage from "./pages/Superheroes/Superheroes";
import NewSuperheroPage from "./pages/NewSuperhero/NewSuperhero";
import SuperheroDetailPage from "./pages/SuperheroDetail/SuperheroDetail";
import { ModalProvider } from "./store/ModalContext";
import EditSuperheroPage from "./pages/EditSuperhero/EditSuperhero";

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
          { path: "edit/:superheroId", element: <EditSuperheroPage /> },
        ],
      },
      { path: "new-superhero", element: <NewSuperheroPage /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
};
export default App;
