import { useEffect, useState } from "react";
import Doctor from "../requests/Doctor";

export default function useDoctorInformation(selectedDoctor) {
  const [doctors, setDoctors] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    Doctor.get()
      .then((res) => {
        setDoctors(res.data);
        selectedDoctor(res.data[0]);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { doctors, loading, error };
}
