if (document.querySelectorAll("[data-req]").length > 0) {
   const forms = document.querySelectorAll(".form");

   for (let i = 0; i < forms.length; i++) {
      const form = forms[i];

      function removeErrorText() {
         let errors = form.querySelectorAll(".form-error-text");

         for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
         }
      }

      function generateError(text) {
         let error = document.createElement("span");
         error.className = "form-error-text";
         error.innerHTML = text;
         return error;
      }

      form.addEventListener("submit", (e) => {
         const reqs = form.querySelectorAll("[data-req]");
         removeErrorText();
         reqs.forEach((req) => {
            if (req.value.trim() === "") {
					e.preventDefault();
               req.classList.add("error");
					let error = generateError(req.dataset.error)
               req.parentElement.insertBefore(error, req);
            }
            if (req.type === "email" || req.dataset.req == "email") {
               const re = /\S+@\S+\.\S+/;
               if (!re.test(req.value)) {
						e.preventDefault();
                  req.classList.add("error");
						let error = generateError(req.dataset.error)
               	req.parentElement.insertBefore(error, req);
               }
            }
            if (req.dataset.req == "phone") {
               const match = /^[0-9]*\s{1}[0-9]*\s{1}[0-9]*$/;
               if (req.value.match(match)) {
						e.preventDefault();
                  req.classList.add("error");
						let error = generateError(req.dataset.error)
               	req.parentElement.insertBefore(error, req);
               }
            }
            setTimeout(()=>{
               req.classList.remove('error')
            }, 2000)
         });
      });
   }
}
