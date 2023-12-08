
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Page</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres máximo')
                            .min(2, 'Debe de tener 2 caracteres mínimo')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Email no es válido')
                            .required('Requerido'),
                        password: Yup.string()
                            .min(6, 'Debe de tener 6 caracteres mínimo')
                            .required('Requerido'),
                        password2: Yup.string()
                            .min(6, 'Debe de tener 6 caracteres mínimo')
                            .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales')
                            .required('Requerido'),
                    })
                }
            >
                { (formik) => (
                    <Form>
                    <MyTextInput label="Name" name="name" placeholder="Name"/>
                    
                    <MyTextInput label="Email" name="email" type="email" placeholder="flavio@gmail.com"/>

                    <MyTextInput label="Password" name="password" type="password" placeholder="Password"/>

                    <MyTextInput label="Password" name="password2" type="password" placeholder="Repeat Password"/>
    
                    <button type="submit">Register</button>
                    <button type="reset">Reset</button>
                </Form>
                )}
            </Formik>

        </div>
    )
}
