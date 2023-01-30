const hMenu = document.querySelector('.hMenu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hMenu.addEventListener('click', () => {
	hMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');
});
