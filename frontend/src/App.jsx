import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./components/error/Error";
import useUserStore from "./stores/UserStore";
import Http from "./requests/Http";
import Schedule from "./pages/Schedule";
import Dashboard from "./pages/Dashboard";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAllowed, redirectPath = "/landing", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default function App() {
  const user = useUserStore((state) => state.user);

  return (
    <Routes>
      <Route
        element={<Layout />}
        loader={async () => {
          return Http.get("/me");
        }}
        errorElement={<Error />}
      >
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute redirectPath="/" isAllowed={user === null} />
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          path="/signup"
          element={
            <ProtectedRoute redirectPath="/" isAllowed={user === null} />
          }
        >
          <Route path="/signup" element={<Register />} />
        </Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/agendar"
          element={<ProtectedRoute redirectPath="/" isAllowed={user} />}
        >
          <Route path="/agendar" element={<Schedule />} />
        </Route>
        <Route
          path="/dashboard"
          element={<ProtectedRoute redirectPath="/" isAllowed={user} />}
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}
