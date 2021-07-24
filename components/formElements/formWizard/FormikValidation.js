import React from "react";
import { useFormik } from "formik";


const FormikValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Name</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Name</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </form>
    </div>
  );
};

export default FormikValidation;
