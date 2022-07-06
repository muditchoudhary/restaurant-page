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
}

export { pageLoad };
