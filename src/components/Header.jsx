import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">LOGO</a>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/AboutUs">Chi Siamo</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Posts">Posts</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}