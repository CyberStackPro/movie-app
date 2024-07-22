import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./common/Input";
import { ZodError, z } from "zod";

const schema = z.object({
  username: z.string().email("Username must be a valid email"),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

type FormSchema = z.infer<typeof schema>;

const RegisterForms = () => {
  const [users, setUser] = useState<FormSchema>({
    username: "",
    password: "",
    name: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormSchema, string>>
  >({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...users, [name]: value });

    // try {
    //   schema.pick({ [name]: true }).parse({ [name]: value });
    //   setErrors((prev) => ({ ...prev, [name]: undefined }));
    // } catch (error) {
    //   if (error instanceof ZodError) {
    //     setErrors((prev) => ({
    //       ...prev,
    //       [name]: error.errors[0].message,
    //     }));
    //   }
    // }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      schema.parse(users);
      console.log(users);
    } catch (error) {
      if (error instanceof ZodError) {
        const formErrors: Partial<Record<keyof FormSchema, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormSchema;
          formErrors[path] = err.message;
        });
        setErrors(formErrors);
      }
    }
  };

  const isDisabled = () => {
    for (let key in users)
      if (users[key as keyof FormSchema] === "") return true;
    return false;
  };

  const renderInput = (name: keyof FormSchema, label: string, type: string) => {
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
