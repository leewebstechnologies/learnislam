import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Settings />}
          />
          <Route path="/post/:postId" element={<Single />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
