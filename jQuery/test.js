var jQueryScript = document.createElement('script');
jQueryScript.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js');
document.head.appendChild(jQueryScript);

$(document).ready(function() {
    $("h1").click(function() {
        $(this).hide();
    });
});