import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const { email, password } = user;

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios
      .get("https://mock-server-m6hv.onrender.com/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].email === email) {
          if (data[i].password === password) {
            alert("Login Sucessful!");
            navigate("/usermovie");
            return;
          } else {
            alert("Enter correct Password");
            return;
          }
        }
      }
      alert("wrong credential!");
    } else {
      alert("Login Failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SimpleGrid column={1} width="20%" margin={"auto"} marginTop="5rem">
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
          <input type="submit" value="Login" />
        </SimpleGrid>
      </form>
    </div>
  );
};

export default Signin;
