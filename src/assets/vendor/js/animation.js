const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll)
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 1.8;
				const windowWidth = window.innerWidth;

				let animItemPoint  = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight) {
						animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
						// if(windowWidth > 768) {
							animItem.classList.add('_animated')
						// }
				} else {
						if (!animItem.classList.contains('_anim-no-hide')) {
							animItem.classList.remove('_animated')	
						}
				}
			}
		}
		function offset (el) {
			const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
		// setTimeout(() => {
		// }, 500);
		animOnScroll()
}
