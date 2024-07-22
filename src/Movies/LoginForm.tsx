import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "./common/Input";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 character" })
    .trim(),
  password: z.string().min(3),
});

type FormData = z.infer<typeof schema>;
const LoginForm = () => {
  const [account, setAccount] = useState<FormData>({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(account);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });

    try {
      schema.pick({ [name]: true }).parse({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors((prev) => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
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
