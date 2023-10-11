import { Link } from "react-router-dom";

const routes = [
  {
    route: "/about-us",
    name: "Nosotros",
  },
  {
    route: "/services",
    name: "Servicios",
  },
];

const session = [
  {
    route: "/login",
    name: "Login",
  },
  {
    route: "/signup",
    name: "Registro",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-20">
      <div className="max-w-[1300px] mx-auto py-4 border-b">
        <div className="grid grid-cols-3 font-bold">
          <div className="flex">
            <Link to="/" className="cursor-pointer">
              <span className="text-blue-500 font-extrabold">D</span>Alvarado
            </Link>
          </div>
          <div className="flex gap-5 justify-center">
            {routes.map((route, idx) => (
              <Link
                key={idx}
                to={route.route}
                className="hover:underline transition-all cursor-pointer"
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-5 justify-end">
            {session.map((route, idx) => (
              <Link
                key={idx}
                to={route.route}
                className="hover:underline transition-all  cursor-pointer"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
