import { createNavBar, createFooter } from "./home";

function loadMenu(parent) {
	const navLinkTexts = ["Home", "Menu", "Contact"];
	const menuItems = {
		"Thali & Meals": [
			"Aloo Paratha",
			"Chole Kulcha",
			"Dal Makhani",
			"Paneer Butter Masala",
			"Rajma Masala",
		],
		"Naan & Breads": [
			"Butter Naan",
			"Butter Roti",
			"Lachcha Pratha",
			"Paneer Naan",
		],
		"Fried Rice & Noodles": [
			"Egg Chowmein",
			"Egg Spring Roll",
			"Veg Choupsey",
			"Veg Fried Rice",
		],
		"Chinese Soup": [
			"Lemon Coriander Soup",
			"Manchow Soup",
			"Hot And Sour Soup",
			"Sweet Corn Soup",
			"Chicken Clear Soup",
		],
		"Veg Snacks": [
			"Paneer Banjara",
			"Paneer Lahori Tikka",
			"Paneer Malai Tikka",
			"Paneer Tikka",
			"Soya Tandoori Chaap",
		],
	};
	const menuContainer = document.createElement("div");
	menuContainer.classList.add("menu-container");

	const menu = document.createElement("div");
	menu.classList.add("menu");

	const menuHeading = document.createElement("h1");
	menuHeading.innerText = "All Day Menu";

	menuContainer.appendChild(createNavBar(navLinkTexts));

	menu.appendChild(menuHeading);

	for (const item in menuItems) {
		menu.appendChild(createMenuItem(item, menuItems[item]));
	}

	menuContainer.appendChild(menu);

	parent.appendChild(menuContainer);

	parent.appendChild(createFooter(navLinkTexts));
}

function createMenuItem(itemHeadingName, foodList) {
	const itemDiv = document.createElement("div");
	itemDiv.classList.add("item");

	const heading = document.createElement("h2");
	heading.innerText = itemHeadingName;

	itemDiv.appendChild(heading);

	for (const food of foodList) {
		itemDiv.appendChild(createFoodItemContent(food, "99"));
	}

	return itemDiv;
}

function createFoodItemContent(foodItemName, foodItemPrice) {
	const itemContent = document.createElement("p");

	const foodItem = document.createElement("span");
	foodItem.classList.add("food-name");
	foodItem.innerText = foodItemName;

	const foodPrice = document.createElement("span");
	foodPrice.classList.add("food-price");
	foodPrice.innerText = foodItemPrice;

	itemContent.append(foodItem);
	itemContent.append(foodPrice);

	return itemContent;
}

export { loadMenu };
