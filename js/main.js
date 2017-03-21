(function() {
    var contact = document.querySelectorAll('.icon'),
        menu = document.querySelectorAll('.menu');
    // loop to get the .icon containers parent of
    //the svg wrapped in an anchor and the p children.
    for (var i = 0; i < contact.length; i++) {
        var c = contact[i].children;
        for (var j = 0; j < c.length; j++) {
            var contactChildrenIds = c[j].id;
            var item = document.getElementById(contactChildrenIds);
            contactListeners(item);
        }
    }
    // loop to get the two chidren contained in each class menu item.
    // and pass the content wrap.
    for (var i = 0; i < menu.length; i++) {
        var menuChildren = menu[i];
        var x = document.querySelector('.content');
        menuListeners(menuChildren);
        menuListeners(x);
    }

    // Listeners for the icons and the info.
    function contactListeners(e) {
        e.addEventListener("click", toggleContact, false);
    }
    // Listeners for the icons in menu to toggle the side menu.
    function menuListeners(e) {
        e.addEventListener("click", toggleMenu, false);
    }

    //function add toggle feature to the svg icons
    //as well as to the info.
    function toggleContact() {
        var el = this.nextElementSibling,
            ella = this.previousElementSibling;

        if (this.tagName === 'A') {
            var x = this.firstElementChild,
                height = x.scrollHeight;
            x.style.height = '0';
            el.style.height = height;
            el.style.overflow = 'visible';
        } else if (this.tagName === 'P') {
            var x = this.previousElementSibling.firstElementChild,
                height = x.scrollWidth;
            this.style.height = '0';
            this.style.overflow = 'hidden';
            x.style.height = height;
        }
    }
    //function adds capability for the mune to toggle on an offsetWidth
    //when interacting with the menu and x link.
    function toggleMenu() {
        var x = document.querySelector('.nav'),
            y = document.querySelector('.content'),
            z = document.querySelector('html'),
            el = this.nextElementSibling,
            ella = this.previousElementSibling;

        if (this.id === 'menu-svg') {
            this.style.display = 'none';
            if (z.offsetWidth < 800) {
                x.style.width = '150px';
            } else {
                x.style.width = '200px';
            }
            y.style.opacity = '.8';
            el.style.display = 'inline-block';
        } else if (this.id === 'close-svg') {
            this.style.display = 'none';
            x.style.width = '';
            y.style.opacity = '';
            ella.style.display = 'inline-block';
        } else if (this.className === 'content') {
            var c = document.getElementById('close-svg'),
                ella = c.previousElementSibling;
            c.style.display = 'none';
            x.style.width = '';
            y.style.opacity = '';
            ella.style.display = 'inline-block';
        }
    }
})(); //self executing function

$(document).ready(function() {

    $(document).scroll(function() {
        $('.nav').css('width', '');
        $('.nav').css('width', '');
        $('#close-svg').css('display', 'none');
        $('.content').css('opacity', '');
        $('#menu-svg').css('display', 'inline-block');
    })
    $('li').click(function() {
        if ($(window).width() < 700) {
            $('.nav').css('width', '');
            $('#close-svg').css('display', 'none');
            $('.content').css('opacity', '');
            $('#menu-svg').css('display', 'inline-block');
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 50
            }, 500);
            return false;
        } else {
            $('.nav').css('width', '');
            $('#close-svg').css('display', 'none');
            $('.content').css('opacity', '');
            $('#menu-svg').css('display', 'inline-block');
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 60
            }, 500);
            return false;
        }
    });

    $('.learnMore').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 500);
        return false;
    });

});
