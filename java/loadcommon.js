


window.onload = function() {
    var footerContainer = document.getElementById("footer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "footer.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            footerContainer.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
};

document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header");
    const headerRequest = new XMLHttpRequest();
    headerRequest.open("GET", "header.html", true);
    headerRequest.onload = function () {
        if (headerRequest.status >= 200 && headerRequest.status < 400) {
            const headerHTML = headerRequest.responseText;
            headerContainer.innerHTML = headerHTML;

            let navToggle = headerContainer.querySelector(".nav__toggle");
            let navWrapper = headerContainer.querySelector(".nav__wrapper");

            navToggle.addEventListener("click", function () {
                if (navWrapper.classList.contains("active")) {
                    this.setAttribute("aria-expanded", "false");
                    this.setAttribute("aria-label", "menu");
                    navWrapper.classList.remove("active");
                } else {
                    navWrapper.classList.add("active");
                    this.setAttribute("aria-label", "close menu");
                    this.setAttribute("aria-expanded", "true");
                }
            });
        }
    };
    headerRequest.send();
});
