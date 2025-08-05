export function Card({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      {icon && <span className="text-2xl block mb-2">{icon}</span>}
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}