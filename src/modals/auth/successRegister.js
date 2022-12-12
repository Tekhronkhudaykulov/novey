import React from "react";

const SuccesRegister = () => {
  return (
    <div className="modals">
      <article class="modal">
        <i class="modal__close iconmoon-close"></i>
        <div class="modal__body">
          <i
            class="iconmoon-check"
            style={{
              fontSize: "70px",
              marginBottom: "20px",
              color: "#646464",
            }}
          ></i>
          <h3 class="modal__title title" style={{ marginBottom: "10px" }}>
            Вы успешно зарегестрировались
          </h3>
          <a href="#" class="modal__submit button">
            На главную
          </a>
        </div>
      </article>
    </div>
  );
};
export default SuccesRegister;
