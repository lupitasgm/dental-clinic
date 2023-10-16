import { useForm } from "react-hook-form";
import Form from "../components/form/Form";
import Button from "../components/form/button/Button";
import Input from "../components/form/input/Input";
import User from "../requests/User";
import useUserStore from "../stores/UserStore";

export default function Register() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm({ mode: onchange });

  const alterUser = useUserStore((state) => state.setUser);

  function onSubmit() {
    User.register(getValues()).then((res) => {
      alterUser(res.data);
      localStorage.setItem("IUDBSOTKN", res.data.token);
    });
  }

  return (
    <main className="flex items-center justify-center min-h-[100vh] bg-[#BCDAF2] relative overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Registro de usuario</h2>
        <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
          <Input
            label="Nombre completo"
            type="text"
            id="name"
            placeholder={"Tu Nombre"}
            register={register}
            errors={errors}
          />
          <Input
            label="Correo electrónico"
            type="email"
            id="email"
            placeholder={"Tu correo electrónico"}
            register={register}
            errors={errors}
          />
          <Input
            label="Contraseña"
            type="password"
            id="password"
            placeholder={"Tu contraseña"}
            register={register}
            errors={errors}
          />
          <Button text="Registrate" />
        </Form>
      </div>
    </main>
  );
}
