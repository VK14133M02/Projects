import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/auth/action";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const { username, email, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      dispatch(registerUser(user)).then(() => navigate("/login"));
    } else {
      alert("Fill all the details!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SimpleGrid column={1} width="20%" margin={"auto"} marginTop="5rem">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input type="submit" value="Regiseter" />
        </SimpleGrid>
      </form>
    </div>
  );
};

export default Register;
