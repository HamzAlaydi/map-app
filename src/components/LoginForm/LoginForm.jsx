import React from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input, Button, Checkbox } from "antd";
import { loginSchema } from "./loginSchema";
//styles
import "./loginForm.css";

const LoginForm = () => {
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
    },
    resolver: yupResolver(loginSchema),
  });

  //functions
  console.log(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-form">
      <Form
        onFinish={handleSubmit(onSubmit)}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
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

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
