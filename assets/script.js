
//------------------------------------
// adds a darkmode class to the body
//------------------------------------
document.querySelector('#darkmode').addEventListener('click', function() {
	document.getElementsByTagName('body')[0].classList.toggle('darkmode');
});