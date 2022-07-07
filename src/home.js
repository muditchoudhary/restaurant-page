import twitterIcon from "./assets/twitter.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github-sign.png";

function pageLoad(parent) {
	// header html
	const header = document.createElement("div");
	header.classList.add("header");

	// Navigation bar html
	const navBar = document.createElement("div");
	const uoList = document.createElement("ul");
	navBar.classList.add("navigation");
	const navLinkTexts = ["Home", "Menu", "Contact"];
	createSectionLinks(navLinkTexts, uoList);

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

	// About us section
	const aboutUsSection = document.createElement("div");
	aboutUsSection.classList.add("about-section");
	const aboutImgDiv = document.createElement("div");
	const aboutTextDiv = document.createElement("div");

	const aboutHeading = document.createElement("h2");
	aboutHeading.innerText = "About us";

	const aboutPara = document.createElement("p");
	aboutPara.innerText =
		"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam veritatis reiciendis repudiandae beatae possimus omnis temporibus maiores laudantium veniam ratione illo earum suscipit quibusdam rerum dolor incidunt ad, ipsum accusantium nihil. Eos cupiditate eveniet rerum modi ex natus nemo nobis inventore quidem temporibus, labore maxime eum aliquam magni ipsam voluptate ducimus deserunt. Fugiat tenetur quas earum? Quasi quod blanditiis a eos, natus possimus quis officiis dolore rem aliquam corporis laboriosam in";

	aboutTextDiv.appendChild(aboutHeading);
	aboutTextDiv.appendChild(aboutPara);

	aboutUsSection.appendChild(aboutImgDiv);
	aboutUsSection.appendChild(aboutTextDiv);

	parent.appendChild(aboutUsSection);

	// Footer section
	const footerSection = document.createElement("div");
	footerSection.classList.add("footer");

	const upperPart = document.createElement("div");
	upperPart.classList.add("upper-footer");

	const lowerPart = document.createElement("div");
	lowerPart.classList.add("lower-footer");

	const linksSection = document.createElement("div");
	const h3 = document.createElement("h3");
	h3.innerText = "Section";
	const ul = document.createElement("ul");
	createSectionLinks(navLinkTexts, ul);
	linksSection.appendChild(h3);
	linksSection.appendChild(ul);

	const addressSection = document.createElement("div");
	const addressH3 = document.createElement("h3");
	addressH3.innerText = "Address";
	const addressContent = document.createElement("p");
	addressContent.innerText =
		"The Indian Masala\n B-18 Super Complex\n Rajat Nagar, Banglore\n India";
	addressSection.appendChild(addressH3);
	addressSection.appendChild(addressContent);

	const timingSection = document.createElement("div");
	const timingH3 = document.createElement("h3");
	timingH3.innerText = "Timings";
	const timingDetails = document.createElement("div");
	timingDetails.innerText =
		"Weekdays\n11:00 AM - 10:00 PM\nWeekends\n11:00 AM - 12:00 AM";
	timingSection.appendChild(timingH3);
	timingSection.appendChild(timingDetails);

	lowerPart.innerText =
		"\u00A9 2022 The Indian Masala. All Right Reserved";

	upperPart.appendChild(linksSection);
	upperPart.appendChild(addressSection);
	upperPart.appendChild(timingSection);


	footerSection.appendChild(upperPart);
	footerSection.appendChild(lowerPart);

	parent.appendChild(footerSection);
}

function createSectionLinks(list, parentList) {
	list.forEach((text, i) => {
		let li = document.createElement("li");
		let link = document.createElement("a");
		link.href = "https://www.google.com/";
		link.innerText = text;
		li.appendChild(link);
		parentList.appendChild(li);
	});
}

export { pageLoad };
