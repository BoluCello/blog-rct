import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";

import App from "./App";
import Create from "./pages/Create";
import Update from "./pages/Update";

// export const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/create", element: <Create /> },
//   { path: "/update/:id", element: <Update /> },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/create", element: <Create /> },
      { path: "/update/:id", element: <Update /> },
    ],
  },
]);
