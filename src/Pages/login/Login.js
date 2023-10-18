
import { Button, Checkbox, Form, Input } from "antd";
import { Route, useNavigate,Routes } from "react-router-dom";
import Dashboard from "../dashboard";

export function Login(){
  let navigate=useNavigate();
  const onFinish =async (values) => {
    let tok = localStorage.getItem("token");
    values.request_token=tok;
    let {username,password,request_token}=values;
    console.log(values)
      try {
        let tok = localStorage.getItem("token");
        console.log(tok, "tok");
        const response = await fetch(
          `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c12531a82a60035f2bcdef9bb2c8ff3c`,
          {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
              'accept': "application/json",
              'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMTI1MzFhODJhNjAwMzVmMmJjZGVmOWJiMmM4ZmYzYyIsInN1YiI6IjY0M2UzZjExNDMyNTBmMDRmODUwZmY3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n8C5jIhRoWFBCvknA2BRcFNoqcs0RgTcMML9X4rQBvA'
            },
            body:JSON.stringify({
              username: username, // Replace with the actual username
              password: password, // Replace with the actual password
              request_token: tok // Replace with the actual request token
            }),
            start_time: new Date().getTime()
          }
        );
        const result = await response.json();
        console.log(result,new Date().getTime() , "result");
        localStorage.setItem("token1", result.request_token);
        result.success===true?navigate("/dashboard"):navigate("/login")
        localStorage.setItem("sessionId", result.session_id);
      } catch (error) {
        console.error("Error:", error);
      }
  };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
       
      };
      let sessonIDAuthenticated=localStorage.getItem("sessionId");
    return (
        <>
        
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
      
        </>
    )
}