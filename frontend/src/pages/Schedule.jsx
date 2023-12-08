import { useEffect, useState } from "react";
import useDoctorInformation from "../hooks/useDoctorInformation";
import DoctorCard from "../components/doctor/DoctorCard";
import useUserStore from "../stores/UserStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/datePicker.css";
import { addDays, differenceInDays, getDay, getHours } from "date-fns";
import Appointments from "../requests/Appointments";

const hours = [
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [13, 14],
  [14, 15],
  [15, 16],
  [16, 17],
];

export default function Schedule() {
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  const [busy, setBusy] = useState([]);
  const [hourSelected, setHourSelected] = useState();
  const [skill, setSkill] = useState();
  const { doctors } = useDoctorInformation(setSelectedDoctor);
  const user = useUserStore((state) => state.user);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  useEffect(() => {
    setBusy([]);
    if (!selectedDoctor || !startDate) return;
    selectedDoctor.appointments.map((appointment) => {
      if (
        differenceInDays(new Date(appointment.pivot.schedule), startDate) != 0
      )
        return;
      let searchHour = getHours(new Date(appointment.pivot.schedule));
      console.log(searchHour);
      if (searchHour > 16 && searchHour < 8) return;
      for (let i = 0; i < hours.length; i++) {
        const [leftHour] = hours[i];
        if (searchHour == leftHour) {
          const isBusy = [...busy];
          isBusy.push(i);
          return setBusy(isBusy);
        }
      }
    });
  }, [startDate, selectedDoctor]);

  function scheduleDate() {
    const newDate = new Date(startDate);
    newDate.setHours(hourSelected[0], 0, 0, 0);
    const timezoneOffset = newDate.getTimezoneOffset();
    newDate.setMinutes(newDate.getMinutes() - timezoneOffset);
    const formattedDate = newDate.toISOString().slice(0, 19).replace("T", " ");

    Appointments.create({
      doctor_id: selectedDoctor.id,
      user_id: user.user.id,
      schedule: formattedDate,
      skill_id: Number(skill),
    })
      .then(() => {
        const isBusy = [...busy];
        isBusy.push(hours.indexOf(hourSelected));
        setBusy(isBusy);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section className="min-h-screen bg-white font-bold flex items-center">
      <div className="container mx-auto py-18 flex flex-col">
        <h1 className="px-5 mb-2 text-4xl font-bold text-blue-950">
          <span className="italic font-normal">Bienvenido, </span>
          {user.user.name}. <br /> Agenda tu{" "}
          <span className="italic font-normal">cita</span>
        </h1>
        <div className="grid grid-cols-5">
          <DoctorCard
            setSelectedDoctor={setSelectedDoctor}
            selectedDoctor={selectedDoctor}
            doctors={doctors}
          />
          <div className="col-span-4 ml-4 mt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-blue-950 rounded-full px-4 mx-4">
                <select
                  onChange={(e) => setSkill(e.target.value)}
                  className="w-full text-blue-950 border-none outline-none bg-transparent py-4 rounded-full "
                >
                  <option disabled selected>
                    Selecciona un procedimiento
                  </option>
                  {selectedDoctor?.skills?.map((skill, idx) => (
                    <option key={idx} value={skill.id}>
                      {skill?.specialization}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border border-blue-950 rounded-full mx-4 px-4 flex items-center justify-center ">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MMMM d, yyyy"
                  filterDate={isWeekday}
                  minDate={addDays(new Date(), 1)}
                  className="w-full border-none outline-none py-2 text-blue-950"
                />
              </div>
              <div className="col-span-2 h-[1px] bg-gray-300 my-4  mx-12"></div>
              {hours.map((hour, idx) => (
                <div
                  key={idx}
                  onClick={() => setHourSelected(hour)}
                  className={`${
                    busy.includes(idx)
                      ? "bg-blue-950 text-white border-blue-950 hover:bg-blue-950 hover:text-white cursor-auto"
                      : ""
                  } 
                  ${hourSelected === hour ? "bg-blue-500 text-white" : ""}
                  border border-blue-500 rounded-full px-4 py-6 mx-4 my-2 cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white transition-all`}
                >
                  {hour[0]}:00 - {hour[1]}:00
                </div>
              ))}
              <button
                className="mx-4 bg-blue-500 hover:bg-blue-950 transition-all duration-300 text-white py-4 col-span-2 rounded-full"
                onClick={scheduleDate}
              >
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
