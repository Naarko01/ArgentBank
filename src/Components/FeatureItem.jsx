export default function FeatureItem({ imageUrl, imageAlt, title, content }) {
	return (
		<div className="feature-item">
			<img src={imageUrl} alt={imageAlt} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{content}</p>
		</div>
	);
}
