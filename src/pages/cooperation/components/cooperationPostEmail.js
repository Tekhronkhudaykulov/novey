import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";

const CooperationPostEmail = () => {
  const { loading, error } = useSelector(
    (state) => state.loading.effects.messageSlice.sendMessageAdminLoad
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  return (
    <section class="home-formbox">
      <div class="home-formbox__container">
        <form class="home-formbox__form form">
          <div class="home-formbox__header">
            <h3 class="home-formbox__title title">Оставьте ваше сообщение</h3>
            <div class="home-formbox__subtitle text">
              Задайте нам вопрос или отправьте предложения. Наши менеджеры
              свяжутся с вами
            </div>
          </div>
          <div class="home-formbox__inputs">
            <label class="form-group-input home-page">
              <span class="form-group-input__label">ФИО</span>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                value={name}
              />
            </label>
            <label class="form-group-input home-page">
              <span class="form-group-input__label">Номер телефона</span>
              <PhoneInput
                country={"uz"}
                defaultMask={"(..) ...-..-.."}
                placeholder="+998"
                alwaysDefaultMask={true}
                disabled
                specialLabel={false}
                inputExtraProps={{
                  required: true,
                  autoFocus: true,
                }}
              />
            </label>
            <label class="form-group-input home-page">
              <span class="form-group-input__label">Название компании</span>
              <input type="text" placeholder="" disabled />
            </label>
            <label class="form-group-input home-page">
              <span class="form-group-input__label">Электронная почта</span>
              <input
                type="text"
                placeholder=""
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </label>
          </div>
          <label class="form-group-input home-page">
            <span class="form-group-input__label">
              Введите своё предложение
            </span>
            <textarea
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder=""
            ></textarea>
          </label>
          <button
            onClick={() => {
              dispatch.messageSlice.sendMessageAdminLoad({
                name,
                message,
                email,
              });
              setName("");
              setEmail("");
              setMessage("");
            }}
            class="home-formbox__submit button-home"
          >
            <span>
              <span>{loading ? "Loading..." : "Отправить"}</span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
export default CooperationPostEmail;
