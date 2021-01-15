"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const navLink = document.querySelectorAll(".nav__link");
const navLogo = document.querySelector(".nav__logo");

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
btnScroll.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

const mouseEnter = function (event) {
  event.preventDefault();
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.opacity = 0.5;
    navLogo.style.opacity = 0.5;
    event.target.style.opacity = 1;
  }
};

const mouseLeave = function (event) {
  event.preventDefault();
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.opacity = 1;
    navLogo.style.opacity = 1;
  }
};

navLink[0].addEventListener("mouseenter", mouseEnter);
navLink[1].addEventListener("mouseenter", mouseEnter);
navLink[2].addEventListener("mouseenter", mouseEnter);
navLink[3].addEventListener("mouseenter", mouseEnter);

navLink[0].addEventListener("mouseleave", mouseLeave);
navLink[1].addEventListener("mouseleave", mouseLeave);
navLink[2].addEventListener("mouseleave", mouseLeave);
navLink[3].addEventListener("mouseleave", mouseLeave);
