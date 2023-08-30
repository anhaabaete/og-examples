import {routes} from "/App.jsx";
import {useLocation} from "react-router-dom";

export default function Nav() {
    const {pathname} = useLocation();
    console.log(pathname)
    return (
        <nav>
            {routes.filter((route) => route.path !== '/' ).map((route, i) => <a key={i} className={pathname === route.path ? 'active' : ''} href={import.meta.env.VITE_BASENAME+route.path}>{route.title}</a>)}
        </nav>
    )
}