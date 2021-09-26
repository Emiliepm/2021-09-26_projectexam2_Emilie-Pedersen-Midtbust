import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import FormError from "../../components/common/FormError";

const schema = yup.object().shape({
  arrivalDate: yup.string().required("Please choose arrival date"),
  departureDate: yup.string().required("Please choose departure date"),
  numberOfAdults: yup.string().required("Please enter number of adults"),
  numberOfChildren: yup.string().required("Please enter number of children"),
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "Your name must have minimum 3 characters."),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Your last name must have minimum 4 characters."),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  mobile: yup.string().required("Please enter a mobile number"),
  additionalInfo: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function EnquiryForm() {
  const [serverError, setServerError] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const http = useAxios();

  const { name } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function onSubmit(data) {
    data.hotelName = name;

    console.log("The data is now: ", data);
    try {
      const response = await http.post("/enquiries", data);
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
      <p>{serverError !== null ? serverError : ""}</p>
      <form className="enquiry" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="add--light">Hotel name: </h2>
        <h3 className="add--light">{name}</h3>
        <h3 className="enquiry__form ">Arrival</h3>
        <input {...register("arrivalDate")} type="date" />
        {errors.arrivalDate && (
          <FormError>{errors.arrivalDate.message}</FormError>
        )}

        <h3 className="enquiry__form ">Departure:</h3>
        <input {...register("departureDate")} type="date" />
        {errors.departureDate && (
          <FormError>{errors.departureDate.message}</FormError>
        )}

        <h3 className="enquiry__form ">Adults</h3>
        <input {...register("numberOfAdults")} type="number" />
        {errors.numberOfAdults && (
          <FormError>{errors.numberOfAdults.message}</FormError>
        )}

        <h3 className="enquiry__form ">Children</h3>
        <input {...register("numberOfChildren")} type="number" />
        {errors.numberOfChildren && (
          <FormError>{errors.numberOfChildren.message}</FormError>
        )}
        <h3 className="enquiry__form ">First name: </h3>
        <input {...register("firstName")} />
        {errors.firstName && <FormError>{errors.firstName.message}</FormError>}

        <h3 className="enquiry__form">Last name: </h3>
        <input {...register("lastName")} />
        {errors.lastName && <FormError>{errors.lastName.message}</FormError>}

        <h3 className="enquiry__form ">Email:</h3>
        <input {...register("email")} />
        {errors.email && <FormError>{errors.email.message}</FormError>}

        <h3 className="enquiry__form ">Mobile:</h3>
        <input {...register("mobile")} type="tel" />
        {errors.mobile && <FormError>{errors.mobile.message}</FormError>}

        <h3 className="enquiry__form ">Additional information:</h3>
        <textarea placeholder="Write here.." {...register("additionalInfo")} />
        {errors.additionalInfo && (
          <FormError>{errors.additionalInfo.message}</FormError>
        )}

        {formSent === true ? (
          <p>Thank you!</p>
        ) : (
          <button className="mid__btn">Send</button>
        )}
      </form>
    </>
  );
}

export default EnquiryForm;
