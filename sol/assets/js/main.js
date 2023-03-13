/**
* Template Name: Vlava
* Updated: Mar 09 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/vlava-free-bootstrap-one-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
const toScrollButton = document.getElementById("toScrollButton");

toScrollButton.addEventListener("click", () => {
  window.scrollY = window.screenY + 200;
});