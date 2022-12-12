import React from "react";

const Moderation = () => {
  return (
    <div className="modals">
      <article class="modal">
        <i class="modal__close iconmoon-close"></i>
        <div class="modal__body">
          <i
            class="iconmoon-mail"
            style={{
              fontSize: "70px",
              marginBottom: "20px",
              color: "#646464",
            }}
          ></i>
          <h3 class="modal__title title" style={{ marginBottom: "10px" }}>
            Ваш комментарий отправлен на модерацию
          </h3>
          <a href="#" class="modal__submit button">
            Принять
          </a>
        </div>
      </article>
    </div>
  );
};

export default Moderation;
