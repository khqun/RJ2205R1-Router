import './App.css';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import InputForm from './components/input';
const regex = { email: /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/, phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/ };
function App() {
  const handleValidate = () => {
    const errors = {};
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.email) {
      errors.email = "Required"
    } else if (!regex.email.test(form.email)) {
      errors.email = "Invalid"
    }
    if (!form.phone) {
      errors.phone = "Required"
    } else if (!regex.phone.test(form.phone)) {
      errors.phone = "Invalid"
    }
    return errors
  }
  const [form, setForm] = useState({})
  const handleOnChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
    console.log(form);

  }
  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <div className='header'>
        <h1>Contact form</h1>
      </div>
      <div className='contact_form'>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {
            ({ errors,
              handleSubmit }
            ) => (
              <div>

                <Form onSubmit={handleSubmit}>
                  <InputForm handleChange={handleOnChange} label={"Name"} name="name" />
                  <p>{errors.name}</p>
                  <InputForm handleChange={handleOnChange} label={"Email"} name="email" />
                  <p>{errors.email}</p>
                  <InputForm handleChange={handleOnChange} label={"Phone"} name="phone" />
                  <p>{errors.phone}</p>
                  <button type="submit" onClick={handleSubmit}>Submit</button>
                </Form>
              </div>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default App;
