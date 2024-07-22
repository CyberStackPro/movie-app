import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./common/Input";
import { ZodError, z } from "zod";

const schema = z.object({
  username: z.string().email('"Username" must be a valid email'),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 character" }),
  name: z.string(),
});

type FormSchema = z.infer<typeof schema>;
const RegisterForms = () => {
  const [users, setUser] = useState<FormSchema>({
    username: "",
    password: "",
    name: "",
  });

  const [errors, setErrors] = useState<Partial<FormSchema>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUser({ ...users, [name]: value });

    try {
      schema.pick({ [name]: true }).parse({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(users);
  };
  const isDisabled = () => {
    for (let key in users) if ((key, users[key]) === "") return true;
    return false;
  };
  const renderInput = (name: string, label: string, type: string) => {
    return (
      <Input
        name={name}
        label={label}
        type={type}
        error={errors[name]}
        onChange={handleChange}
        value={users[name]}
      />
    );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {renderInput("username", "Username", "text")}
      {renderInput("password", "Password", "password")}
      {renderInput("name", "Name", "text")}

      <button disabled={isDisabled()} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForms;
