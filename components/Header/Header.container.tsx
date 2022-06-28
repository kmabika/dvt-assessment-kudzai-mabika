import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

// Import Component
import Header from "./Header.component";

export interface SearchBoxProps {
  updateArtists(query: SearchData[]): void;
}

const HeaderContainer = ({ updateArtists }: SearchBoxProps) => {
  async function search(criteria: string) {
    const res = await fetch("api/search", {method: "post",body: JSON.stringify({
      criteria,
    })})

    const bodyRes = await res.json();
    const {data} = bodyRes;
    return data;
  }
  
  const debouncedSearch = React.useRef(
    debounce(async (criteria) => {
      updateArtists(await search(criteria));
    }, 500)
  ).current;

  React.useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  const containerProps = {
    handleChange
  }
  return (
    <Header {...containerProps} />
  );
};

export default HeaderContainer;
