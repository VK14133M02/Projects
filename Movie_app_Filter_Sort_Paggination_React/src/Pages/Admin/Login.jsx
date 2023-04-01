import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../../Components/AdminNavbar";
import { loginAdmin } from "../../Redux/Auth/action";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  let name, value;
  const handleLoginInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginAdmin(loginData));
      alert("Login Success")
      navigate("/admindashboard")
    } else {
      alert("Wrong Credential!");
    }
  };

  return (
    <div>
      <AdminNavbar />
      <form>
        <SimpleGrid width={"20%"} margin="auto" mt="3rem">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleLoginInput}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleLoginInput}
            placeholder="Password"
          />
          <Button onClick={handleLogin}>Login</Button>
        </SimpleGrid>
      </form>
    </div>
  );
};

export default Login;
