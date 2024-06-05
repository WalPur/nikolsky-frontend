import "./App.css";
import PageMain from "./pages/main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./widgets/header";
import PageNews from "./pages/news";
import PageDetailNews from "./pages/detail";
import PageModels from "./pages/models";
import PageModel from "./pages/model";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageMain />,
  },
  {
    path: "/news",
    element: <PageNews />,
  },
  {
    path: "/news/:id",
    element: <PageDetailNews />,
  },
  {
    path: "/models/",
    element: <PageModels />,
  },
  {
    path: "/models/:name",
    element: <PageModel />,
  },
]);

function App() {
  return (
    <div className="h-screen p-20 flex flex-col gap-20">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
