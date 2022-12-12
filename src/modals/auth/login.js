import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const { loading, error } = useSelector(
    (state) => state.loading.effects.authSlice.loadLoginData
  );

  const {
    authSlice: { loadLoginData },
  } = useDispatch();

  const onSubmit = async (data) => {
    await loadLoginData({ ...data, phone: "+" + data.phone });
  };

  const dispatch = useDispatch();

  return (
    <div className="modals">
      <article class="modal">
        <i
          onClick={() => dispatch.authSlice.setLoginModal(false)}
          class="modal__close iconmoon-close"
        ></i>
        <div class="modal__body">
          <form onSubmit={handleSubmit(onSubmit)} class="modal__form form">
            <h3 class="modal__title title">Авторизация</h3>
            <div class="modal__inputs">
              <label class="form-group-input">
                <span class="form-group-input__label">Номер телефона</span>
                <Controller
                  control={control}
                  name="phone"
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <PhoneInput
                      {...field}
                      country={"uz"}
                      defaultMask={"(..) ...-..-.."}
                      placeholder="+998"
                      alwaysDefaultMask={true}
                      name="phone"
                      specialLabel={false}
                      inputExtraProps={{
                        ref,
                        required: true,
                        autoFocus: true,
                      }}
                    />
                  )}
                />
              </label>
              <label class="form-group-input">
                <span class="form-group-input__label">Пароль</span>
                <input
                  {...register("password")}
                  type="password"
                  placeholder=""
                />
              </label>
              {/* <a href="#" class="code">
                Запросить код
              </a> */}
            </div>
            <button class="modal__submit button" type="submit">
              {loading ? "Loading..." : "Войти"}
            </button>
          </form>
          <a
            onClick={() => {
              dispatch.authSlice.setLoginModal(false);
              dispatch.authSlice.setAuthModal(true);
            }}
            href="#"
            class="modal__link"
          >
            Регистрация
          </a>
        </div>
      </article>
    </div>
  );
};
export default Login;
