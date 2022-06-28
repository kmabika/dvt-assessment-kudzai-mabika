import React, { useState, useEffect } from "react";

// Styled components
import * as S from "./styles.scss";
import Logo from "components/Logo";

export interface SearchBoxProps {
  updateArtists(query: string): void;
}

export function useQuery(query: string) {
  let [artist, setArtist] = useState(query);

  useEffect(() => {
    fetch("/api/search", {
      method: "post",
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setArtist(res);
      })
      .catch(console.log);
  }, [query]);

  return artist;
}

const Header = ({updateArtists}: SearchBoxProps) => {
  let [query, setQuery] = useState("");
  let data = useQuery(query);
  
  return (
    <S.Header>
      <S.Navigation>
        <div>
          <Logo />
        </div>
        <S.SearchBar>
          <S.SearchInput
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              updateArtists(data)
            }}
            placeholder="Search for artist, songs, etc"
          />
        </S.SearchBar>
      </S.Navigation>
    </S.Header>
  );
};

export default Header;
