(function () {
    var core = {
        open: false,
        querys: {
            x: document.querySelector('.nav'),
            y: document.querySelector('.content'),
            z: document.querySelector('html'),
            a: document.querySelector('#close-svg'),
            b: document.querySelector('#menu-svg'),
            c: document.getElementById('about'),
        },
        hideMenu: function () {
            core.querys.x.style.width = '';
            core.querys.y.style.opacity = '';
            core.querys.a.style.display = 'none';
            core.querys.b.style.display = 'inline-block';
        },
        toggleMenu: function () {
            var el = this.nextElementSibling,
                ella = this.previousElementSibling;

            if (this.id === 'menu-svg') {
                core.open = true;
                this.style.display = 'none';
                if (core.querys.z.offsetWidth < 800) {
                    core.querys.x.style.width = '150px';
                } else {
                    core.querys.x.style.width = '200px';
                }
                core.querys.y.style.opacity = '.8';
                el.style.display = 'inline-block';
            } else if (this.id === 'close-svg') {
                core.open = false;
                this.style.display = 'none';
                core.querys.x.style.width = '';
                core.querys.y.style.opacity = '';
                ella.style.display = 'inline-block';
            }
        },
        learnMore: function () {
            var here = core.querys.c.offsetTop;
            core.scroll.down(window.pageYOffset, here - 20);
        },
        closeMenu: function () {
            if (core.open) {
                core.hideMenu();
            }
        },
        menuItemScroll: function () {
            var whereTo = this.innerText.toLowerCase(),
                here = document.getElementById(whereTo).offsetTop;

            if (c < 700) {
                if (window.pageYOffset > here) {
                    core.scroll.up(window.pageYOffset, here);
                }
                else {
                    core.scroll.down(window.pageYOffset, here + 10);
                }
            } else {
                if (window.pageYOffset > here) {
                    core.scroll.up(window.pageYOffset, here - 50);
                }
                else {
                    core.scroll.down(window.pageYOffset, here - 50);
                }
            }
        },
        toggleContact: function () {
            var x,
                el = this.nextElementSibling,
                ella = this.previousElementSibling;

            if (this.tagName === 'A') {
                x = this.firstElementChild,
                    height = x.scrollHeight;
                x.style.height = '0';
                el.style.height = height;
                el.style.overflow = 'visible';
            } else if (this.tagName === 'P') {
                x = this.previousElementSibling.firstElementChild,
                    height = x.scrollWidth;
                this.style.height = '0';
                this.style.overflow = 'hidden';
                x.style.height = height;
            }
        },
        scroll: {
            up: function (fromHere, toHere) {
                setTimeout(function () {
                    if (fromHere < toHere) return;
                    scroll(0, fromHere);
                    core.scroll.up(fromHere - 15, toHere);
                }, 1)
            },
            down: function (fromHere, toHere) {
                setTimeout(function () {
                    if (fromHere > toHere) return;
                    scroll(0, fromHere);
                    core.scroll.down(fromHere + 15, toHere);
                }, 1)
            },
        },
    };

    var contact = document.querySelectorAll('.icon'),
        menu = document.querySelectorAll('.menu'),
        menuItems = document.querySelectorAll('nav li'),
        sections = document.querySelectorAll('.content section'),
        learnM = document.querySelector('.learnMore');

    for (var i = 0; i < contact.length; i++) {
        for (var j = 0; j < contact[i].children.length; j++)
            document.getElementById(contact[i].children[j].id)
                .addEventListener("click", core.toggleContact, false);
    }
    for (var i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", core.toggleMenu, false);
    }
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', core.menuItemScroll, false);
    }
    document.addEventListener("scroll", core.closeMenu, false);

    learnM.addEventListener('click', core.learnMore, false);
})();