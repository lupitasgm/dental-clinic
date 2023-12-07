import { Link } from "react-router-dom";
import useUserStore from "../stores/UserStore";

function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <main className="main__Image">
        <div className="flex z-20 flex-col justify-center gap-4 h-full w-full max-w-[1300px] mx-auto px-4">
          <h1 className="z-20 text-7xl font-bold max-w-[600px]">
            Tus dientes, nuestro cuidado
          </h1>
          <p className="z-20 text-gray-600 font-bold text-lg max-w-[600px]">
            Cuidar tus dientes es prioridad máxima de nuestra clínica dental,
            por eso contamos con un profesional capacitado para tus necesidades.
          </p>
          <div className="z-20 flex gap-2">
            <a
              href=""
              className="bg-blue-500 rounded-lg px-4 py-4 font-bold text-white hover:bg-blue-400 transition-all duration-200"
            >
              Descubre más
            </a>
            {user && (
              <Link
                to="/agendar"
                className={`bg-gray-800 rounded-lg px-4 py-4 font-bold text-white hover:bg-gray-400 transition-all duration-200`}
              >
                Agendar cita
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
