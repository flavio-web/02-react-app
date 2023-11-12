import { NavLink, Navigate, Route, Routes } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages"

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="lazy1" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Lazy 1</NavLink>
          </li>
          <li>
            <NavLink to="lazy2" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Lazy 2</NavLink>
          </li>
          <li>
            <NavLink to="lazy3" className={ ({ isActive}) => isActive ? 'nav-active' : '' } >Lazy 3</NavLink>
          </li>
        </ul>
      </nav>


       <Routes>
        <Route path="lazy1" element={ <LazyPage1/> } />
        <Route path="lazy2" element={ <LazyPage2/> } />
        <Route path="lazy3" element={ <LazyPage3/> } />

       {/*  <Route path="/*" element={ <h1>404 - Not Found</h1> } /> */}
        <Route path="/*" element={ <Navigate to="lazy1" replace /> } />
      </Routes>
    </div>
  )
}


export default LazyLayout