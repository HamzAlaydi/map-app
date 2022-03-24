import { Form, Input, Select } from "antd";
import React from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./signupSchema";

//style
import "./signupForm.css";

const { Option } = Select;
const SignupForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      password: "",
      phone: "",
      createdBy: "1",
      updatedBy: "user",
      selection: "",
    },
    resolver: yupResolver(signupSchema),
  });

  //functions
  const onSubmit = (data) => console.log(data);
  return (
    <div className="signupForm">
      <h2>Register Your Account</h2>
      <Form
        onFinish={handleSubmit(onSubmit)}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Form.Item label="Email">
              <Input
                addonAfter={errors.email ? errors.email.message : ""}
                {...field}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Form.Item label="Password">
              <Input.Password
                {...field}
                addonAfter={errors.password ? errors.password.message : ""}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="FirstName"
              rules={[
                { required: true, message: "Please input your FirstName!" },
              ]}
            >
              <Input
                {...field}
                addonAfter={errors.firstName ? errors.firstName.message : ""}
              />
            </Form.Item>
          )}
        />{" "}
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="LastName"
              rules={[
                { required: true, message: "Please input your LastName!" },
              ]}
            >
              <Input
                {...field}
                addonAfter={errors.lastName ? errors.lastName.message : ""}
              />
            </Form.Item>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Form.Item label="Phone">
              <Input
                {...field}
                addonAfter={errors.phone ? errors.phone.message : ""}
              />
            </Form.Item>
          )}
        />
        <p>{errors.selection && `${errors.selection.message}`}</p>
        <Controller
          name="selection"
          control={control}
          render={({ field }) => (
            <Select
              required={true}
              name="selection"
              defaultValue="Delivery"
              style={{ width: 120, marginLeft: "17%" }}
              {...field}
            >
              <Option value="Delivery">Delivery</Option>
              <Option value="Client">Client</Option>
              <Option value="Manger">Manger</Option>
            </Select>
          )}
        />
        <Input type="submit" value="Submit" className="submit" />
      </Form>
    </div>
  );
};

export default SignupForm;
