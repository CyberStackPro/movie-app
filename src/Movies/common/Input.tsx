import React, { FormEvent } from "react";

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  error?: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  label,
  onChange,
  value,
  error,
  type,
}: FormInputProps) => {
  return (
    <div className="form-group ">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        id={name}
        name={name}
        placeholder={`Enter ${name}`}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
