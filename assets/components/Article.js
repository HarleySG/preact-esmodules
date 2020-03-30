import { html } from "../libs/preact.js";
const lovemsn = "❤️";
export default function Header(props) {
    const { title, url, id, time_ago, points, domain, user } = props;
    function handleFav(love) {
        console.log(love);
        localStorage.setItem("favors", love);
    }
    return html `
		<article
			class="c-article"
			id="hkn_${id}"
			itemscope
			itemtype="http://schema.org/Article"
		>
			<button
				class="c-article_btn"
				data-type="love"
				onClick=${() => handleFav(lovemsn)}
			>
				❤️
			</button>
			<a href="${url}" target="_blank" class="c-article_link">
				<h4 class="c-article_title" itemprop="headline">${title}</h4>
				<section class="c-article_body">
					<div class="c-article_data">
						<time itemprop="dateCreated datePublished"
							>⏰ ${time_ago}</time
						>
						<strong>⭐ ${points}</strong>
					</div>
					<div
						itemprop="author publisher"
						itemscope
						itemtype="http://schema.org/Organization"
					>
						by
						<span itemprop="name"> ${user}</span> -
						<span> ${domain}</span>
					</div>
				</section>
				${props["children"]}
			</a>
		</article>
	`;
}
