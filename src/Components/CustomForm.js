import React from "react"
import { Formik, Form } from "formik"
import Button from "@material-ui/core/Button"
import CustomTextField from "./NewTextField"
import schema from "../schema"

const CustomForm = props => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      img: "",
      password: "",
      confirm: ""
    }}
    onSubmit={(data, { setSubmitting }) => {
      setSubmitting(true)
      console.log("submitting:", data)
      setSubmitting(false)
    }}
    validationSchema={schema}
  >
    {(values, isSubmitting) => (
      <Form className="custom-form">
        <div className="form-section">
          <CustomTextField name="firstName" placeholder="First Name *" />
          <CustomTextField name="lastName" placeholder="Last Name *" />
        </div>
        <div className="form-section">
          <CustomTextField type="number" name="age" placeholder="age" />
          <CustomTextField name="email" placeholder="enter email *" />
        </div>
        <div className="form-section">
          <CustomTextField
            type="password"
            name="password"
            placeholder="password *"
          />
          <CustomTextField
            type="password"
            name="confirm"
            placeholder="confirm password *"
          />
        </div>
        <div className="form-section">
          <CustomTextField name="img" placeholder="enter img" />
        </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
    )}
  </Formik>
)

export default CustomForm
