// Creating To Top Button
let topButton = document.createElement("button");
let topButtonIcon = document.createElement("i");

topButton.style.cssText = `
	width : 30px;
	height: 30px;
	background-color: #2196f3;
	color: #f5f5f5;
	position: fixed;
	bottom: 20px;
	right: 20px;
	border: none;
	z-index: 10;
	cursor: pointer;
	transition: 0.7s ease all;
	opacity: 0;
`;

topButtonIcon.className = "fa-solid fa-arrow-up";
topButton.append(topButtonIcon);
document.body.append(topButton);

document.body.onscroll = function (e) {
	if (window.scrollY >= 2000) {
		topButton.style.opacity = "1";
		topButton.onclick = function (e) {
			scroll(0, 0);
		}
	}
	else {
		topButton.style.opacity = "0";
		topButton.onclick = function (e) {
			e.preventDefault();
		} 
	}
} 
