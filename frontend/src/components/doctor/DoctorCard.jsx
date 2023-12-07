/* eslint-disable react/prop-types */
import male from "../../assets/images/male.jpg";
import female from "../../assets/images/female.jpg";

export default function DoctorCard({
  doctors,
  selectedDoctor,
  setSelectedDoctor,
}) {
  return (
    <div className="border-r">
      <div className="rounded-md px-4 relative z-20 mr-2">
        <h1 className="px-1 pb-4 text-xl">
          Sobre tu <span className="italic text-blue-950">dentista </span>:
        </h1>
        <div className="h-[300px] rounded-xl flex items-center justify-center mb-4">
          <img
            src={selectedDoctor?.gender === "M" ? male : female}
            className="object-cover h-[300px] w-[300px] rounded-md px-1"
          />
        </div>
        <select
          className="bg-transparent font-bolder text-2xl border-0 outline-none w-full text-blue-500"
          onChange={(e) => setSelectedDoctor(doctors[e.target.value])}
        >
          {doctors?.map((doctor, idx) => (
            <option className="text-black text-sm" key={idx} value={idx}>
              {doctor.name}
            </option>
          ))}
        </select>
        <div className="flex flex-col gap-4 pt-4 font-normal px-1 text-left">
          <p>{selectedDoctor?.gender === "M" ? "Masculino" : "Femenino"}</p>
          <p>{selectedDoctor?.description}</p>
        </div>
      </div>
    </div>
  );
}
