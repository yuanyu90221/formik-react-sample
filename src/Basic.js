import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
    <div className="flex justify-center items-center min-w-full min-h-full">
        <Formik
            initialValues={{ email: '', password: ''}}
            validate={values=> {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(()=>{
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
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit} className="border rounded p-10">
                    <h1>Formik sample</h1>
                    <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="border border-gray-700 rounded-md "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && <span className="text-red-500">{errors.email}</span>}
                    <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="border border-gray-700 rounded-md "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && <span className="text-red-500">{errors.password}</span>}
                    <br />
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )
            }
        </Formik>
    </div>
);
export default Basic;