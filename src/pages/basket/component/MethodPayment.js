import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClickPicture from "../../../assets/img/click.png";
import Map from "./Map";

const MethodPayment = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.profileSlice.getUserInformLoad();
    dispatch.OtherSlice.loadRegion();
    dispatch.OtherSlice.loadDeliveryMethod();
    dispatch.OtherSlice.loadPaymentMethod();
  }, []);

  const { userList } = useSelector((state) => state.profileSlice);
  const { regionList, deliveryList, paymentList } = useSelector(
    (state) => state.OtherSlice
  );

  const { orderList } = useSelector((state) => state.orderSlice);

  const paymentLink = orderList.payment_link;
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState("");
  const [map_location, setCoordinate] = useState("");
  const [name, setName] = useState(userList?.name);
  const [phone, setPhone] = useState(userList?.phone);
  const [payment_id, setPayment_id] = useState("");
  const [delivery_id, setDelivery_id] = useState();

  const navigate = useNavigate();

  return (
    <section class="primary-section cart-checkout">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Оформление заказа</h2>
        </div>
        <div class="primary-section__body">
          <div class="cart-checkout__form form">
            <div class="cart-checkout__content">
              <div class="cart-checkout__inputs">
                <label class="form-group-input">
                  <span class="form-group-input__label">Ф.И.О.</span>
                  <input
                    type="text"
                    placeholder="Ройтман Рафаэль Евгеньевич"
                    defaultValue={userList?.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label class="form-group-input">
                  <span class="form-group-input__label">Телефон</span>
                  <PhoneInput
                    country={"uz"}
                    defaultMask={"(..) ...-..-.."}
                    placeholder="+998"
                    alwaysDefaultMask={true}
                    name="phone"
                    value={userList?.phone}
                    onChange={(e) => setPhone(e)}
                    specialLabel={false}
                    inputExtraProps={{
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </label>
                <label class="form-group-input">
                  <span class="form-group-input__label">Выберите область</span>
                  <select class="form-group-select">
                    <option disabled selected>
                      Выбрать
                    </option>
                    {regionList.map((item, index) => (
                      <option key={index} value={item?.name}>
                        {item?.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label class="form-group-input">
                  <span class="form-group-input__label">Город/Район</span>
                  <select class="form-group-select">
                    <option disabled selected>
                      Выбрать
                    </option>
                    <option>Район1</option>
                    <option>Район2</option>
                    <option>Район3</option>
                  </select>
                </label>
                {/* <label class="form-group-input">
                  <span class="form-group-input__label">Адресс</span>
                  <input
                    type="text"
                    data-req
                    data-error=""
                    placeholder="Напишите свой адрес"
                  />
                </label> */}
              </div>
              <div class="cart-checkout__title">Способ оплаты</div>
              <div class="cart-checkout__payments">
                {paymentList.map((item, ind) => (
                  <label key={ind} class="cart-checkout__input-radio">
                    <input type="radio" name="cartCheckoutPayment" />
                    <i class="iconmoon-wallet"></i>
                    <span onClick={() => setPayment_id(item.id)}>
                      {item?.name}
                    </span>
                  </label>
                ))}
              </div>
              <div class="cart-checkout__title">Способ доставки</div>
              <div class="cart-checkout__delivery">
                {deliveryList.map((item, index) => (
                  <label key={index} class="cart-checkout__input-radio">
                    <input type="radio" name="cartCheckoutDelivery1" />
                    <span onClick={() => setDelivery_id(item.id)}>
                      {item.name}
                    </span>
                  </label>
                ))}
              </div>
              <div class="cart-checkout__map">
                <Map
                  onClickMapsValue={(mapsValue) => {
                    setAddress(mapsValue);
                  }}
                  onClickCoordinateValue={(coordinateValue) => {
                    setCoordinate(coordinateValue);
                  }}
                  active={true}
                />
              </div>
            </div>
            <button
              onClick={async () => {
                try {
                  await dispatch.orderSlice.sendOrderLoad({
                    name: name,
                    address: address,
                    payment_id: payment_id,
                    delivery_id: delivery_id,
                    phone: phone,
                    map_location: `${map_location.lat}, ${map_location.lng}`,
                  });
                  setModal(true);
                } catch (error) {
                  alert("asfml;amfsa");
                }
              }}
              class="cart-checkout__submit button"
            >
              Оплатить
            </button>
          </div>
          {modal && (
            <div class="cart-checkout__methods">
              {/* <img src={PaymePicture} alt="Картинка" /> */}
              <a href={paymentLink}>
                <img src={ClickPicture} alt="Картинка" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MethodPayment;
