import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../../../assets/img/products/03.png";
import { baseUrl } from "../../../heplers/request";

const ProfileTabItemsFirst = ({ setToogleState }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.profileSlice.getUserInformLoad();
  }, []);

  const { userList } = useSelector((state) => state.profileSlice);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [main_address, setAddress] = useState([]);
  const [photo, setPhoto] = useState({});

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  return (
    <article
      class={
        setToogleState === 1 ? "profile__tab-body tcaer" : "profile__tab-body"
      }
      data-tab-body="1"
    >
      <div class="profile__info info-profile">
        <label class="info-profile__img">
          <img src={`${baseUrl}/${userList?.photo}`} id="img_file" alt="img " />
          <span>Изменить</span>
          <input
            type="file"
            multiple
            name="Ads[imageFiles][]"
            onchange="loadImage(event)"
            id="file-input"
            className="img-input"
            style={{ display: "none" }}
            onChange={(e) => {
              convertBase64(
                e.target.files[0],
                document.querySelectorAll("#img_file")[0]
              );
              setPhoto(e.target.files[0]);
            }}
          />
        </label>
        <div class="info-profile__header">
          <label class="form-group-input">
            <span class="form-group-input__label">Имя</span>
            <input
              defaultValue={userList?.name}
              type="text"
              placeholder="Ройтман Рафаэль Евгеньевич"
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
              specialLabel={false}
              onChange={(e) => setPhone(e)}
              inputExtraProps={{
                required: true,
                autoFocus: true,
              }}
            />
          </label>
          <label class="form-group-input">
            <span class="form-group-input__label">Адресс</span>
            <input
              type="text"
              placeholder="Введите адресс"
              defaultValue={userList?.main_address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <div class="info-profile__footer">
          <button
            class="info-profile__submit button"
            onClick={() =>
              dispatch.profileSlice.renameUserLoad({
                phone: "+" + phone,
                name,
                main_address,
                photo,
              })
            }
          >
            Сохранить
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfileTabItemsFirst;
