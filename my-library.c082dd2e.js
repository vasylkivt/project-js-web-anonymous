const e=document.querySelector(".js-theme-switch-toggle"),t=document.querySelector("body"),n="light-theme",o="dark-theme";e.addEventListener("change",(function(e){let i="";e.currentTarget.checked?(i=n,t.classList.remove(o),t.classList.add(i)):(i=o,t.classList.add(i),t.classList.remove(n));localStorage.setItem("theme",i)})),function(){const i=localStorage.getItem("theme");i?t.classList.add(i):t.classList.add(o),i===n&&e.setAttribute("checked",!0)}();const i=document.querySelectorAll(".js-header-nav-link"),c=window.location.pathname;i.forEach((e=>{const t=new URL(e.href).pathname;"/cinemania/"===c&&"/cinemania/index.html"===t&&e.classList.add("active"),t===c&&e.classList.add("active")}));const d={blockScroll:function(){document.body.style.overflow="hidden",document.body.style.paddingRight=function(){const e=document.createElement("div");e.style.overflow="scroll",e.style.visibility="hidden",e.style.position="absolute",e.style.width="100px",e.style.height="100px",e.style.top="-9999px",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px"},restoreScroll:function(){document.body.style.overflow="",document.body.style.paddingRight=""}},l={openMobileMenuBtn:document.querySelector(".js-open-mobile-menu-button"),mobileMenuBackdrop:document.querySelector(".mobile-menu-backdrop"),mobileMenu:document.querySelector(".mobile-menu")};function s(){d.blockScroll(),l.mobileMenuBackdrop.classList.remove("is-hidden"),l.mobileMenu.classList.remove("is-hidden"),l.openMobileMenuBtn.removeEventListener("click",s),l.mobileMenuBackdrop.addEventListener("click",u),window.addEventListener("keydown",a)}function r(){l.mobileMenu.classList.add("is-hidden"),l.mobileMenuBackdrop.classList.add("is-hidden"),l.openMobileMenuBtn.addEventListener("click",s),l.mobileMenuBackdrop.removeEventListener("click",u),window.removeEventListener("keydown",a),d.restoreScroll()}function a(e){"Escape"===e.code&&r()}function u(e){e.currentTarget===e.target&&r()}l.openMobileMenuBtn.addEventListener("click",s);
//# sourceMappingURL=my-library.c082dd2e.js.map
