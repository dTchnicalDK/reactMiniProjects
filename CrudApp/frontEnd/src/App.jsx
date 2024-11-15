import "./App.css";
import CreateUser from "./components/CreateUser/CreateUser";
import EditUser from "./components/EditUser/EditUser";
import HomePage from "./components/homepage/HomePage";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

//creating routes for different pages
function App() {
  const route = createBrowserRouter([
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/create",
      element: <CreateUser />,
    },
    {
      path: "/edit/:id",
      element: <EditUser />,
    },
  ]);

  return (
    <>
      {/* providing routes through "routeProvider"  */}
      <div className="main">
        <RouterProvider router={route}></RouterProvider>
      </div>
    </>
  );
}

export default App;
