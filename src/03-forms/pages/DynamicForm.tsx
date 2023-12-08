import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form.json';


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {
        if( rule.type === 'required' ) {
            schema = schema.required( rule.description );
        }

        if( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, rule.description );
        }

        if( rule.type === 'email' ) {
            schema = schema.email( rule.description );
        }
    }

    requiredFields[ input.name ] = schema;
}

const validationShema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>
            <pre>{ JSON.stringify(initialValues) }</pre>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationShema }
                onSubmit={ (values) => {
                    console.log(values);
                }}
            >
                { (formik) => (
                    <Form noValidate>
                           { formJson.map( ({ type, name, placeholder, label, options }) =>{

                                if( type === 'text' || type === 'password' || type === 'email' ){

                                    return <MyTextInput 
                                        key={name} 
                                        type={( type as any )} 
                                        name={name} 
                                        label={ label }
                                        placeholder={placeholder}
                                    />
                                }else if( type === 'select' ){
                                    return (
                                        <MySelect 
                                            key={name} 
                                            label={ label } name={ name }
                                        >
                                        <option value=''>Select an option</option>
                                        {
                                            options?.map( ({ id, label: labelOpt }) =>(
                                                <option
                                                    key={ id } value={ id }>{ labelOpt }
                                                </option>
                                            ))
                                        }
                                        
                                        </MySelect>
                                    )
                                }

                               
                           } ) }


                            <button type="submit">Register</button>
                        </Form>

                    )
                }

            </Formik>
        </div>
    )
}
