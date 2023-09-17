import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layouts/Home";
import Footer from "./components/Footer";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
