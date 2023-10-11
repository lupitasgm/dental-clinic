export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-[100vh] bg-[#BCDAF2] relative overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Inicio de Sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Correo electrónico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="paciente@clinica.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Tu contraseña"
              required
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Iniciar Sesión
            </button>
            <a href="#" className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
