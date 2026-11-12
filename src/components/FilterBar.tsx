
import type { StatusFilter } from "../types";

interface FilterBarProps {
  current: StatusFilter;
  onChange: (filter: StatusFilter) => void;
}

function FilterBar({ current, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      <button
        type="button"
        aria-pressed={current === "all"}
        className={current === "all" ? "is-active" : ""}
        onClick={() => onChange("all")}
      >
        All
      </button>

      <button
        type="button"
        aria-pressed={current === "read"}
        className={current === "read" ? "is-active" : ""}
        onClick={() => onChange("read")}
      >
        Read
      </button>

      <button
        type="button"
        aria-pressed={current === "unread"}
        className={current === "unread" ? "is-active" : ""}
        onClick={() => onChange("unread")}
      >
        Unread
      </button>
    </div>
  );
}

export default FilterBar;
