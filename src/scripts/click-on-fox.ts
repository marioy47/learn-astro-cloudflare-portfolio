const idName: string = 'random-fox';
const className: string = 'active-fox';

document.getElementById(idName)?.addEventListener('click', (ev) => {
	ev.target.classList.toggle(className);
})
