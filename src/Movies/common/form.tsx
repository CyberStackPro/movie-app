import Input from "./Input";

export const renderInput = (name: string, label: string, type: string) => {
  return (
    <Input
      name={name}
      label={label}
      type={type}
      // error={errors[name]}
      onChange={handleChange}
      value={users[name]}
    />
  );
};
