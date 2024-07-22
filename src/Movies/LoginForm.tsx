import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./common/Input";
import { ZodError, z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .trim(),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const [account, setAccount] = useState<FormData>({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(account);
      console.log(account);
    } catch (error) {
      if (error instanceof ZodError) {
        const formErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof FormData;
          formErrors[path] = err.message;
        });
        setErrors(formErrors);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });

    // try {
    //   schema.pick({ [name]: schema?.shape?[name] }).parse({ [name]: value });
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

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        error={errors.name}
        label="Username"
        type="text"
        name="name"
        value={account.name}
        onChange={handleChange}
      />
      <Input
        error={errors.password}
        label="Password"
        type="password"
        name="password"
        value={account.password}
        onChange={handleChange}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default LoginForm;
