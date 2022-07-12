import { createNavBar, createFooter } from "./home";

function loadContactPage(parent) {
	const navLinkTexts = ["Home", "Menu", "Contact"];
	const parentContainer = document.createElement("div");
	parentContainer.classList.add("parent-contact");
	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");

	const leftSide = document.createElement("div");
	leftSide.classList.add("left");

	const h1 = document.createElement("h1");
	h1.innerText = "Visit Us";
	leftSide.appendChild(h1);

	const address = document.createElement("h2");
	address.innerText = "Address";
	const addressContent = document.createElement("p");
	addressContent.setAttribute("id", "contact-address");
	addressContent.innerText =
		"The Indian Masala\n B-18 Super Complex\n Rajat Nagar, Banglore\n India";
	leftSide.appendChild(h1);
	leftSide.appendChild(address);
	leftSide.appendChild(addressContent);

	const telephone = document.createElement("h2");
	telephone.innerText = "Telephone";
	const telephoneContent = document.createElement("p");
	telephoneContent.innerText = "+91 123467890";
	leftSide.appendChild(telephone);
	leftSide.appendChild(telephoneContent);

	const email = document.createElement("h2");
	email.innerText = "E-mail";
	const emailContent = document.createElement("p");
	emailContent.innerText = "theindianmasala@gmail.com";
	leftSide.appendChild(email);
	leftSide.appendChild(emailContent);

	const rightSide = document.createElement("div");
	rightSide.classList.add("right");

	const fieldsList = {
		Name: {
			tag: "input",
			type: "text",
			attributeFor: "name",
			labelValue: "Name:",
			attributeName: "user_name",
		},
		Email: {
			tag: "input",
			type: "email",
			attributeFor: "email",
			labelValue: "E-mail:",
			attributeName: "user_mail",
		},
		Message: {
			tag: "textarea",
			type: null,
			attributeFor: "msg",
			labelValue: "Message:",
			attributeName: "user_message",
		},
	};

	rightSide.appendChild(createForm(fieldsList));

	contactContainer.appendChild(leftSide);
	contactContainer.appendChild(rightSide);

	parentContainer.appendChild(createNavBar(navLinkTexts));

	parentContainer.appendChild(contactContainer);

	parent.appendChild(parentContainer);

	parent.appendChild(createFooter(navLinkTexts));
}

function createForm(fieldsList) {
	const contactForm = document.createElement("form");
	contactForm.action = "#";
	contactForm.method = "post";
	const ul = document.createElement("ul");
	// Loop through the filedsList
	// get the field and then take take out their key values
	for (let field in fieldsList) {
		const li = document.createElement("li");
		const myField = createFields(
			fieldsList[field].tag,
			fieldsList[field].type,
			fieldsList[field].labelValue,
			fieldsList[field].attributeFor,
			fieldsList[field].attributeName
		);
		li.appendChild(myField[0]);
		li.appendChild(myField[1]);
		ul.appendChild(li);
	}

	const li = document.createElement("li");
	const submitButton = document.createElement("button");
	submitButton.type = "submit";
	submitButton.innerText = "Submit";
	li.appendChild(submitButton);
	ul.appendChild(li);

	contactForm.appendChild(ul);

	return contactForm;
}

function createFields(
	fieldTag,
	fieldType,
	labelValue,
	attributeFor,
	attributeName
) {
	const label = document.createElement("label");
	label.setAttribute("for", attributeFor);
	label.innerText = labelValue;

	const tag = document.createElement(fieldTag);

	// If element has a type then only use it.
	fieldType ? (tag.type = fieldType) : tag;
	tag.id = attributeFor;
	tag.name = attributeName;

	return [label, tag];
}

export { loadContactPage };
