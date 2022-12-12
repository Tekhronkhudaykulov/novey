(function () {
   'use strict';

   if (
      document.querySelector(".search-header__toggle") ||
      document.querySelector(".fixed-menu__link.search")
   ) {
      const searchToggleHeader = document.querySelector(".search-header__toggle");
      const searchToggleFixedMenu = document.querySelector(
         ".fixed-menu__link.search"
      );
      const searchForm = document.querySelector('.search-header__form.form');

      document.addEventListener("click", toggleSearch);
      function toggleSearch(e) {
         const targetElement = e.target;
         if (
            targetElement.classList.contains("search-header__toggle") ||
            targetElement.classList.contains("fixed-menu__link-search")
         ) {
   			searchForm.classList.toggle('tcaer');
         }
      }
   }

   if (document.querySelector("#steps-slider")) {
      var stepsSlider = document.getElementById("steps-slider");
      var input0 = document.getElementById("input-with-keypress-0");
      var input1 = document.getElementById("input-with-keypress-1");
      var inputs = [input0, input1];

      noUiSlider.create(stepsSlider, {
         start: [0, 200],
         connect: true,
         tooltips: false,
         // tooltips: [true, wNumb({ decimals: 1 })],
         range: {
            min: [0],
            max: 200,
         },
      });

      stepsSlider.noUiSlider.on("update", function (values, handle) {
         inputs[handle].value = values[handle];
      });

      // Listen to keydown events on the input field.
      inputs.forEach(function (input, handle) {
         input.addEventListener("change", function () {
            stepsSlider.noUiSlider.setHandle(handle, this.value);
         });

         input.addEventListener("keydown", function (e) {
            var values = stepsSlider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = stepsSlider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {
               case 13:
                  stepsSlider.noUiSlider.setHandle(handle, this.value);
                  break;

               case 38:
                  // Get step to go increase slider value (up)
                  position = step[1];

                  // false = no step is set
                  if (position === false) {
                     position = 1;
                  }

                  // null = edge of slider
                  if (position !== null) {
                     stepsSlider.noUiSlider.setHandle(handle, value + position);
                  }

                  break;

               case 40:
                  position = step[0];

                  if (position === false) {
                     position = 1;
                  }

                  if (position !== null) {
                     stepsSlider.noUiSlider.setHandle(handle, value - position);
                  }

                  break;
            }
         });
      });
   }

   if (document.querySelectorAll(".item-compare-spec__track").length > 0) {
      const tracks = document.querySelectorAll(".item-compare-spec__track");
      tracks.forEach((track) => {
         const span = document.createElement("span");
         track.append(span);
         if (track.getAttribute("data-length")) {
            const trackLength = track.getAttribute("data-length");
   			span.style.width = trackLength + '%';
         }
      });
   }

   if (document.querySelector(".main-banner__slider .swiper")) {
   	new Swiper(".main-banner__slider .swiper", {
   		loop: true,
   		observer: true,
   		observeParents: true,
   		observeSlideChildren: true,
   		spaceBetween: 0,
   		parallax: true,
   		autoplay: {
   			delay: 2000,
   		},
   		speed: 1500,
   		navigation: {
   			prevEl: ".main-banner__slider-prevbutton",
   			nextEl: ".main-banner__slider-nextbutton",
   		},
   		pagination: {
   			el: ".main-banner__slider-pagination",
   			clickable: true
   		},
   		/*
   		breakpoints: {
   			0: {
   				slidesPerView: 1,
   			},
   			480: {
   				slidesPerView: 2,
   			},
   			992: {
   				slidesPerView: 1,
   			},
   			1200: {
   				slidesPerView: 2,
   			},
   		},
   		*/
   	});
   }

   if (document.querySelector(".our-partners__slider .swiper")) {
   	new Swiper(".our-partners__slider .swiper", {
   		loop: true,
   		observer: true,
   		observeParents: true,
   		observeSlideChildren: true,
   		spaceBetween: 0,
   		parallax: true,
   		autoplay: {
   			delay: 2000,
   		},
   		speed: 1500,
   		navigation: {
   			prevEl: ".our-partners__slider-prevbutton",
   			nextEl: ".our-partners__slider-nextbutton",
   		},
   		breakpoints: {
   			0: {
   				slidesPerView: 1,
   			},
   			660: {
   				slidesPerView: 2,
   			},
   			768: {
   				slidesPerView: 3,
   			},
   			992: {
   				slidesPerView: 4,
   			},
   			1200: {
   				slidesPerView: 5,
   			},
   		},
   	});
   }

   if (document.querySelector(".our-videos__slider .swiper")) {
   	new Swiper(".our-videos__slider .swiper", {
   		loop: true,
   		observer: true,
   		observeParents: true,
   		observeSlideChildren: true,
   		spaceBetween: 0,
   		parallax: true,
   		autoplay: {
   			delay: 2000,
   		},
   		speed: 1500,
   		navigation: {
   			prevEl: ".our-videos__slider-prevbutton",
   			nextEl: ".our-videos__slider-nextbutton",
   		},
   		breakpoints: {
   			0: {
   				slidesPerView: 1,
   			},
   			660: {
   				slidesPerView: 2,
   			},
   			768: {
   				slidesPerView: 3,
   			},
   			992: {
   				slidesPerView: 4,
   			},
   			1200: {
   				slidesPerView: 5,
   			},
   		},
   	});
   }

   if(document.querySelectorAll('[data-tab]').length > 0) {
   	const tabs = document.querySelectorAll('[data-tab]');
   	tabs.forEach(tab => {
   		const btns  = tab.querySelectorAll('[data-tab-btn]');
   		const bodys = tab.querySelectorAll("[data-tab-body]");
   		for (let i = 0; i < btns.length; i++) {
   			const btn = btns[i];
   			for (let k = 0; k < bodys.length; k++) {
   				const body = bodys[k];
   				btn.addEventListener('click', () => {
   					if(btn.getAttribute("data-tab-btn") == body.getAttribute("data-tab-body")) {
   						btns.forEach(btn => {btn.classList.remove('tcaer');});
   						bodys.forEach(body => {body.classList.remove('tcaer');});
   						btn.classList.add('tcaer');
   						body.classList.add('tcaer');
   					}
   				});
   			}
   		}
   	});
   }

   if (document.querySelectorAll("[data-quantity]").length > 0) {
      let summ;
      const qunatity = document.querySelectorAll("[data-quantity]");
      qunatity.forEach((input) => {
         const decrease = input.querySelector("[data-quantity-decrease]");
         const increase = input.querySelector("[data-quantity-increase]");
         const value = input.querySelector("[data-quantity-value]");

         increase.onclick = () => {
            summ = parseFloat(value.value);
            summ = isNaN(summ) ? 0 : summ;
            summ++;
            value.value = summ;
         };
         decrease.onclick = () => {
            summ = parseFloat(value.value);
            summ = isNaN(summ) ? 0 : summ;
            if (summ > 0) summ--;
            value.value = summ;
         };
      });
   }

   if (document.querySelectorAll('[data-req="phone"]')) {
      const inputs = document.querySelectorAll('[data-req="phone"]');
      if (inputs.length > 0) {
         inputs.forEach((input) => {
            new Inputmask({
               mask: "+999 (99) 999-99-99",
               // showMaskOnHover: false
            }).mask(input);
         });
      }
   }

}());
