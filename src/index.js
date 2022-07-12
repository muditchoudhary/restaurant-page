import { pageLoad } from "./home";
import { loadMenu } from "./menu";
import { loadContactPage } from "./contact";
import "./style.css";

const parent = document.querySelector("#content");
const pageSwitchLinks = [];
let currentPage = "Home";

// pageLoad(parent);
// loadMenu(parent);
loadContactPage(parent);

addClickEventOnLinks();

function addClickEventOnLinks() {
	for (const id of ["Home", "Menu", "Contact"]) {
		pageSwitchLinks.push(document.querySelector(`#${id}`));
	}
	console.log("fdsfh");
	pageSwitchLinks.forEach((link) => {
		console.log(link);
		link.addEventListener("click", (e) => {
			switchTab(e);
		});
	});
}

function switchTab(e) {
	if (e.target.getAttribute("id") === "Home") {
		if (currentPage === "Menu") {
			clearPage();
			pageLoad(parent);
			addClickEventOnLinks();
			currentPage = "Home";
		} else if (currentPage === "Contact") {
			clearPage();
			pageLoad(parent);
			addClickEventOnLinks();
			currentPage = "Home";
		} else {
			return;
		}
	} else if (e.target.getAttribute("id") === "Menu") {
		if (currentPage === "Home") {
			clearPage();
			loadMenu(parent);
			addClickEventOnLinks();
			currentPage = "Menu";
		} else if (currentPage === "Contact") {
			clearPage();
			loadMenu(parent);
			addClickEventOnLinks();
			currentPage = "Menu";
		} else {
			return;
		}
	} else if (e.target.getAttribute("id") === "Contact") {
		if (currentPage === "Home") {
			clearPage();
			loadContactPage(parent);
			addClickEventOnLinks();
			currentPage = "Contact";
		} else if (currentPage === "Menu") {
			clearPage();
			loadContactPage(parent);
			addClickEventOnLinks();
			currentPage = "Contact";
		} else {
			return;
		}
	}
}

function clearPage() {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
