import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react"

function InventoryView() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    return(
        <div>
            <Header activePath={"/inventory"}/>
            <div>
                <nav className="navbar navbar-expand-md bg-body py-3">
                    <div className="container">
                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-3">
                            <span className="visually-hidden">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navcol-3">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link
                                        to={"/inventory/screws"}
                                        className={`nav-link ${activePath === "/inventory/screws" ? "active" : ""}`}
                                        onClick={() => setActivePath("/inventory/screws")}
                                    >Screws</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to={"/inventory/screwdrivers"}
                                        className={`nav-link ${activePath === "/inventory/screwdrivers" ? "active" : ""}`}
                                        onClick={() => setActivePath("/inventory/screwdrivers")}
                                    >Screwdrivers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to={"/inventory/bolts"}
                                        className={`nav-link ${activePath === "/inventory/bolts" ? "active" : ""}`}
                                        onClick={() => setActivePath("/inventory/bolts")}
                                    >Bolts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to={"/inventory/nuts"}
                                        className={`nav-link ${activePath === "/inventory/nuts" ? "active" : ""}`}
                                        onClick={() => setActivePath("/inventory/nuts")}
                                    >Nuts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to={"/inventory/washers"}
                                        className={`nav-link ${activePath === "/inventory/washers" ? "active" : ""}`}
                                        onClick={() => setActivePath("/inventory/washers")}
                                    >Washers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default InventoryView;