import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

const Input = ({ className }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let [query, setQuery] = useState("");

  const navigateSearch = () => {
    navigate(`/search?query=${query}`);
    dispatch.productSlice.productSearchLoad(query);
  };
  return (
    <>
      <button onClick={navigateSearch} className={`${className}`}>
        <i className="iconmoon-search"></i>
      </button>
      <input
        type="text"
        data-req
        data-error="error"
        placeholder="Я ищу ...."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </>
  );
};

export default Input;
