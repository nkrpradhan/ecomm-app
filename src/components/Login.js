import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGlobalUser } from "../redux/features/user/userSlice";
import axios from "axios";

function Login() {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);

      //node js is not using form data in post its using, application/x-www-form-urlencoded format

      const testresp = await axios.post(
        "https://reactlogin-service.herokuapp.com/login",
        params
      );

      console.log(testresp);
      if (testresp.status === 200) {
        dispatch(setGlobalUser(username));
        navigate("/", { state: { user: username } });
      }
    } catch (e) {
      console.log("error--", e.response);
      typeof e.response.data === "undefined"
        ? alert("No response from server")
        : alert(e.response.data);
    }
  };
  return (
    <>
      <div className="grid grid-container">
        <h1 className="text-dark">Login page</h1>
        <form className="grid form-container">
          <label className="text-dark" htmlFor="">
            User Name
            <input
              className="mx-1"
              type="text"
              name=""
              id=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label className="text-dark" htmlFor="">
            Password
            <input
              className="mx-3"
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            className="btn btn-dark form-btn-submit"
            onClick={handleSubmit}
          >
            Enter
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
