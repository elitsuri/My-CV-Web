


(function(window, document, undefined)
{
  var image_interest = document.getElementById('interests-container');
  image_interest.addEventListener('mouseover', imageInterestMouseOver, false);
  image_interest.addEventListener('mouseout', imageInterestMouseOut, false);
})(window, window.document);


function imageInterestMouseOver(event)
{
    event = event || window.event;

    var image = document.getElementById('interests');
    image.src = './resources/icons/interest_color.png'
}

function imageInterestMouseOut(event)
{
  event = event || window.event;

  var image = document.getElementById('interests');
  image.src = './resources/icons/interest.png'
}
