import { useEffect, useState } from "react";
import Appointments from "../requests/Appointments";
import useUserStore from "../stores/UserStore";
import male from "../assets/images/male.jpg";
import female from "../assets/images/female.jpg";
import { differenceInDays, format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const user = useUserStore((state) => state.user);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (!user) return;
    Appointments.get(user.user.id).then((res) => {
      setAppointments(res.data);
    });
  }, [user]);

  function deleteAppointment(id, idx) {
    Appointments.delete(id).then(() => {
      const oldAppointments = [...appointments];
      oldAppointments.splice(idx, 1);
      setAppointments(oldAppointments);
    });
  }

  return (
    <section className="min-h-screen bg-white font-bold flex items-center overflow-y-auto">
      <div className="container mx-auto my-20 flex flex-col">
        <h1 className="px-5 mb-2 text-4xl font-bold text-blue-950">
          <span className="italic font-normal">Bienvenido, </span>
          {user.user.name}. <br />
          Aquí están tus <span className="italic font-normal">cita(s):</span>
        </h1>
        <div className="grid mt-4 grid-cols-2 mx-5 gap-8">
          {appointments.map((appointment, idx) => (
            <div className="relative" key={idx}>
              <div className="py-4 px-4 border border-blue-950 rounded-md flex gap-4">
                <div className="h-[200px] rounded-xl flex items-center justify-center mb-4">
                  <img
                    src={appointment.doctor[0]?.gender === "M" ? male : female}
                    className="object-cover h-[200px] w-[200px] rounded-md px-1"
                  />
                </div>
                <div className="pr-2 border-r">
                  <h2>
                    Cita con{" "}
                    <span className="italic text-blue-900 font-extrabold">
                      {appointment.doctor[0].name}
                    </span>
                  </h2>
                  <p className="max-w-[240px] font-normal">
                    {appointment.doctor[0].description}
                  </p>
                </div>
                <div className="">
                  <p>
                    Fecha:{" "}
                    <span className="italic text-blue-900">
                      {format(new Date(appointment.schedule), "dd/MM/yyyy")}
                    </span>
                  </p>
                  <div className="font-normal">
                    Tu cita será en{" "}
                    {differenceInDays(
                      new Date(appointment.schedule),
                      new Date()
                    )}{" "}
                    día, a las {format(new Date(appointment.schedule), "hh:mm")}
                  </div>
                  <p className="font-normal">
                    Has agendado cita para:{" "}
                    <span className="font-bold text-blue-900 italic">
                      {appointment.skills[0].specialization}
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="absolute bottom-3 right-3"
                onClick={() => deleteAppointment(appointment.id, idx)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                  className="text-blue-500 cursor-pointer hover:scale-125 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
