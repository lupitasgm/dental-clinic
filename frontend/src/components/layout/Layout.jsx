import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <section className="relative min-h-[100vh] overflow-hidden">
        {children ?? <Outlet />}
        <div className="z-10">
          <div className="z-10 h-[150px] w-[150px] border-8 border-white/70 rounded-full absolute top-[-75px]"></div>
          <div className="z-10 h-[250px] w-[250px] border-4 border-white/70  rounded-full absolute bottom-[-125px] right-0"></div>
          <div className="z-10 h-[450px] w-[450px] border-[16px] border-white/70 rounded-full absolute bottom-0 left-[-225px]"></div>
          <div className="z-10 h-[350px] w-[350px] border-8 border-white/70  rounded-full absolute top-0 right-[-175px]"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
