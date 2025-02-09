import React, { useEffect } from "react";
import "./RegistrationForm.css";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique ID generation

const initialValues = {
  fn: "",
  ln: "",
  pn: "",
  bd: "",
  bp: "",
  address1: "",
  address2: "",
  pp: null, // Adjust to null for file input
};

export const RegistrationForm = ({ onSubmit, editUser }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      // Include unique ID if not editing
      const newUser = editUser
        ? { ...values, id: editUser.id }
        : { ...values, id: uuidv4() };
      onSubmit(newUser); // Call the onSubmit prop with the new user data
      action.resetForm(); // Reset form after submission
    },
  });

  // Populate form with user data if editing
  useEffect(() => {
    if (editUser) {
      formik.setValues(editUser);
    }
  }, [editUser]);

  return (
    <form className="regis-form-main" onSubmit={formik.handleSubmit}>
      <div className="regis-form">
        <h1 id="rf">{editUser ? "Update User" : "Registration Form"}</h1>

        <div className="fn-ln">
          <div className="fn">
            <label htmlFor="fn">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="First Name"
              id="fn"
              className="fn-inp"
              name="fn"
              value={formik.values.fn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.fn && formik.touched.fn ? (
              <p className="form-error">{formik.errors.fn}</p>
            ) : null}
          </div>

          <div className="ln">
            <label htmlFor="ln">
              Last Name<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              id="ln"
              className="ln-inp"
              name="ln"
              value={formik.values.ln}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.ln && formik.touched.ln ? (
              <p className="form-error">{formik.errors.ln}</p>
            ) : null}
          </div>
        </div>

        <div className="pn">
          <label htmlFor="ph">
            Phone Number<sup>*</sup>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            id="ph"
            className="pn-inp"
            name="pn"
            value={formik.values.pn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.pn && formik.touched.pn ? (
            <p className="form-error">{formik.errors.pn}</p>
          ) : null}
        </div>

        <div className="bd-bp">
          <div className="bd">
            <label htmlFor="bd">
              Birth Date<sup>*</sup>
            </label>
            <input
              type="date"
              id="bd"
              className="bd-inp"
              name="bd"
              value={formik.values.bd}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.bd && formik.touched.bd ? (
              <p className="form-error">{formik.errors.bd}</p>
            ) : null}
          </div>

          <div className="bp">
            <label htmlFor="bp">
              Birth Place<sup>*</sup>
            </label>
            <input
              type="text"
              id="bp"
              className="bp-inp"
              name="bp"
              value={formik.values.bp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.bp && formik.touched.bp ? (
              <p className="form-error">{formik.errors.bp}</p>
            ) : null}
          </div>
        </div>

        <div className="address">
          <label htmlFor="address">
            Address<sup>*</sup>
          </label>
          <textarea
            name="address1"
            placeholder="Address Line 1"
            className="add1-inp"
            rows="5"
            id="address1"
            value={formik.values.address1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.address1 && formik.touched.address1 ? (
            <p className="form-error">{formik.errors.address1}</p>
          ) : null}

          <textarea
            name="address2"
            placeholder="Address Line 2"
            className="add2-inp"
            rows="5"
            id="address2"
            value={formik.values.address2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

         {/* Profile Picture */}
         <div className="pp">
          <label htmlFor="pp">Upload a profile picture :</label>
          {formik.values.pp && (
            <img
              src={formik.values.pp}
              alt="Profile Preview"
              style={{ width: 50, height: 50, marginLeft: 20}}
            />
          )}
          <input
            type="file"
            accept="image/*"
            id="pp"
            className="pp-inp"
            name="pp"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                formik.setFieldValue("pp", imageUrl); // Update field value to the image URL
              }
            }}
            onBlur={formik.handleBlur}
          />
          {formik.errors.pp && formik.touched.pp ? <p className="form-error">{formik.errors.pp}</p> : null}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-info">
          {editUser ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};
