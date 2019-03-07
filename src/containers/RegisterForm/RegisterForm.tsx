import { FormikProps, withFormik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import { Button } from '../../components'

interface IFormValues {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const RegisterForm = (props: FormikProps<IFormValues>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.values.name}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.errors.name && props.touched.name && <p>{props.errors.name}</p>}
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.values.email}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.errors.email && props.touched.email && <p>{props.errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={props.values.password}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.errors.password && props.touched.password && <p>{props.errors.password}</p>}
      </div>
      <div>
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="passwordConfirmation"
          value={props.values.passwordConfirmation}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.errors.passwordConfirmation && props.touched.passwordConfirmation && <p>{props.errors.passwordConfirmation}</p>}
      </div>
      <Button variant="nude" size="xs" type="submit">Register</Button>
    </form>
  )
}

export default withFormik<{}, IFormValues>({
  mapPropsToValues: (props: any) => ({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Invalid email address'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password must match'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values))
    setSubmitting(false)
  },
})(RegisterForm)
