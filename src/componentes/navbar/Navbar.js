import { Link, NavLink } from "react-router-dom";
import App from "../../App";
import CartWidget from "./CartWidget/CartWidget";
import LOGO from "./LOGO/logoPSnaranja.png";
import { CartContext } from "./../../contex/CartContext";

const Navbar = () => {
    return (
        <nav
            className='NavBar'
            style={{
                paddingTop: "50px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Link to={"/"}>
                <img
                    className='logonaranja'
                    src={LOGO}
                    alt='logo Ps naranja'
                    width='30%'
                    style={{ borderRadius: "30px" }}
                />
            </Link>

            <div
                className='Categories'
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <Link
                    to={"/category/Secos"}
                    className={({ isActive }) =>
                        isActive ? "ActiveOption" : "Option"
                    }
                >
                    Secos
                </Link>
                <Link
                    to={"/category/Artesanales"}
                    className={({ isActive }) =>
                        isActive ? "ActiveOption" : "Option"
                    }
                >
                    Artesanales
                </Link>
                <Link
                    to={"/category/Dulces"}
                    className={({ isActive }) =>
                        isActive ? "ActiveOption" : "Option"
                    }
                >
                    {" "}
                    Dulces
                </Link>
                <CartWidget />
            </div>
        </nav>
    );
};
export default Navbar;
