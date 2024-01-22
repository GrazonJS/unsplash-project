import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useGlobalContext } from "./context";

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_UNSPLASH_API_KEY
  }`;
  console.log(import.meta.env.VITE_UNSPLASH_API_KEY);

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      try {
        const result = await axios.get(`${url}&query=${searchTerm}`);
        console.log(result);
        return result.data;
      } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
      }
    },
  });

  console.log(response);

  if (response.isLoading) {
    return <h4 className="image-container">Loading...</h4>;
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>{`Error: ${response.error.message}`}</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (!results || results.length === 0) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item.urls.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}

export default Gallery;
