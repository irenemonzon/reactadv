import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route,Routes,  NavLink, Navigate } from "react-router-dom";
import logo from '../logo.svg'
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt=" react logo" />
                <ul>
                    {
                        routes.map(({to,name})=>(
                            <li key={to}>
                                 <NavLink 
                                to={to} 
                                className={({isActive})=> isActive ? 'nav-active':''}>{name}</NavLink>
                            </li>
                        ))
                    }       
                </ul>
            </nav>
            <Routes>

                {
                    routes.map(route=>(

                        <Route
                            key={route.to}
                            path={route.path} 
                            element={<route.Component/>}/>

                    ))
                }
               
                <Route path="/*" element={<Navigate to={routes[0].to} replace />}/>
            </Routes>      
        </div>
    </BrowserRouter>
    </Suspense>
  )
}
