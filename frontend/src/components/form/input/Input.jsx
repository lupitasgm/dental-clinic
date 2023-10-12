/* eslint-disable react/prop-types */
export default function Input({
  type,
  id,
  label,
  placeholder,
  register,
  errors,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
          errors[id] ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        {...register(id, { required: true })}
      />
    </div>
  );
}
