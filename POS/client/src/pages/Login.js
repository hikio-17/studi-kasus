import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (value) => {
    try {
      dispatch({ type: "SHOW_LOADING" });
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        value
      );
      dispatch({ type: "HIDE_LOADING" });
      message.success("user login Successfully");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      message.error("Something Went Wrong");
      console.log(error);
    }
  };

  //currently user login
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="register ">
        <div className="register-form">
          <h1>POS APP</h1>
          <h3>Login Page</h3>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <p>
                not a user Please
                <Link to="/register"> Register Here !</Link>
              </p>
              <Button type="primary" htmlType="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
