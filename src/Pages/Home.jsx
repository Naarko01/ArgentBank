import { FeatureItem } from "../Components";

export default function Home() {
	const featuresList = [
		{
			imgUrl: "./img/icon-chat.png",
			imgAlt: "Chat Icon",
			title: "You are our #1 priority",
			content:
				"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
		},
		{
			imgUrl: "./img/icon-money.png",
			imgAlt: "Chat Icon",
			title: "More savings means higher rates",
			content:
				"The more you save with us, the higher your interest rate will be!",
		},
		{
			imgUrl: "./img/icon-security.png",
			imgAlt: "Chat Icon",
			title: "Security you can trust",
			content:
				"We use top of the line encryption to make sure your data and money is always safe.",
		},
	];

	return (
		<main>
			<div className="hero">
				<section className="hero-content">
					<h2 className="sr-only">Promoted Content</h2>
					<p className="subtitle">No fees.</p>
					<p className="subtitle">No minimum deposit.</p>
					<p className="subtitle">High interest rates.</p>
					<p className="text">
						Open a savings account with Argent Bank today!
					</p>
				</section>
			</div>
			<section className="features">
				<h2 className="sr-only">Features</h2>
				{featuresList.map((element, id) => (
					<FeatureItem
						imageUrl={element.imgUrl}
						imageAlt={element.imgAlt}
						title={element.title}
						content={element.content}
						key={id}
					/>
				))}
			</section>
		</main>
	);
}
