import React from "react";
import Polygon from "../../../assets/img/icons/polygon.png";

const ProductInfoVideo = () => {
  return (
    <section class="productinfo-video">
      <div class="productinfo-video__container">
        <video
          src=""
          class="productinfo-video__video"
          controls
          preload="metadata"
          poster="img/senat-web-design.png"
        ></video>
        <button class="productinfo-video__playbutton" type="button">
          <img src={Polygon} alt="Картинка" />
        </button>
      </div>
    </section>
  );
};
export default ProductInfoVideo;
