import Logo from "../assets/img/SkunkworksLogo.png"
import { Link } from "react-router-dom";

function Header({ activePath }: { activePath: string }) {
    return(
        <nav className="navbar navbar-expand-md bg-body py-3">
            <div className="container">
                <Link
                    className="navbar-brand d-flex align-items-center"
                    to={"/"}
                    style={{paddingRight: "0px", marginLeft: "-60px", paddingLeft: "81px", marginRight: "92px"}}>
                    <span
                        className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
                        style={{background: "var(--bs-emphasis-color)"}}
                    >
                        <picture>
                            <img src={Logo} width="35" height="33" alt={"logo"}/>
                        </picture>
                    </span>
                    <span>Skunkworks</span>
                </Link>
                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                    <span className="visually-hidden">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1"
                     style={{marginLeft: "-70px", marginTop: "0px", paddingRight: "0px", marginRight: "-30px"}}>
                    <ul className="navbar-nav me-auto">
                        {/*<li className="nav-item">*/}
                        {/*    <Link to={'/'} className={`nav-link ${activePath === '/' ? 'active' : ''}`}>Home</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link to={'/docs'} className={`nav-link ${activePath === '/docs' ? 'active' : ''}`}>Docs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/inventory'} className={`nav-link ${activePath === '/inventory' ? 'active' : ''}`}>Inventory</Link>
                        </li>
                    </ul>
                    <button className="btn btn-primary" type="button" style={{marginRight: "52px"}}>
                        <Link to={'/login'} style={{textDecoration: "none", color: "white"}}>Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;