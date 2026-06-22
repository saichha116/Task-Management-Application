import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user }) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_data");
        navigate("/login");
    };

    return (
        <nav className="navbar">

            <h2 className="logo">Task Manager</h2>

            <div className="nav-right">

                {user && (
                    <h3 className="welcome">
                        Welcome, {user.name}
                    </h3>
                )}

                <button className="logout-btn" onClick={logout}>
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;