// This file handles navigation and dynamic content loading for the individual pages.

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const page = this.getAttribute('href');

            if (page !== '#') {
                loadPage(page);
            }
        });
    });

    function loadPage(page) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `pages${page}`, true);
        xhr.onload = function() {
            if (this.status === 200) {
                document.body.innerHTML = this.responseText;
                // Reinitialize navigation links after loading new content
                initializeNavLinks();
            }
        };
        xhr.send();
    }

    function initializeNavLinks() {
        const navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const page = this.getAttribute('href');

                if (page !== '#') {
                    loadPage(page);
                }
            });
        });
    }
});