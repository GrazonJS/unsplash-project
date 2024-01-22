import React from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  // const key = qTb70qcyZksOAJGQwPdUAiraosn0c3-RPLJqj-sqpVo
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="ask anything"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
