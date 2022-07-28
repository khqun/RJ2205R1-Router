import { useState } from "react";
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate()
    const [account, setAccount] = useState({})
    const handleOnChange = (e) => {
        setAccount({
            ...account, [e.target.name]: e.target.value
        })
    }
    const handleValidate = () => {
        let errors = {};
        if (!account.username) {
            errors.username = 'required'
        } else if (account.username !== 'admin@gmail.com') {
            errors.username = 'wrong username'
        }

        if (!account.password) {
            errors.password = 'required'
        } else if (account.password !== 'letmein') {
            errors.password = 'wrong password'
        }
        return errors
    }
    const handleSubmit = () => {
        alert('success');
        navigate("/employees")
    }
    return (
        <div>
            <h1>Contact form </h1>
            <Formik
                initialValues={account}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div>
                                    <h2>Username</h2>
                                    <input
                                        type="text"
                                        name="username"
                                        onChange={handleOnChange}
                                        value={account.username}
                                    />
                                </div>
                                {errors.username && (
                                    <div>
                                        <p className="error">{errors.username}</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <div>
                                    <h2>Password</h2>
                                    <input
                                        type="text"
                                        name="password"
                                        onChange={handleOnChange}
                                        value={account.password}
                                    />
                                </div>
                                {errors.password && (
                                    <div>
                                        <p className="error">{errors.password}</p>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                )}

            </Formik>
        </div>
    )
}
export default Login