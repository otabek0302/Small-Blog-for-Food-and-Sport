window.addEventListener('load', function () {

/////////////////////// Modal content
let  modal_btn = document.querySelector('.modal'),
     btn_call = document.querySelector('button[data-modal]')
     btn_close = document.querySelector('div[data-close]')
     
/////////////////////// Action
btn_call.onclick = () => {
     modal_btn.classList.add('show')
     modal_btn.classList.remove('hide')

}
btn_close.onclick = () => {
     modal_btn.classList.add('hide')
     modal_btn.classList.remove('show')
}


/////////////////////// Content
     let  content_img = document.querySelector('#content_img')
     let  content_text = document.querySelector('.tabcontent__descr')
     let tab_content = this.document.querySelector('.tabcontent')
     let tabheader__item = document.querySelectorAll('div[data-content]')
     
     let contents = {
          fitnes: `
                    <img src="img/tabs/vegy.jpg" alt="vegy">
                    <div class="tabcontent__descr">
                        Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
                    </div>`,
          premium: `
                    <img src="img/tabs/elite.jpg" alt="elite">
                    <div class="tabcontent__descr">
                        Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
                    </div>`,
          post_menu:` <img src="img/tabs/post.jpg" alt="post">
                      <div class="tabcontent__descr">
                        Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
                    </div>`,
          sbal: `   <img src="img/tabs/vegy.jpg" alt="vegy">
                    <div class="tabcontent__descr">
                        Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
                    </div>`
     }
     
tabheader__item.forEach(element => {
     element.onclick = () => {
          tabheader__item.forEach(item => item.classList.remove('tabheader__item_active'))
          element.classList.add('tabheader__item_active')
          data_content = element.getAttribute('data-content')
          let value = contents[data_content];
          tab_content.innerHTML = value;
          // console.log(typeof value);          
     }
});
     
     
////////////////////// Slider for Products

// 1
const slides = document.querySelectorAll('.offer__slide'),
     prev = document.querySelector('.offer__slider-prev'),
     next = document.querySelector('.offer__slider-next'),
     total = document.querySelector('#total'),
     current = document.querySelector('#current'),
     slidesWrapper = document.querySelector('.offer__slider-wrapper'),
     width = window.getComputedStyle(slidesWrapper).width,
     slidesField = document.querySelector('.offer__slider-inner');

// 5
let offset = 0;
let slideIndex = 1;

if (slides.length < 10) {
     total.textContent = `0${slides.length}`;
     current.textContent = `0${slideIndex}`;
} else {
     total.textContent = slides.length;
     current.textContent = slideIndex;
}

// 2
slidesField.style.width = 100 * slides.length + '%';

// 4 
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';
// 3
slides.forEach(slide => {
     slide.style.width = width;
});

// 6
next.addEventListener('click', () => {
     if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
          offset = 0;
     } else {
          offset += +width.slice(0, width.length - 2);
     }

     slidesField.style.transform = `translateX(-${offset}px)`;

     // 8
     if (slideIndex == slides.length) {
          slideIndex = 1;
     } else {
          slideIndex++;
     }

     if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
     } else {
          current.textContent = slideIndex;
     }
});

// 7
prev.addEventListener('click', () => {
     if (offset == 0) {
          offset = +width.slice(0, width.length - 2) * (slides.length - 1);
     } else {
          offset -= +width.slice(0, width.length - 2);
     }

     slidesField.style.transform = `translateX(-${offset}px)`;

     // 9
     if (slideIndex == 1) {
          slideIndex = slides.length;
     } else {
          slideIndex--;
     }

     if (slides.length < 10) {
          current.textContent = `0${slideIndex}`;
     } else {
          current.textContent = slideIndex;
     }
});

     
     
////////////////////////// Menu
let menu__item = document.querySelectorAll('.menu__item')

menu__item.forEach(item => {
          item.onmouseenter = () => {
               item.classList.add('menu_act')
          }
          item.onmouseleave = () => {
               item.classList.remove('menu_act')
          }
})

///////////////////////// Form 
let form = document.forms.offer;
let inps = document.querySelectorAll('input')

//1
let pattern = {
     name: /^[a-z ,а-я ,.'-]+$/i,
     phone: /^998(9[012345789]|7[01234569])[0-9]{7}$/
};
//2
function validate (field, regex) {
     if (regex.test(field.value)) {
          field.classList.add('valid'),
               field.classList.remove('invalid')
     } else {
          field.classList.add('invalid'),
          field.classList.remove('valid')     
     }
}
//3
inps.forEach(inp => {
     
     inp.onkeyup = () => {
          let key = inp.name;
          validate(inp, pattern[key])
     }

})

//4
form.onsubmit = (e) => {
     e.preventDefault();
     submit()
}
//5
function submit(e) {
     let user = {};

     let fm = new FormData(form);
     fm.forEach((value, key) => {
          user[key] = value;
     })
     console.log(user);
}
////////////////// Modal Form
     //1
     let modal = this.document.querySelector('.modal');
     let modalForm = modal.querySelector('form')
     let modalInps = modal.querySelectorAll('input')


     //2
     modalInps.forEach(el => {
          el.onkeyup = () => {
               let key = el.name;
               validate(el, pattern[key])
          }
     })

     //3
     modalForm.onsubmit = (e) => {
          e.preventDefault();
          let user = {};

          let fm = new FormData(modalForm);
          fm.forEach((value, key) => {
               user[key] = value;
          })
          console.log(user);
     }

/////////////////////////// Scroll untill end
          var block = document.querySelector('.modal');
          var _change = document.body.clientHeight / 2 + document.body.clientHeight / 4;
          window.onscroll = function () {
               // console.log("ch",_change);
               // console.log(window.pageYOffset);
               if (window.pageYOffset > _change) {
                    block.classList.remove('hide')
                    block.classList.add('show')
               } else {
                    block.classList.add('hide')
                    block.classList.remove('show')
               }
          };

////////////////////////// Calory
     let genderParent = document.querySelector('#gender')
     let genBtns = genderParent.querySelectorAll('.calculating__choose-item')
     let height = document.querySelector('#height')
     let weight = document.querySelector('#weight')
     let age = document.querySelector('#age')
     let activities = document.querySelectorAll('div[data-active]')
     let calculating__result = document.querySelector('.calculating__result').firstChild.nextSibling


     let user = {
          gender: 'woman'
     }

     //Btns for active and deactive
     genBtns.forEach(element => {
          element.onclick = () => {
               genBtns.forEach(a => a.classList.remove('calculating__choose-item_active'))

               element.classList.add('calculating__choose-item_active')


               user.gender = element.getAttribute('data-gen')

          }
     });

     //Inputs for giving value from user
     height.onkeyup = () => {
          user.height = +height.value
     }
     weight.onkeyup = () => {
          user.weight = +weight.value
     }
     age.onkeyup = () => {
          user.age = +age.value
     }

     //result to show the calory of user
     activities.forEach(item => {
          item.onclick = () => {
               activities.forEach(element => element.classList.remove('calculating__choose-item_active'));

               item.classList.add('calculating__choose-item_active')

               let act = +item.getAttribute('data-active')

                    if (user.gender === 'man') {
                         let result = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + 5.

                         result = result * act

                         calculating__result.innerHTML = Math.round(result)
                    } else {
                         let result = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) - 161

                         result = result * act

                         calculating__result.innerHTML = Math.round(result)
                    }
               
          }
     })

     ///////////// Timer
     // Set the date we're counting down to
     var countDownDate = new Date("September 25, 2022 16:37:52").getTime();
     let day = this.document.querySelector('#days') 
     let hour = this.document.querySelector('#hours') 
     let minute = this.document.querySelector('#minutes') 
     let sec = this.document.querySelector('#seconds') 
     var myfunc = setInterval(function () {
          var now = new Date().getTime();
          var timeleft = countDownDate - now;

          var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
          var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

          document.getElementById("days").innerHTML = days ;
          document.getElementById("hours").innerHTML = hours ;
          document.getElementById("mins").innerHTML = minutes ;
          document.getElementById("secs").innerHTML = seconds;

          if (timeleft < 0) {
               clearInterval(myfunc);
               document.getElementById("days").innerHTML = ""
               document.getElementById("hours").innerHTML = ""
               document.getElementById("mins").innerHTML = ""
               document.getElementById("secs").innerHTML = ""
               document.getElementById("end").innerHTML = "TIME UP!!";
          }
     }, 1000)
}, false);

