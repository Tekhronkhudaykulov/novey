import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../heplers/request";
// import News1 from "./component/News1";
// import News2 from "./component/News2";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadNews();
  });

  const { newList } = useSelector((state) => state.OtherSlice);
  const navigate = useNavigate();
  return (
    <>
      <section class="news">
        <div class="news__container">
          <h2 class="news__title title">Новости</h2>
          {newList.map((item, index) => (
            <div
              onClick={() => navigate(`/newsDetail/${item?.id}`)}
              key={index}
              class="news__items"
            >
              <a class="news__item item-news">
                <img
                  class="item-news__img"
                  src={`${baseUrl}/${item?.photo}`}
                  alt="Картинка"
                />
                <div class="item-news__body">
                  <div class="item-news__time">
                    <i class="iconmoon-calendar"></i>
                    {item?.date}
                  </div>
                  <h4 class="item-news__title">{item?.name}</h4>
                  <div class="item-news__text">{item?.description_mini}</div>
                </div>
              </a>
            </div>
          ))}

          {/* <ul class="pagination">
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                1
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                2
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                3
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                4
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                <i class="iconmoon-arrow"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </section>
      {/* <News1 />
      <News2 /> */}
    </>
  );
};

export default News;
