import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../heplers/request";

const SendReview = ({ product }) => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch.messageSlice.GetReviewLoad(id);
  }, []);

  const { reviewList } = useSelector((state) => state.messageSlice);

  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  return (
    <section class="primary-section productinfo-review">
      <div class="primary-section__container">
        <div class="primary-section__header">
          <h2 class="primary-section__title">Отзывы</h2>
        </div>
        <div class="primary-section__body">
          <div class="productinfo-review__items">
            {reviewList.map((item, indx) => (
              <article
                key={indx}
                class="productinfo-review__item item-productinfo-review"
              >
                <div class="item-productinfo-review__header">
                  <img
                    class="item-productinfo-review__image"
                    src={`${baseUrl}/${item?.user?.photo}`}
                    alt="Картинка"
                  />
                  <div class="item-productinfo-review__name">
                    {item?.user?.name}
                  </div>
                  <div class="item-productinfo-review__rate"></div>
                </div>
                <div class="item-productinfo-review__text text">
                  {item?.review}
                </div>
                <div class="item-productinfo-review__date">
                  <i class="iconmoon-calendar"></i>
                  {item?.date}
                </div>
              </article>
            ))}
          </div>
          <div class="productinfo-review__form form-productinfo-review form">
            <h3 class="form-productinfo-review__title title">Оставить отзыв</h3>
            <textarea
              class="form-productinfo-review__text"
              placeholder="Текст"
              onChange={(e) => setReview(e.target.value)}
              value={review}
            ></textarea>
            <div class="form-productinfo-review__rate">
              <h4>Оценить</h4>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={25}
                activeColor="yellow"
                classNames="stars"
              />
            </div>
            <button
              class="button"
              type="submit"
              onClick={() => {
                dispatch.messageSlice.sendReviewLoad({
                  rate,
                  review,
                  product_id: id,
                });
                setReview("");
              }}
            >
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendReview;
