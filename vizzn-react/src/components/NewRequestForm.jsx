import { Card, Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

export const NewRequestForm = () => {
  const { socket } = useContext(SocketContext);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    //work here
    form.resetFields(["title"]);
  };

  return (
    <Card title="New Request">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Request Title"
          name="title"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
