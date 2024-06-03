import "./App.css";
import PageMain from "./pages/main";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./widgets/header";
import PageNews from "./pages/news";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageMain />,
  },
  {
    path: "/news",
    element: <PageNews />
  },
]);

function App() {
  return (
    <div className="bg-[#F5F5DC] h-screen p-20 flex flex-col gap-20">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
