import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstraction= () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}
                validationSchema={ 
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Email no es válido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                            .required('Requerido')
                            .notOneOf(['it-junior'], 'Esta opcion no es permitida')
                    })
                }
            >
                { (formik) => (
                        <Form>
                            <MyTextInput label="First Name" name="firstName" placeholder="First Name"/>
                            
                            <MyTextInput label="Last Name" name="lastName" placeholder="Last Name"/>
                            
                            <MyTextInput label="Email" name="email" type="email" placeholder="flavio@gmail.com"/>

                            <MySelect label="ob Type" name="jobType">
                                <option value=''>Pick something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-junior'>IT Junior</option>
                            </MySelect>


                            <MyCheckbox label='Terminos y Codiciones' name='terms' />
            
                            <button type="submit">Register</button>
                        </Form>
                    )
                }

            </Formik>


            
        </div>

    )
}
