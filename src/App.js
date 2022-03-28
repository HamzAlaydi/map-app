import "./App.css";
import Map from "./components/Map";
import Login from "./pages/common/Login";
import Signup from "./pages/common/Signup";
import Delivery from "./pages/userPages/Delivery";
import Client from "./pages/userPages/Client";
import Manger from "./pages/userPages/Manger";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const routes = [
    // {path: "/", component:{Home}},
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/user/delivery", component: Delivery },
    { path: "/user/manger", component: Manger },
    { path: "/user/client", component: Client },
  ];
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component: Component }, key) => (
            <Route path={path} element={<Component />} key={key} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
