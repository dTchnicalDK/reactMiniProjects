import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import AddNote from "./components/note/AddNote.jsx";

const router = createBrowserRouter([
  { path: "/home", element: <App /> },
  { path: "/addNote", element: <AddNote /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);
