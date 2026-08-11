"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let index = 0; index < btnOpenModal.length; index++) {
  btnOpenModal[index].addEventListener("click", openModal);
}

const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModel);

overlay.addEventListener("click", closeModel);

const escBtnCloseModal = function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
  }
};

document.addEventListener("keydown", escBtnCloseModal);
