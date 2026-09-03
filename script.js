(function () {
  "use strict";

  var target = document.getElementById("anmeldung");
  var links = document.querySelectorAll('a[href="#anmeldung"]');

  if (!target) return;

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - 12);
      history.replaceState(null, "", "#anmeldung");
    });
  });
})();
