import React from "react";

export interface Category {
  id: string;
  name: string;
}
interface Props {
  category: Category[];
  filteredCategory: (category: string) => void;
}
const FilterByCategory = ({ category, filteredCategory }: Props) => {
  return (
    <div className="flex">
      <label htmlFor="category"></label>
      {category.map((c) => (
        <div key={c.id}>
          <input
            type="checkbox"
            name="category"
            id={c.id}
            // value={c.name}
            onChange={() => filteredCategory(c.id)}
            // checked={}
          />
          {c.name}
        </div>
      ))}
    </div>
  );
};

export default FilterByCategory;
