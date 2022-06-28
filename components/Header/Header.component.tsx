import React from "react";
// Styled components
import * as S from "./styles.scss";
import Logo from "components/Logo";

export interface SearchBoxProps {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Header = ({ handleChange }: SearchBoxProps) => {
  return (
    <S.Header>
      <S.Navigation>
        <div>
          <Logo />
        </div>
        <S.SearchBar>
          <S.SearchInput
            type="text"
            onChange={handleChange}
            placeholder="Search for artist, songs, etc"
          />
        </S.SearchBar>
      </S.Navigation>
    </S.Header>
  );
};

export default Header;
