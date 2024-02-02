import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Contact, { loader as contactLoader } from "./routes/contact";
import Register, { registerAction } from "./routes/Register";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

/*----------------------------------------------------------------------------- 
    All codes start from here
--------------------------------------------------------------------------------*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children:[
     {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path:"register",
            element:<Register></Register>,
            action: registerAction,
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
          
          },

          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ] 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
