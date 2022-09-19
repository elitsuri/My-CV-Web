(function(window, document, undefined)
{
    setTimeout(
        function()
        {
           $('#outer_anim_container').replaceWith($('#content_container'));
           $('#content_container').fadeIn(1000);
        },
        3000
     );
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
