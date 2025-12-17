import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
	const { user, isAuthenticated, editUser } = useAuth();
	const [inEditMode, setInEditMode] = useState(false);
	const [firstName] = useState(user ? user.firstName : "");
	const [lastName] = useState(user ? user.lastName : "");
	const [userName, setUserName] = useState(user ? user.userName : "");
	const [feedback, setFeedback] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const success = await editUser(userName);
		if (success) {
			setFeedback("Changement validé");
		} else {
			setFeedback(user.error);
		}
	};

	const resetState = () => {
		setFeedback(null);
		setInEditMode(false);
	};

	useEffect(() => {
		if (!isAuthenticated) {
			return navigate("/");
		}
	}, [isAuthenticated, navigate]);

	const editForm = (
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="userName">User Name</label>
				<input
					type="text"
					name="userName"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" value={firstName} readOnly />
			</div>
			<div className="input-wrapper">
				<label htmlFor="lastName">Last Name</label>
				<input type="text" name="lastName" value={lastName} readOnly />
			</div>
			{feedback ? <p>{feedback}</p> : null}
			<button onClick={handleSubmit}>Save</button>
			<button onClick={resetState}>Retour</button>
		</form>
	);

	const content = (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{user?.firstName}
				</h1>
				{inEditMode && editForm}
				{!inEditMode && (
					<button
						className="edit-button"
						onClick={() => setInEditMode(true)}
					>
						Edit Name
					</button>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Checking (x8349)</h3>
					<p className="account-amount">$2,082.79</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">Argent Bank Savings (x6712)</h3>
					<p className="account-amount">$10,928.42</p>
					<p className="account-amount-description">Available Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
			<section className="account">
				<div className="account-content-wrapper">
					<h3 className="account-title">
						Argent Bank Credit Card (x8349)
					</h3>
					<p className="account-amount">$184.30</p>
					<p className="account-amount-description">Current Balance</p>
				</div>
				<div className="account-content-wrapper cta">
					<button className="transaction-button">View transactions</button>
				</div>
			</section>
		</main>
	);
	return content;
}
