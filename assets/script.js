
//------------------------------------
// adds a darkmode class to the body
//------------------------------------
document.querySelector('#darkmode').addEventListener('click', function() {
	document.getElementsByTagName('body')[0].classList.toggle('dark');
});

window.onload = function() {
      var visitTime = new Date();
      var hours = visitTime.getHours(); // Get the current hour (0-23)

      alert(hours);
}