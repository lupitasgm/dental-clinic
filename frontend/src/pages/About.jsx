import clinic from "../assets/images/benyamin-bohlouli.jpg";
import philosophy from "../assets/images/philosophy.jpg";

function About() {
  return (
    <main className="min-h-screen bg-[#BCDAF2] flex flex-col md:z-20">
      <div className="container mx-auto flex flex-col md:flex-row py-10 md:py-20">
        <div className="md:w-1/2 flex items-center p-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quiénes Somos?
            </h1>
            <p className="z-20 text-gray-600 font-bold text-lg max-w-[600px] justify-center text-justify">
              En{" "}
              <span className="text-gray-700 font-extrabold">
                Cliníca Dental Alvarado
              </span>
              , entendemos que tu sonrisa es una parte esencial de tu vida.
              Estamos comprometidos a brindarte una atención dental excepcional
              que va más allá de la simple corrección de problemas bucales.
              Creemos que una sonrisa saludable es una puerta a la confianza, la
              felicidad y la salud en general.
              <br />
              <br />
              En el corazón de nuestra clínica, encontrarás un equipo de
              profesionales apasionados y altamente calificados, cuya prioridad
              es cuidar de ti y de tu familia. Nuestros dentistas, higienistas y
              personal de apoyo se dedican a ofrecer un ambiente amable y
              acogedor donde te sentirás cómodo desde el momento en que cruces
              nuestras puertas.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={clinic}
            alt="Clinic"
            className="w-full h-auto rounded-lg shadow-lg md:mx-10"
          />
        </div>
      </div>
      <div className=" container mx-auto flex flex-col pt-10 md:flex-row md:pb-10">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src={philosophy}
            alt="philosophy"
            className="w-full h-4/6 rounded-lg shadow-lg md:mx-10"
          />
        </div>
        <div className="md:w-1/2 flex items-center p-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-custom-36D7B6">
              Nuestra Filosofía
            </h1>
            <p className="z-20 text-gray-600 font-bold text-lg max-w-[600px] justify-center text-justify">
              Nos enorgullece abrazar la última tecnología y las técnicas
              dentales más avanzadas para brindar la mejor atención posible. Sin
              embargo, no perdemos de vista el toque humano que hace que nuestra
              clínica sea especial. Cada paciente es único, y tratamos a todos
              con compasión, respeto y atención personalizada.
              <br />
              <br />
              En{" "}
              <span className="text-gray-700 font-extrabold">
                Cliníca Dental Alvarado
              </span>
              , no solo cuidamos de tus dientes, sino también de tu comodidad y
              bienestar general. Sabemos que visitar al dentista puede ser una
              experiencia ansiosa para algunos, por lo que hacemos todo lo
              posible para que te sientas relajado y en buenas manos.
            </p>
          </div>
        </div>
      </div>x
    </main>
  );
}

export default About;
