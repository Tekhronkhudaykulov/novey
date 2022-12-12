import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const VerifyCode = () => {
  const [code, setCode] = useState("");

  const {
    authSlice: { loadVerifyCode },
  } = useDispatch();

  const { loading, error } = useSelector(
    (state) => state.loading.effects.authSlice.loadVerifyCode
  );

  const onSubmit = (data) => {
    loadVerifyCode({ code });
  };

  return (
    <div className="modals">
      <article class="modal">
        <i class="modal__close iconmoon-close"></i>
        <div class="modal__body">
          <div class="modal__form form">
            <h3 class="modal__title title">Введите код</h3>
            {/* <div class="modal__subtitle">
              Введите код отправленный на номер +998 999 99 99
            </div> */}
            <div class="modal__inputs" style={{ justifyContent: "center" }}>
              <label class="form-group-input">
                <input
                  onChange={(e) => setCode(e.target.value)}
                  type="text"
                  data-req
                  data-error=""
                  placeholder=""
                />
              </label>
              {/* <a href="#" class="code" style={{ left: "15%" }}>
                Запросить повторно можно через 59 секунд
              </a> */}
            </div>

            <button
              onClick={onSubmit}
              class="modal__submit button"
              type="submit"
            >
              {loading ? "Loading..." : "Подтвердить"}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VerifyCode;
