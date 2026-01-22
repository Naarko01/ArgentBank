import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
	const { loginUser, authError } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (email === "" || password === "") {
			setError("Vérifiez que tous les champs sont remplis");
			return;
		}
		const success = await loginUser(email, password);
		if (success) {
			navigate("/ArgentBank/user");
		} else {
			setError(authError);
		}
	};

	const updateState = (e) => {
		e.currentTarget.id === "username" ?
			setEmail(e.currentTarget.value)
		:	setPassword(e.currentTarget.value);
		setError(null);
	};

	useEffect(() => {
		setError(error);
	}, [error]);

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							value={email}
							onChange={updateState}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={updateState}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					{error ?
						<p className="form-error">{error}</p>
					:	null}
					<button className="sign-in-button">Login</button>
				</form>
			</section>
		</main>
	);
}
