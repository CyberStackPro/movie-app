import React from "react";

interface Props {
  onChange: (text: string) => void;
  value: string;
}
const SearchInput = ({ onChange, value }: Props) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchInput;
