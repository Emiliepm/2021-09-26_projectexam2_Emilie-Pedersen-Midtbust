import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import FormError from "../../components/common/FormError";
import SubHeading from "../layout/SubHeading";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your name must have minimum 3 characters."),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(2, "Your last name must have minimum 2 characters."),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter a subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function ContactForm() {
  const [serverError, setServerError] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    try {
      const response = await http.post("/messages", data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setFormSent(true);
    }
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{serverError !== null ? serverError : ""}</p>
        {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
        <h3 className="add--light">What can we do for you?</h3>
        <input
          name="name"
          placeholder="First name"
          {...register("firstName")}
        />

        {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
        <input name="name" placeholder="Last name" {...register("lastName")} />

        {errors.email && <FormError>{errors.email.message}</FormError>}

        <input name="name" placeholder="Email" {...register("email")} />

        {errors.subject && <FormError>{errors.subject.message}</FormError>}

        <input name="name" placeholder="Subject" {...register("subject")} />

        <SubHeading title="Message"></SubHeading>
        {errors.message && <FormError>{errors.message.message}</FormError>}

        <textarea
          name="description"
          placeholder="Description"
          {...register("message")}
          placeholder="Write a message here.."
        />

        {formSent === true ? (
          <p>Thank you!</p>
        ) : (
          <button className="mid__btn">Send</button>
        )}
      </form>
    </>
  );
}

export default ContactForm;
