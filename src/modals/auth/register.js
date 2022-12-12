import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const { loading, error } = useSelector(
    (state) => state.loading.effects.authSlice.loadData
  );

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch.authSlice.loadData({ ...data, phone: "+" + data.phone });
  };

  return (
    <div className="modals">
      <article class="modal">
        <i
          class="modal__close iconmoon-close"
          onClick={() => dispatch.authSlice.setAuthModal(false)}
        ></i>
        <div class="modal__body">
          <form onSubmit={handleSubmit(onSubmit)} class="modal__form form">
            <h3 class="modal__title title">Регистрация</h3>
            <div class="modal__inputs">
              <label class="form-group-input">
                <span class="form-group-input__label">Имя</span>
                <input
                  type="text"
                  placeholder=""
                  {...register("name", {
                    required: true,
                  })}
                />
              </label>
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
            </div>

            <button class="modal__submit button" type="submit">
              {loading ? "Loading..." : "Запросить код"}
            </button>
            <a
              onClick={() => {
                dispatch.authSlice.setAuthModal(false);
                dispatch.authSlice.setLoginModal(true);
              }}
              class="modal__link"
            >
              Войти
            </a>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Register;
