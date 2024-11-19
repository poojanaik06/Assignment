import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import "../signup/signup.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between Login and Sign-Up
  const [serverMessage, setServerMessage] = useState("");

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ...(isLogin
      ? {}
      : {
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        }),
  });

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (isLogin) {
        handleLogin(values);
      } else {
        handleSignUp(values);
      }
    },
  });

  // Dummy Sign-Up Handler
  const handleSignUp = (values) => {
    // Mock server response
    if (values.email === "nkpooja266@gmail.com") {
      setServerMessage("Email already in use");
    } else {
      setServerMessage("Sign-Up successful! Redirecting to login...");
      setTimeout(() => setIsLogin(true), 2000);
    }
  };

  // Dummy Login Handler
  const handleLogin = (values) => {
    // Mock server response
    if (values.email === "test@example.com" && values.password === "shawarma") {
      setServerMessage("Login successful! Redirecting to home...");
      setTimeout(() => window.location.href = "/", 2000); 
    } else {
      setServerMessage("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <h1>{isLogin ? "Login" : "Sign-Up"}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        {!isLogin && (
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error">{formik.errors.confirmPassword}</div>
            )}
          </div>
        )}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      {serverMessage && <div className="server-message">{serverMessage}</div>}
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;
