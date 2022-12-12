import React from "react";
import CheckGrenn from "../assets/img/icons/check-green.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../heplers/request";
const ListNovey = () => {
  const dispatch = useDispatch();
  const { viewProductIdList } = useSelector((state) => state.productSlice);

  const navigate = useNavigate();
  return (
    <div className="modals">
      <article class="modal compare-modal">
        <i
          onClick={() => dispatch.productSlice.productModalFunction(false)}
          class="modal__close iconmoon-close"
        ></i>
        <div class="compare-modal__header">
          <h3 class="compare-modal__title title">
            <i class="iconmoon-list"></i>Списки
          </h3>
          <div class="compare-modal__count">
            <span>1</span> Сравнение
          </div>
          <article class="compare-modal__item">
            {viewProductIdList?.photo?.includes("https://app.billz.uz") ? (
              <img src={`${viewProductIdList?.photo}`} alt="" />
            ) : (
              <img
                src={`${baseUrl}/${viewProductIdList?.photo}`}
                alt="Картинка"
              />
            )}
            <h4>{viewProductIdList?.name}</h4>
            <span>
              <i>
                <img src={CheckGrenn} alt="Картинка" />
              </i>
              Добавлено
            </span>
          </article>
        </div>
        <div class="compare-modal__body">
          <div class="compare-modal__subtitle">Сравнение</div>
          <p>Телефонов без фотокамеры</p>
          <div class="compare-modal__compare-product">
            <i
              onClick={() => {
                dispatch.basketSlice.loadСompare({
                  product_id: viewProductIdList?.id,
                });
                dispatch.productSlice.productModalFunction(false);
              }}
              class="iconmoon-trash"
            ></i>
            {viewProductIdList?.photo?.includes("https://app.billz.uz") ? (
              <img src={`${viewProductIdList?.photo}`} alt="" />
            ) : (
              <img
                src={`${baseUrl}/${viewProductIdList?.photo}`}
                alt="Картинка"
              />
            )}
            <span>{viewProductIdList?.name}</span>
            <input type="checkbox" />
          </div>
        </div>
        <div class="compare-modal__delete-all">
          <i class="iconmoon-trash"></i>
          Удалить все
        </div>
        <div
          onClick={() => navigate("/compare")}
          class="compare-modal__subtitle"
          style={{ textAlign: "center" }}
        >
          Перейти
        </div>
        <p style={{ textAlign: "center" }}>
          Выберите два или более устройства для сравнения
        </p>
      </article>
    </div>
  );
};
export default ListNovey;
