import { useState } from "react";
import useDoctorInformation from "../hooks/useDoctorInformation";
import DoctorCard from "../components/doctor/DoctorCard";
import useUserStore from "../stores/UserStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/datePicker.css";
import { addDays, getDay } from "date-fns";

const hours = [
  "8:00am - 9:00am",
  "9:00am - 10:00am",
  "10:00am - 11:00am",
  "11:00am - 12:00am",
  "1:00pm - 2:00pm",
  "2:00pm - 3:00pm",
  "3:00pm - 4:00pm",
  "4:00pm - 5:00pm",
];

export default function Schedule() {
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  const { doctors } = useDoctorInformation(setSelectedDoctor);
  const user = useUserStore((state) => state.user);

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

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
                <select className="w-full text-blue-950 border-none outline-none bg-transparent py-4 rounded-full ">
                  <option disabled selected>
                    Selecciona un procedimiento
                  </option>
                  {selectedDoctor?.skills?.map((skill, idx) => (
                    <option key={idx}>{skill?.specialization}</option>
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
                  className={`border border-blue-500 rounded-full px-4 py-6 mx-4 my-2 cursor-pointer hover:bg-blue-500 text-blue-500 hover:text-white transition-all`}
                >
                  {hour}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
