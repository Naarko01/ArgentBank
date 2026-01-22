import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AccountItem from "../Components/AccountItem";

export default function UserPage() {
	const { user, isAuthenticated, editUser } = useAuth();
	const [inEditMode, setInEditMode] = useState(false);
	const [firstName] = useState(user ? user.firstName : "");
	const [lastName] = useState(user ? user.lastName : "");
	const [userName, setUserName] = useState(user ? user.userName : "");
	const [feedback, setFeedback] = useState(null);
	const navigate = useNavigate();

	//elements will be fetch from API when accounts and transactions routes will be ready
	const accountParam = [
		{
			accTitle: "Argent Bank Checking (x8349)",
			accAmount: "$2,082.79",
			accDescription: "Available Balance",
		},
		{
			accTitle: "Argent Bank Savings (x6712)",
			accAmount: "$10,928.42",
			accDescription: "Available Balance",
		},
		{
			accTitle: "Argent Bank Credit Card (x8349)",
			accAmount: "$184.30",
			accDescription: "Current Balance",
		},
	];

	const handleSubmit = async (event) => {
		event.preventDefault();
		const success = await editUser(userName);
		if (success) {
			setFeedback("Changement validé !");
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
			return navigate("/ArgentBank/");
		}
	}, [isAuthenticated, navigate]);

	const editForm = (
		<form onSubmit={handleSubmit} className="user-update-form">
			<div className="input-wrapper user-update">
				<label htmlFor="userName">User Name</label>
				<input
					type="text"
					name="userName"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</div>
			<div className="input-wrapper user-update">
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" value={firstName} readOnly />
			</div>
			<div className="input-wrapper user-update">
				<label htmlFor="lastName">Last Name</label>
				<input type="text" name="lastName" value={lastName} readOnly />
			</div>
			{feedback ?
				<p
					className={
						feedback === "Changement validé !" ?
							"form-feedback-validate"
						:	"form-feedback-error"
					}
				>
					{feedback}
				</p>
			:	null}
			<div className="btn-wrapper">
				<button onClick={handleSubmit} className="user-update-btn">
					Save
				</button>
				<button onClick={resetState} className="user-update-btn">
					Retour
				</button>
			</div>
		</form>
	);

	const mainContent = (
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
			{accountParam.map((element, index) => (
				<AccountItem
					accAmount={element.accAmount}
					accDescription={element.accDescription}
					accTitle={element.accTitle}
					key={index}
				/>
			))}
		</main>
	);
	return mainContent;
}
