const Images = [
	{
		img: "https://i.pinimg.com/736x/3d/c7/73/3dc7730bb2440b61a13d449588bebeed.jpg",
	},
	{
		img: "https://i.pinimg.com/736x/be/78/21/be782118a275807db1e5b4db97508d34.jpg",
	},
	{
		img: "https://i.pinimg.com/736x/32/1c/fb/321cfbea303f4a7340c7b6aacd2c2b58.jpg",
	},
	{
		img: "https://i.pinimg.com/736x/a7/37/e8/a737e860024dd051e40584459e6b33a0.jpg",
	},
	{
		img: "https://images.pexels.com/photos/1816013/pexels-photo-1816013.jpeg?auto=compress&cs=tinysrgb&w=600",
	},
	{
		img: "https://i.pinimg.com/736x/57/a5/32/57a5323b37a97ae6aa392281b1e69a42.jpg",
	},
	{
		img: "https://i.pinimg.com/474x/a5/03/7c/a5037cf31dcb51e39511c2dea28123ce.jpg",
	},

	{
		img: "https://i.pinimg.com/736x/c5/13/5c/c5135cb5350566641305f922aedb9d04.jpg",
	},

	{
		img: "https://i.pinimg.com/736x/48/c4/6b/48c46b8306c984f3bc53ddd9707bb778.jpg",
	},
	{
		img: "https://i.pinimg.com/736x/99/eb/2c/99eb2c4de13abc0834da90c9625d5af0.jpg",
	},
	{
		img: "https://i.pinimg.com/736x/8c/0a/60/8c0a606d504275bd3e7d1aafc8ccfcbd.jpg",
	},
];
let container = document.querySelector(".container");

function renderImages() {
	Images.forEach((img) => {
		let imageElement = document.createElement("img");
		imageElement.src = img.img;
		imageElement.alt = "Gallery Image";
		imageElement.addEventListener("click", function () {
			openModal(img.img);
		});
		container.appendChild(imageElement);
	});
}
let Modal = document.querySelector(".Modal");
let ModalImage = document.querySelector(".ModalImage");
let close = document.querySelector(".Close");

function openModal(img) {
	Modal.style.display = "flex";
	ModalImage.src = img;
}
close.addEventListener("click", () => {
	Modal.style.display = "none";
});
renderImages();
