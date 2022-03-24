import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .email("this filed must be email contains @ .com")
      .required(),
    password: yup
      .string()
      .min(6, "must be 6 charachters at least")
      .required("is required !!"),
  })
  .required();
