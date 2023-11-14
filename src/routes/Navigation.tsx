import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-pattners/pages/ShoppingPage';


export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="" />

                        <ul>
                            <li>
                                <NavLink to="/shopping" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Shopping</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/users" className={ ({ isActive}) => isActive ? 'nav-active' : '' }>Users</NavLink>
                            </li>
                            
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="about" element={ <h1>About Page</h1>}></Route>
                        <Route path="users" element={ <h1>Users Page</h1>}></Route>
                        <Route path="/shopping" element={ <ShoppingPage/>}></Route>

                        <Route path="/*" element={ <Navigate to="/shopping" replace />}></Route>
                    </Routes>

                </div>
            </BrowserRouter>
        </>
    )
}
