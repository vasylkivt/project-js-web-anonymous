!function(){var e=document.querySelectorAll(".js-header-nav-link"),t=window.location.pathname;console.log("windowPathName:",t),e.forEach((function(e){var a=new URL(e.href).pathname;"/cinemania"===t&&"/index.html"===a&&e.classList.add("active"),a===t&&e.classList.add("active")}));var a,c=document.querySelector(".js-theme-switch-toggle"),s=document.querySelector("body"),d="light-theme",n="dark-theme",o="theme";c.addEventListener("change",(function(e){var t="";e.currentTarget.checked?(t=d,s.classList.remove(n),s.classList.add(t)):(t=n,s.classList.add(t),s.classList.remove(d));localStorage.setItem(o,t)})),(a=localStorage.getItem(o))?s.classList.add(a):s.classList.add(n),a===d&&c.setAttribute("checked",!0)}();
//# sourceMappingURL=catalog.a6b0bbfe.js.map
