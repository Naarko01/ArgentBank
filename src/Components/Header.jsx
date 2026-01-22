import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
	const { isAuthenticated, logoutUser, user } = useAuth();

	return (
		<nav className="main-nav">
			<Link to="/ArgentBank/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src="./img/argentBankLogo.png"
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{!isAuthenticated ?
					<Link to="/ArgentBank/login" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						Login
					</Link>
				:	<div className="nav-user-wrapper">
						<p>{user?.userName}</p>
						<a onClick={logoutUser} className="main-nav-item">
							<i className="fa fa-user-circle"></i>
							Logout
						</a>
					</div>
				}
			</div>
		</nav>
	);
}
