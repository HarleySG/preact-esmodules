import { html } from "../libs/preact.js";
export default function Header(props) {
    return html `
		<header class="${props["class"] && props["class"]}">
			${props["children"]}
		</header>
	`;
}
