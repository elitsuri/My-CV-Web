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
