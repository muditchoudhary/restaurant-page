function pageLoad(parent) {
	// header html
	const header = document.createElement("div");
	header.classList.add("header");

	// Navigation bar html
	const navBar = document.createElement("div");
	const uoList = document.createElement("ul");
	navBar.classList.add("navigation");
	const navLinkTexts = ["Home", "Menu", "Contact"];
	navLinkTexts.forEach((text, i) => {
		let li = document.createElement("li");
		let link = document.createElement("a");
		link.href = "https://www.google.com/";
		link.innerText = text;
		li.appendChild(link);
		uoList.appendChild(li);
	});

	navBar.appendChild(uoList);
	header.appendChild(navBar);

	// Restaurant heading html
	const headingSection = document.createElement("div");
	headingSection.classList.add("heading-section");
	const h1 = document.createElement("h1");
	h1.innerText = "The Indian Masala";
	const orderBtn = document.createElement("button");
	orderBtn.innerText = "Order Now";

	headingSection.appendChild(h1);
	headingSection.appendChild(orderBtn);

	header.appendChild(headingSection);

    parent.appendChild(header);
}

export { pageLoad };
