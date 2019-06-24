//Структуру подсмотрел у коллеги на одной из прошлых работ отдельный объект с функциями и внизу их вызов
const func = {
  //Переключение пунктов меню
  activeMenu() {
    const items = document.querySelectorAll('.aside__item')
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        if(!e.target.classList.contains('aside__item_active')) {
          items.forEach((item) => {
            item.classList.remove('aside__item_active')
          })
          e.target.classList.add('aside__item_active')
        }
      })
    })
  },
  //Валидации для карточки, имени и cvv соответственно
  validationCard() {
    const cards = document.querySelectorAll('.form__input_card')
    cards.forEach((card) => {
      card.addEventListener('blur', (e) => {
        if (!/\d{4}/.test(e.target.value) || e.target.value < 4) {
          card.classList.add('form__input_error')
        } else {
          card.classList.remove('form__input_error')
        }
      })
    })
  },
  validationName() {
    const name = document.querySelector('.form__input_name')
    name.addEventListener('blur', (e) => {
      if (!/([A-Za-z\. -]+)/.test(e.target.value) || e.target.value.length < 4) {
        name.classList.add('form__input_error')
      } else {
        name.classList.remove('form__input_error')
      }
    })
  },
  validationCVV() {
    const cvv = document.querySelector('.form__input_cvv')
    cvv.addEventListener('blur', (e) => {
      if (!/\d{3}/.test(e.target.value) || e.target.value < 3) {
        cvv.classList.add('form__input_error')
      } else {
        cvv.classList.remove('form__input_error')
      }
    })
  },
  //обработка клика с формы
  formSubmit() {
    const form = document.querySelector('.form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('Form Submitted')
      form.reset()
    })
  } 
}


//Можно отключать вызов функции не удаляя её, если нужно
//Отдельно можно вешать функции на load, resize и scroll. Очень удобно.
const app = {
  'init': () => {
    func.activeMenu()
    func.validationCard()
    func.validationName()
    func.validationCVV()
    func.formSubmit()
  },
  'scroll': () => {
  },
  'load': () => {
  },
  'resize': () => {
  },
};


//Первоначальный вызов функций и обработчики событий
app.init();
window.addEventListener("load", () => {
  app.load();
});
window.addEventListener("resize", () => {
  app.resize();
});
window.addEventListener("scroll", () => {
  app.scroll();
})