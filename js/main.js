const NAV = document.querySelector('#navbar');
let navbarPosition = NAV.offsetTop;

$('a[href*="#"]')
    .click(function(event) {
        var target = $(this.hash);
        event.preventDefault();
        $('html, body').animate({
            scrollTop: (target.offset().top - NAV.offsetHeight)
        }, 1000);
    });

window.addEventListener('scroll', fixNav);

function fixNav(){
    if(window.scrollY >= navbarPosition){
        NAV.style.position = 'fixed';
        document.body.style.paddingTop = NAV.offsetHeight + 'px';
    } else {
        NAV.style.position = 'relative';
        document.body.style.paddingTop = 0;
    }
}