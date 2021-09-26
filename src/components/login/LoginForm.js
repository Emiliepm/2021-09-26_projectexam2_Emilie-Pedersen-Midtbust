import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/Api";
import FormError from "../common/FormError";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter your username")
    .min(3, "Your username must have minimum 3 characters."),
  password: yup
    .string()
    .required("Please enter your password")
    .min(4, "Your password must have minimum 4 characters."),
});

function LoginForm() {
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        {errors.username && <FormError>{errors.username.message}</FormError>}
        <input placeholder="Username" {...register("username")} />

        {errors.password && <FormError>{errors.password.message}</FormError>}
        <input
          placeholder="Password"
          type="password"
          {...register("password")}
        />

        <button className="mid__btn">Login</button>
      </form>
    </>
  );

  function onSubmit(data) {
    setLoginError(null);
    console.log(data);
    doLogin(data.username, data.password);

    if (loading) {
      return <h2>Loading...</h2>;
    }
  }

  async function doLogin(username, password) {
    const url = BASE_URL + "/auth/local";
    console.log("Here now doLogin");

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();

      console.log(json);

      if (json.user) {
        setAuth(json);
        console.log("Auth is now: ", auth);

        history.push("/addhotelpage");
      }

      if (json.error) {
        setLoginError("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default LoginForm;
