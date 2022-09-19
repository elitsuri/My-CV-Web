


(function(window, document, undefined)
{
  var image_interest = document.getElementById('interests-container');
  image_interest.addEventListener('mouseover', imageInterestMouseOver, false);
  image_interest.addEventListener('mouseout', imageInterestMouseOut, false);
})(window, window.document);

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
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
