import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import useAxios from "../../hooks/useAxios";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Hotel name is required")
    .min(3, "Hotel name must have minimum 3 characters."),
  price: yup
    .number()
    .required("Price is required")
    .min(2, "You have to write a double digit sum.")
    .typeError("Price must be a number"),
  description: yup
    .string()
    .required("Please enter description")
    .min(10, "The message must have at least 10 characters"),
});

export default function AddEstablishment() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [file, setFile] = useState([]);
  const [auth] = useContext(AuthContext);

  const history = useHistory();

  if (auth === null) {
    history.push("/");
  }

  const http = useAxios();

  const handleChange = (event) => {
    console.log("handleChange event is now: ", event.target.files);

    setFile(event.target.files[0]);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    const sendData = new FormData();

    sendData.append("data", JSON.stringify(data));
    sendData.append("files.image", file);

    console.log(file);
    console.log("Data is now: ", data);

    try {
      const response = await http.post("/hotels", sendData);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
      setFormSent(true);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="add--light">New Hotel</h3>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            {errors.name && <FormError>{errors.name.message}</FormError>}
            <input name="name" placeholder="Hotel name" {...register("name")} />
            {errors.price && <FormError>{errors.price.message}</FormError>}
            <input price="price" placeholder="Price" {...register("price")} />
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Description"
              {...register("description")}
            />
            {errors.description && (
              <FormError>{errors.description.message}</FormError>
            )}
          </div>

          <div>
            <label>Insert hotel image: </label>{" "}
            <input onChange={handleChange} type="file" />
          </div>
          {formSent ? <p>Hotel was added!</p> : ""}
          <button className="mid__btn">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
