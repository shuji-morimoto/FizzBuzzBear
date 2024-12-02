if (window.location.pathname.split('/').pop().startsWith('tutorial-')) {
    var h = document.querySelector("html > body > div#main > section > header");
    if (h != null) {
        h.style.display = "none";
    }
}
