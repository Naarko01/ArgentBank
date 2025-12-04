export default function FeatureItem({ imageUrl, title, content }) {
	return (
		<div className="feature-item">
			<img src={imageUrl} alt="" />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
}
