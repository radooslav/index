  var nav = document.querySelector('.navbar-toggler');

var toggleState = function (elem, one, two) {
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
};

nav.onclick = function (event) {
  toggleState(event.target, 'closed', 'open');
  event.preventDefault();
};

$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});