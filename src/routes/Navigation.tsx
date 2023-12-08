import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction, RegisterFormikPage, DynamicForm } from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="" />

                        <ul>
                            <li>
                                <NavLink to="/register" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Register Page</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-register" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Register Formik Page</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dynamic-form" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Dynamic Form</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-basic" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-yup" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-components" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-abstraction" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                            </li>
                            
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/register" element={ <RegisterPage/> }></Route>
                        <Route path="/formik-register" element={ <RegisterFormikPage/> }></Route>
                        <Route path="/dynamic-form" element={ <DynamicForm/> }></Route>
                        <Route path="/formik-basic" element={ <FormikBasicPage/>}></Route>
                        <Route path="/formik-yup" element={ <FormikYupPage/>}></Route>
                        <Route path="/formik-components" element={ <FormikComponents/>}></Route>
                        <Route path="/formik-abstraction" element={ <FormikAbstraction/>}></Route>
                        <Route path="/" element={ <h1>Home Page</h1>}></Route>

                        <Route path="/*" element={ <Navigate to="/home" replace />}></Route>
                    </Routes>

                </div>
            </BrowserRouter>
        </>
    )
}
