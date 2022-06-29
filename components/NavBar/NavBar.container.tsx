// NavBar Container :
// Handle search

// ___________________________________________________________________


import {useEffect, useRef} from "react";
import { debounce } from "lodash";

// Import Component
import NavBar from "./NavBar.component";


// NavBar Props
export interface Props {
  searchBox: boolean;
  updateArtists?: { (query: ArtistDataType[]): void };
  updateSearchQuery?: { (query: string): void };
}

const HeaderContainer = ({
  updateArtists,
  updateSearchQuery,
  searchBox,
}: Props) => {
  async function search(criteria: string) {
    const res = await fetch("api/search", {
      method: "post",
      body: JSON.stringify({
        criteria,
      }),
    });

    const bodyRes = await res.json();
    const { data } = bodyRes;
    if (data === undefined) {
      return [];
    } else {
      return data;
    }
  }

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      updateArtists && updateArtists(await search(criteria))!;
      updateSearchQuery && updateSearchQuery(criteria);
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  const containerProps = {
    searchBox,
    handleChange,
  };
  return <NavBar {...containerProps} />;
};

export default HeaderContainer;
