// SearchBar Component
// Reusable search input for searching members or books
export function SearchBar({ label, value, onChange, placeholder }) {
  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
      />
      <span className="absolute left-3 top-9 text-gray-400">🔍</span>
    </div>
  );
}