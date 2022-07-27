
import './App.css';
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
function App() {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={
        value => {
          console.log(value);
        }
      }
    >
      {({
        errors, touched,
      }) => (
        <Form
        >
          <Field name="email" />
          {errors.email && touched.email && (
            <div>
              {errors.email}
            </div>
          )}
          <button type="submit">Submit</button>
        </Form>
      )}

    </Formik>
  );
}

export default App;
