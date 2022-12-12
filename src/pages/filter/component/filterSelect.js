import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const FilterSelect = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.OtherSlice.loadColors();
  }, []);

  const { colors } = useSelector((state) => state.OtherSlice);

  const [filter, setFilter] = useState([]);

  // const handleFilter = (id, value) => {
  //   setFilter((prevState) => {
  //     return {
  //       ...prevState,
  //       [id]: value,
  //     };
  //   });
  // };

  // const sendData = () => {
  //   const formData = new FormData();

  //   filter.forEach((item) => {
  //     item.value;
  //     formData.append(`data[${29}]`, item.id);
  //   });
  // };

  // const handleFilter = ({ id, value, type }) => {
  //   setFilter((filters) => {
  //     let newFilters = [...filter];
  //     const isHas = newFilters.some((i) => i.type === type);

  //     if (isHas) {
  //       newFilters = newFilters.map((i) =>
  //         i.type === type ? { ...i, id, value } : i
  //       );
  //     } else {
  //       newFilters.push({ id, value, type });
  //     }

  //     return newFilters;
  //   });
  // };

  return (
    <form action="#" class="filter__sidebar sidebar-filter" data-spollers>
      <div class="sidebar-filter__box">
        <div class="sidebar-filter__box-header" data-spoller>
          <div class="sidebar-filter__box-title">Цена ( сум )</div>
          <i class="iconmoon-arrow-chevron"></i>
        </div>
        <div class="sidebar-filter__box-body">
          <div class="sidebar-filter__nouislider">
            <div class="sidebar-filter__nouislider-inputs">
              <label class="sidebar-filter__nouislider-input">
                <span>От</span>
                <input type="text" id="input-with-keypress-0" />
              </label>
              <label class="sidebar-filter__nouislider-input">
                <span>До</span>
                <input type="text" id="input-with-keypress-1" />
              </label>
            </div>
            <div
              class="sidebar-filter__nouislider-slider"
              id="steps-slider"
            ></div>
          </div>
        </div>
      </div>
      <div class="sidebar-filter__box">
        <div class="sidebar-filter__box-header" data-spoller>
          <div class="sidebar-filter__box-title">Емкость аккамулятора</div>
          <i class="iconmoon-arrow-chevron"></i>
        </div>
        <div class="sidebar-filter__box-body">
          <label class="form-group-chechbox">
            <input class="form-group-chechbox__input" type="checkbox" />
            <span class="form-group-chechbox__text">Забрать сегодня</span>
          </label>
        </div>
      </div>
      <div class="sidebar-filter__box">
        <div class="sidebar-filter__box-header" data-spoller>
          <div class="sidebar-filter__box-title">Цвет</div>
          <i class="iconmoon-arrow-chevron"></i>
        </div>
        <div class="sidebar-filter__box-body">
          <select
            // onChange={(e) => {
            //   const slectedItem = JSON.parse(e.target.value);
            //   handleFilter({
            //     id: slectedItem.id,
            //     value: slectedItem.name,
            //     type: "color",
            //   });
            // }}
            class="form-group-select"
          >
            <option value="">Выбрать</option>
            {colors.map((item) => (
              <option value={JSON.stringify(item)}>{item.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div class="sidebar-filter__box">
        <div class="sidebar-filter__box-header" data-spoller>
          <div class="sidebar-filter__box-title">Емкость аккамулятора</div>
          <i class="iconmoon-arrow-chevron"></i>
        </div>
        <div class="sidebar-filter__box-body">
          <label class="form-group-radio">
            <input
              class="form-group-radio__input"
              type="radio"
              name="sidebarFilterRadio1"
            />
            <span class="form-group-radio__text">1821 мА ч</span>
          </label>
          <label class="form-group-radio">
            <input
              class="form-group-radio__input"
              type="radio"
              name="sidebarFilterRadio1"
            />
            <span class="form-group-radio__text">1821 мА ч</span>
          </label>
          <label class="form-group-radio">
            <input
              class="form-group-radio__input"
              type="radio"
              name="sidebarFilterRadio1"
            />
            <span class="form-group-radio__text">1821 мА ч</span>
          </label>
          <label class="form-group-radio">
            <input
              class="form-group-radio__input"
              type="radio"
              name="sidebarFilterRadio1"
            />
            <span class="form-group-radio__text">1821 мА ч</span>
          </label>
        </div>
      </div>
      <button class="sidebar-filter__submit button" type="submit">
        Показать
      </button>
    </form>
  );
};
export default FilterSelect;
