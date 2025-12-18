export default function AccountItem({ accTitle, accAmount, accDescription }) {
	//props will come from API when ready and the "View Transactions" button will be fetching transactions API
	return (
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">{accTitle}</h3>
				<p className="account-amount">{accAmount}</p>
				<p className="account-amount-description">{accDescription}</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	);
}
