document
  .querySelector(".readmore__container-btn")
  .addEventListener("click", function () {
    this.classList.toggle("expanded");
    document.querySelector(".description__text").classList.toggle("expanded");
  });

// Обработчик для слайдера
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".slider-menu__link");

  function setActiveLink(e) {
    e.preventDefault();

    // Удаляем активный класс у всех ссылок
    menuLinks.forEach((link) => {
      link.classList.remove("slider-menu__link--active");
    });

    // Добавляем активный класс выбранной ссылке
    this.classList.add("slider-menu__link--active");

    // Прокручиваем к выбранному элементу
    const item = this.closest(".slider-menu__item");
    const container = document.querySelector(".slider-menu");
    const containerWidth = container.offsetWidth;
    const itemLeft = item.offsetLeft;

    container.scrollTo({
      left: itemLeft - (containerWidth - item.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  // Вешаем обработчики на все ссылки
  menuLinks.forEach((link) => {
    link.addEventListener("click", setActiveLink);
  });
});
