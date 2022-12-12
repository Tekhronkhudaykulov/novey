import React from "react";

const ProfileTabItemsThird = ({ setToogleState }) => {
  return (
    <article
      class={
        setToogleState === 3 ? "profile__tab-body tcaer" : "profile__tab-body"
      }
      data-tab-body="3"
    >
      <div class="profile__table profile__transaction">
        <table class="profile__table profile__orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Товар</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Дата</th>
              <th>Адрес доставки</th>
              <th>Статус доставки</th>
              <th>Статус оплаты</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Телефон</td>
              <td>1</td>
              <td>200.000</td>
              <td>23.06.2022</td>
              <td>Адрес </td>
              <td style={{ color: "#00CF84" }}>Доставлено</td>
              <td style={{ color: "#00CF84" }}>Оплачено</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Телефон</td>
              <td>1</td>
              <td>200.000</td>
              <td>23.06.2022</td>
              <td>Адрес </td>
              <td style={{ color: "#C10707" }}>Не доставлено</td>
              <td style={{ color: "#C10707" }}>Не оплачено</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default ProfileTabItemsThird;
