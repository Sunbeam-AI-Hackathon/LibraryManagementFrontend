// Select Component
// Reusable dropdown for selections (e.g., Subject, Rack Location)
export function Select({ label, value, onChange, options, placeholder, required = false }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
