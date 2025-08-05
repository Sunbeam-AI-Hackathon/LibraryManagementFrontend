// Input Component
// Reusable input field for forms (e.g., Full Name, Email, ISBN)
export function Input({ label, value, onChange, placeholder, required = false, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}