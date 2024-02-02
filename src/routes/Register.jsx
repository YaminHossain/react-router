import React from "react";
import { Form, useActionData } from "react-router-dom";
export const registerAction = () => {
    console.log("Hi I am action");
    return null;
};

const Register = () => {
 return (
    <div>
      <Form method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
        <input type="submit" name="submit" id="" />
      </Form>
    
    </div>
  );
};

export default Register;
