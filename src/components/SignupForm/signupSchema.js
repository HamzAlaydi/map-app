import * as yup from "yup";

export const signupSchema = yup
  .object({
    email: yup
      .string()
      .email("this filed must be email contains @ .com")
      .required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().matches(/^[0-9]{8}$/, "phone must be 8 numbers"),
    password: yup
      .string()
      .min(6, "must be 6 charachters at least")
      .required("is required !!"),
    selection: yup.string().required("must select your authorization"),
  })
  .required();
