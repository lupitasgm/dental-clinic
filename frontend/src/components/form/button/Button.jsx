// eslint-disable-next-line react/prop-types
export default function Button({ text }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        {text}
      </button>
      <a href="#" className="text-blue-500 hover:underline">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
}
