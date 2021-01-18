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
const header = document.querySelector(".header");

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const operationsTabContainer = document.querySelector(
  ".operations__tab-container"
);

const btnTab = document.querySelectorAll(".operations__tab");
const operationsContent = document.querySelectorAll(".operations__content");

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

// implement smooth scrolling

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
  console.log(event.target);

  //matching strategy
  if (event.target.classList.contains("nav__link")) {
    const id = event.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// tabbed component

operationsTabContainer.addEventListener("click", function (e) {
  const btnTarget = e.target.closest("button");

  // guard clause
  if (!btnTarget) return;

  //remove active classes

  btnTab.forEach((tab) => {
    tab.classList.remove("operations__tab--active");
  });

  operationsContent.forEach((content) => {
    content.classList.remove("operations__content--active");
  });

  // activate tab and content area

  if (btnTarget) {
    btnTarget.classList.add("operations__tab--active");
    const dataTab = btnTarget.dataset.tab;
    const contentVersion = `.operations__content--${dataTab}`;
    document
      .querySelector(contentVersion)
      .classList.add("operations__content--active");
  }
});

// sticky navigation bar

const headerHeight = Number.parseInt(getComputedStyle(header).height);

function sticky() {
  if (window.pageYOffset >= headerHeight - 90) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", sticky);
