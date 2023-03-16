import { Card, Input } from "@material-tailwind/react";
import { Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";

const Admission = () => {
  const [admit, setAdmit] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <Navigation />

      <Card>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{
            full_name: "",
            phone_number: "",
            email: "",
            father_name: "",
            mother_name: "",
            gender: "",
            religion: "",
            blood_group: "",
            date_of_birth: "",
            present_address: "",
            permanent_address: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.full_name}
                size="lg"
                label="First Name"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
                size="lg"
                label="Phone Number"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                size="lg"
                label="Email Address"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.father_name}
                size="lg"
                label="Father Name"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mother_name}
                size="lg"
                label="Mother Name"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
                size="lg"
                label="Gender"
              />
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.religion}
                size="lg"
                label="Religion"
              />
              {errors.email && touched.email && errors.email}
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Card>
      <Footer />
    </>
  );
};

export default Admission;
