"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const navLink = document.querySelectorAll(".nav__link");
const navLinks = document.querySelector(".nav__links");
const navLogo = document.querySelector(".nav__logo");
const nav = document.querySelector(".nav");

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
// const section2 = document.querySelector("#section--2");
// const section3 = document.querySelector("#section--3");

const btnOperationsTab1 = document.querySelector(".operations__tab--1");
const btnOperationsTab2 = document.querySelector(".operations__tab--2");
const btnOperationsTab3 = document.querySelector(".operations__tab--3");
const operationsContent1 = document.querySelector(".operations__content--1");
const operationsContent2 = document.querySelector(".operations__content--2");
const operationsContent3 = document.querySelector(".operations__content--3");

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

//implement navigation bar

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

navLink.forEach((navlink) => {
  navlink.addEventListener("mouseenter", mouseEnter);
});
navLink.forEach((navlink) => {
  navlink.addEventListener("mouseleave", mouseLeave);
});

// page navigation

navLinks.addEventListener("click", function (event) {
  event.preventDefault();
  //matching strategy
  if (event.target.classList.contains("nav__link")) {
    const id = event.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// tabbed component

btnOperationsTab1.addEventListener("click", function () {
  btnOperationsTab1.classList.add("operations__tab--active");
  operationsContent1.classList.add("operations__content--active");
  btnOperationsTab2.classList.remove("operations__tab--active");
  operationsContent2.classList.remove("operations__content--active");
  btnOperationsTab3.classList.remove("operations__tab--active");
  operationsContent3.classList.remove("operations__content--active");
});

btnOperationsTab2.addEventListener("click", function () {
  btnOperationsTab2.classList.add("operations__tab--active");
  operationsContent2.classList.add("operations__content--active");
  btnOperationsTab1.classList.remove("operations__tab--active");
  operationsContent1.classList.remove("operations__content--active");
  btnOperationsTab3.classList.remove("operations__tab--active");
  operationsContent3.classList.remove("operations__content--active");
});

btnOperationsTab3.addEventListener("click", function () {
  btnOperationsTab3.classList.add("operations__tab--active");
  operationsContent3.classList.add("operations__content--active");
  btnOperationsTab2.classList.remove("operations__tab--active");
  operationsContent2.classList.remove("operations__content--active");
  btnOperationsTab1.classList.remove("operations__tab--active");
  operationsContent1.classList.remove("operations__content--active");
});
