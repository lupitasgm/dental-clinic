import { Link } from "react-router-dom";
import User from "../../../requests/User";
import useUserStore from "../../../stores/UserStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

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

  const user = useUserStore((state) => state.user);
  const alterUser = useUserStore((state) => state.setUser);
  const [menu, setMenu] = useState();

  const handleNavClick = () => {
    setMenu(false);
  };

  function logout() {
    // eslint-disable-next-line no-unused-vars
    User.logout().then((_) => {
      alterUser(null);
      localStorage.removeItem("IUDBSOTKN");
    });
    setMenu(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("header");
      if (window.scrollY > 1) {
        navbar.classList.add("bg-sky-100"); 
      } else {
        navbar.classList.remove("bg-sky-100");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className="fixed top-0 w-full z-20 px-4">
        <div className="max-w-[1300px] mx-auto py-4 border-b">
          <div className="grid grid-cols-2 items-center md:grid-cols-3 font-bold">
            <div className="flex">
              <Link to="/" className="cursor-pointer">
                <span className="text-blue-500 font-extrabold">D</span>Alvarado
              </Link>
            </div>
            <div className="md:flex gap-5 justify-center hidden">
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
            <div className="md:flex gap-5 justify-end hidden">
              {!user &&
                session.map((route, idx) => (
                  <Link
                    key={idx}
                    to={route.route}
                    className="hover:underline transition-all  cursor-pointer"
                  >
                    {route.name}
                  </Link>
                ))}
              {user && (
                <div
                  className="hover:underline transition-all  cursor-pointer"
                  onClick={logout}
                >
                  Cerrar sesión
                </div>
              )}
            </div>
            <div className="flex justify-end md:hidden">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => {
                  setMenu(true);
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            className="absolute  px-4 py-4 z-30 h-[100vh] rounded-[5px] w-full bg-[#BCDAF2] bottom-0 left-0"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <div className="flex justify-end px-4 left-0 fixed w-full">
              <FontAwesomeIcon
                icon={faTimes}
                size="xl"
                onClick={() => {
                  setMenu(false);
                }}
                className="z-20"
              />
            </div>
            <div className="flex z-20 flex-col gap-5 justify-center mt-8 text-xl font-bold">
              <Link
                to={"/"}
                className="hover:underline z-20 transition-all cursor-pointer"
                onClick={handleNavClick}
              >
                Home
              </Link>
              {routes.map((route, idx) => (
                <Link
                  key={idx}
                  to={route.route}
                  className="hover:underline z-20 transition-all cursor-pointer"
                  onClick={handleNavClick}
                >
                  {route.name}
                </Link>
              ))}
              {!user &&
                session.map((route, idx) => (
                  <Link
                    key={idx}
                    to={route.route}
                    className="hover:underline transition-all cursor-pointer"
                    onClick={handleNavClick}
                  >
                    {route.name}
                  </Link>
                ))}
              {user && (
                <div
                  className="hover:underline transition-all cursor-pointer"
                  onClick={logout}
                >
                  Cerrar sesión
                </div>
              )}
            </div>
            <div className="z-10 h-[150px] w-[150px] border-8 border-white/70 rounded-full absolute top-[-75px]"></div>
            <div className="z-10 h-[250px] w-[250px] border-4 border-white/70  rounded-full absolute bottom-[-125px] right-0"></div>
            <div className="z-10 h-[450px] w-[450px] border-[16px] border-white/70 rounded-full absolute bottom-0 left-[-225px]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
