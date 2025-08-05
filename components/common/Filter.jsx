
import { SearchBar } from "./SearchBar"; // <-- Adjust path based on where SearchBar.jsx is located
import { Button } from "./Button";
import { Select } from "./Select";

export function Filter({ filters = [], onApply = () => {}, onReset = () => {} }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filters.map((filter, index) => (
          <div key={index}>
            {filter.type === "select" && (
              <Select
                label={filter.label || ""}
                value={filter.value || ""}
                onChange={filter.onChange || (() => {})}
                options={filter.options || []}
                placeholder={filter.placeholder || ""}
                required={filter.required || false}
              />
            )}
            {filter.type === "search" && (
              <SearchBar
                label={filter.label || ""}
                value={filter.value || ""}
                onChange={filter.onChange || (() => {})}
                placeholder={filter.placeholder || ""}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex space-x-2 mt-4">
        <Button onClick={onApply}>Apply Filters</Button>
        <Button variant="secondary" onClick={onReset}>Reset Filters</Button>
      </div>
    </div>
  );
}
