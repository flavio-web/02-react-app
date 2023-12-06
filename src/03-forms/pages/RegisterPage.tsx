
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { name, email, password, password2, formData, onChange, onReset, isValidEmail } = useForm({
        name: 'Flavio',
        email: '',
        password: '',
        password2: ''
    });
    
    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log( formData );
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={ onSubmit } >
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={ `${ name.trim().length <= 0 && 'has-error'}` } 
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value={ email }
                    onChange={ onChange } 
                    className={ `${ !isValidEmail( email ) && 'has-error'}` } 
                />
                { !isValidEmail( email ) && <span>Email incorrecto</span> }

                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={ password }
                    onChange={ onChange } 
                    className={ `${ (password.trim().length < 6) && 'has-error'}` } 
                />
                { password.trim().length === 0 && <span>Este campo es obligatorio</span> }
                { password.trim().length > 0 && password.trim().length < 6 && <span>Password debe de tener 6 caracteres</span> }

                <input 
                    type="password" 
                    placeholder="Repeat Password" 
                    name="password2"
                    value={ password2 }
                    onChange={ onChange } 
                    className={ `${ (password2.trim().length < 6 || password !== password2) && 'has-error'}` } 
                />
                { password2.trim().length === 0 && <span>Este campo es obligatorio</span> }
                { password2.trim().length > 0 && password2.trim().length < 6 && <span>Password debe de tener 6 caracteres</span> }
                { password2.trim().length > 0 && password !== password2 && <span>Las contraseñas deben de ser iguales</span> }

                <button type="submit" >Create</button>
                <button type="button" onClick={ onReset } >Reset</button>
            </form>
        </div>
    )
}
