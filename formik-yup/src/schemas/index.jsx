import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fn: Yup.string()
    .min(2, "First Name should have at least 2 characters")
    .max(25, "First Name should not exceed 25 characters")
    .required("Please enter your first name"),

  ln: Yup.string()
    .min(3, "Last Name should have at least 3 characters")
    .max(30, "Last Name should not exceed 30 characters")
    .required("Please enter your last name"),

  pn: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Enter your phone number"),

  bd: Yup.date()
    .max(new Date(), "Birth date cannot be in the future")
    .required("Enter a valid birth date"),

  bp: Yup.string()
    .min(2, "Birth Place should have at least 2 characters")
    .max(40, "Birth Place should not exceed 40 characters")
    .required("Please enter your birth place"),

  address1: Yup.string()
    .min(5, "Address should have at least 5 characters")
    .max(100, "Address should not exceed 100 characters")
    .required("Enter at least one address"),

    pp: Yup.mixed()
    .required("Profile picture is required"),
});
