import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import ApiHandler from "../../utils/ApiHandler";

 function SignUp() {
  const onFinish = async (values) => {
   const response= await ApiHandler("GET");
   localStorage.setItem("token", response.data.request_token);
   window.location.href = `https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:3000/signup`;
  
};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const session = () => {
    const getApiData = async () => {
      try {
        let tok = localStorage.getItem("token1");
        console.log(tok, "tok");
        const response = await fetch(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=c12531a82a60035f2bcdef9bb2c8ff3c&request_token=${tok}`,
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        const result = await response.json();
        
        localStorage.setItem("sessionId", result.session_id);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getApiData();
  };
  return (
    <>
      <Button type="primary">
        <Link to="/login">Login</Link>
      </Button>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

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
      <Button onClick={session}>Session ID</Button>
    </>
  );
}

export {SignUp};