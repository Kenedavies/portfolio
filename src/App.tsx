import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layouts/Home";
import Footer from "./components/Footer";
import MyWorks from "./layouts/MyWorks";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-works",
      element: <MyWorks />,
    },
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={routers} />
      <Footer />
    </>
  );
}

export default App;
