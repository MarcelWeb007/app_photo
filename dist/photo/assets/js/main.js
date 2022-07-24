window.onscroll = function() {
    var nav = document.querySelector('.navigation-wrap');
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add('scroll-on');
    }else {
        nav.classList.remove('scroll-on');
    }
}

var navBar = document.querySelectorAll('.nav-link');
var navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(e) {
    e.addEventListener("click", () => {
        navCollapse.classList.remove('show');
        
    })
});

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment  = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
        }, step);
    }

    counter("count1", 0, 45, 3000);
    counter("count2", 0, 22, 3000);
    counter("count3", 0, 36, 3000);
    counter("count4", 0, 13, 3000);
});