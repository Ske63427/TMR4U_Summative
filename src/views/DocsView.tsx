import Header from "../components/Header.tsx";
// import Footer from "../components/Footer.tsx";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function DocsView() {
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    const handleClick = (path: string) => {
        setActivePath(path);
    };

    const getButtonStyle = (path: string) => {
        return {
            marginLeft: "15px",
            borderRadius: "10px",
            backgroundColor: activePath === path ? "white" : "",
            color: activePath === path ? "#003478" : "",
        };
    };

    const getLinkStyle = (path: string) => {
        return {
            textDecoration: "none",
            color: activePath === path ? "#003478" : "inherit",
        };
    };

    return (
        <div>
            <Header activePath={"/docs"} />
            <div className="btn-group" role="group" style={{ marginLeft: "120px" }}>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={getButtonStyle("/docs/design")}
                    onClick={() => handleClick("/docs/design")}
                >
                    <Link to={"/docs/design"} style={getLinkStyle("/docs/design")}>Design</Link>
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={getButtonStyle("/docs/manufacturing")}
                    onClick={() => handleClick("/docs/manufacturing")}
                >
                    <Link to={"/docs/manufacturing"} style={getLinkStyle("/docs/manufacturing")}>Manufacturing</Link>
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={getButtonStyle("/docs/electronics")}
                    onClick={() => handleClick("/docs/electronics")}
                >
                    <Link to={"/docs/electronics"} style={getLinkStyle("/docs/electronics")}>Electronics</Link>
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={getButtonStyle("/docs/programming")}
                    onClick={() => handleClick("/docs/programming")}
                >
                    <Link to={"/docs/programming"} style={getLinkStyle("/docs/programming")}>Programming</Link>
                </button>
                <button
                    className="btn btn-primary"
                    type="button"
                    style={getButtonStyle("/docs/business")}
                    onClick={() => handleClick("/docs/business")}
                >
                    <Link to={"/docs/business"} style={getLinkStyle("/docs/business")}>Business</Link>
                </button>
            </div>
            <hr style={{width: "90%", margin: "auto", marginTop: "20px"}}/>
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

export default DocsView;