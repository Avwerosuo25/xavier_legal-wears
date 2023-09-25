$(document).ready(function() {
    // Your smooth scrolling code here
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Get the hash from the link
            var hash = this.hash;

            // Animate the scroll to the target section
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});
