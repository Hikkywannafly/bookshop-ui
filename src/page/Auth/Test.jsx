import React from "react";

import { useFormik } from "formik";

export default function App() {
    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            password: "",
            confirm_password: ""
        }
    });

    return (
        <div className="App">
            <h1>Validation with Formik + Yup</h1>

            <form>
                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="full_name"
                        value={formik.values.full_name}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                    />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirm_password"
                        value={formik.values.confirm_password}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}