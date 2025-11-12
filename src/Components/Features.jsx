export default function Features({ imageUrl, title, content }) {
	return (
		<article>
			<div>
				<img src={imageUrl} alt="" />
			</div>
			<h2>{title}</h2>
			<p>{content}</p>
		</article>
	);
}
