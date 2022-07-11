import { pageLoad } from "./home";
import { loadMenu } from "./menu";
import "./style.css";

const parent = document.querySelector("#content");
const pageSwitchLinks = [];
let currentPage = "Home";

pageLoad(parent);
// loadMenu(parent);

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
			console.log("sdfh");
			// Remove contens of menu page
			clearPage();
			// Add contents of home page
			pageLoad(parent);
			addClickEventOnLinks();
			currentPage = "Home";
		} else if (currentPage === "Contact") {
			// Remove contens of home page
			// Add contents of menu page
		} else {
			return;
		}
	} else if (e.target.getAttribute("id") === "Menu") {
		if (currentPage === "Home") {
			// Remove contens of home page
			clearPage();
			// Add contents of menu page
			loadMenu(parent);
			addClickEventOnLinks();
			currentPage = "Menu";
		} else if (currentPage === "Contact") {
			// Remove contens of home page
			// Add contents of menu page
		} else {
			return;
		}
	} else if (e.target.getAttribute("id") === "Contact") {
		if (currentPage === "Home") {
			// Remove contens of home page
			// Add contents of menu page
		} else if (currentPage === "Menu") {
			// Remove contens of home page
			// Add contents of menu page
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
